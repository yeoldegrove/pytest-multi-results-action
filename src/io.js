const fs = require("fs").promises;
const path = require("path");

const core = require("@actions/core");
const glob = require("@actions/glob");

const { XMLParser } = require("fast-xml-parser");

module.exports = { parseXmlFiles };

async function* collectXmlFiles(paths) {
  // Handle both single path (legacy) and multiple paths (new)
  const pathArray = Array.isArray(paths) ? paths : [paths];

  for (const path of pathArray) {
    if (!path) continue; // Skip empty paths

    const globber = await glob.create(path, {
      implicitDescendants: false,
    });
    const foundPaths = await globber.glob();

    for (const file_or_dir of foundPaths) {
      var stats;
      try {
        stats = await fs.stat(file_or_dir);
      } catch (error) {
        core.setFailed(`Action failed with error ${error}`);
      }
      if (stats.isFile()) {
        yield file_or_dir;
      } else {
        const globber = await glob.create(file_or_dir + "/**/*.xml", {
          implicitDescendants: false,
        });
        for await (const file of globber.glob()) {
          yield file;
        }
      }
    }
  }
}

async function* parseXmlFiles(paths) {
  const parser = new XMLParser({
    ignoreAttributes: false,
    processEntities: false,
    attributeNamePrefix: "@_",
  });

  for await (const file of collectXmlFiles(paths)) {
    const xmlContent = await fs.readFile(file, "utf-8");
    const parsedXml = parser.parse(xmlContent);

    // Add file path to the parsed XML for later use
    parsedXml._filePath = file;
    parsedXml._metadata = extractMetadata(parsedXml, file);

    yield parsedXml;
  }
}

function extractMetadata(parsedXml, filepath) {
  const metadata = {};

  // Extract metadata from testsuite attributes
  if (parsedXml.testsuites && parsedXml.testsuites.testsuite) {
    const testsuite = parsedXml.testsuites.testsuite;

    // Extract common metadata fields - attributes are directly on testsuite with @_ prefix
    metadata["artifact"] =
      testsuite["@_artifact"] || extractArtifactFromFilename(filepath);
    metadata["type"] = testsuite["@_type"] || extractTypeFromFilename(filepath);
    metadata["namespace"] =
      testsuite["@_namespace"] || extractNamespaceFromFilename(filepath);

    // Extract pytest-metadata properties
    if (testsuite.properties && testsuite.properties.property) {
      const properties = Array.isArray(testsuite.properties.property)
        ? testsuite.properties.property
        : [testsuite.properties.property];

      properties.forEach((prop) => {
        const name = prop["@_name"];
        const value = prop["@_value"];
        if (name && value) {
          metadata[name] = value;
        }
      });
    }

    // Extract any other custom attributes
    Object.keys(testsuite).forEach((key) => {
      if (
        key.startsWith("@_") &&
        ![
          "@_name",
          "@_errors",
          "@_failures",
          "@_skipped",
          "@_tests",
          "@_time",
          "@_timestamp",
          "@_hostname",
        ].includes(key)
      ) {
        const fieldName = key.substring(2); // Remove @_ prefix
        metadata[fieldName] = testsuite[key];
      }
    });
  }

  return metadata;
}

function extractArtifactFromFilename(filepath) {
  const basename = path.basename(filepath, ".xml");
  // Extract artifact name from patterns like: aws-gardener_prod-amd64-2010.0-6f7a7b19.chroot.test-ng.xml
  const match = basename.match(
    /^([^.]+)\.(chroot|qemu|oci|cloud)\.(test-ng|test)$/
  );
  return match ? match[1] : basename.split(".")[0];
}

function extractTypeFromFilename(filepath) {
  const basename = path.basename(filepath, ".xml");
  // Extract test type from patterns like: aws-gardener_prod-amd64-2010.0-6f7a7b19.chroot.test-ng.xml
  const match = basename.match(
    /^[^.]+\.(chroot|qemu|oci|cloud)\.(test-ng|test)$/
  );
  return match ? match[1] : "unknown";
}

function extractNamespaceFromFilename(filepath) {
  const basename = path.basename(filepath, ".xml");
  // Extract namespace from patterns like: aws-gardener_prod-amd64-2010.0-6f7a7b19.chroot.test-ng.xml
  const match = basename.match(
    /^[^.]+\.(chroot|qemu|oci|cloud)\.(test-ng|test)$/
  );
  return match ? match[2] : "unknown";
}
