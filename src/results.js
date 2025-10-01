const fs = require("fs").promises;

const gha = require("@actions/core");

const { zip, prettyDuration } = require("./utils");

module.exports = { postResults };

// FIXME: refactor
const resultTypes = [
  "passed",
  "skipped",
  "xfailed",
  "failed",
  "xpassed",
  "error",
];
const resultTypesWithEmoji = zip(
  resultTypes,
  ["green", "yellow", "yellow", "red", "red", "red"].map(
    (color) => `:${color}_circle:`
  )
);

async function postResults(
  xmls,
  title,
  summary,
  displayOptions,
  metadataFields,
  metadataFieldMapping
) {
  const results = await extractResults(xmls);
  if (results.total_tests == 0) {
    return;
  }

  addResults(
    results,
    title,
    summary,
    displayOptions,
    metadataFields,
    metadataFieldMapping
  );
  await gha.summary.write();
}

async function extractResults(xmls) {
  const multiSuiteResults = {
    suites: {},
    aggregated: {
      total_time: 0.0,
      total_tests: 0,
      passed: [],
      failed: [],
      skipped: [],
      xfailed: [],
      xpassed: [],
      error: [],
    },
  };

  for await (const xml of xmls) {
    const metadata = xml._metadata || {};
    const filePath = xml._filePath || "unknown";

    // Create a meaningful suite identifier
    // Use filename as suite name (ending in *.xml)
    const fileName = filePath.split("/").pop() || "unknown";
    const suiteName = fileName;

    // Initialize suite if not exists
    if (!multiSuiteResults.suites[suiteName]) {
      multiSuiteResults.suites[suiteName] = {
        name: suiteName,
        filePath: filePath,
        total_time: 0.0,
        total_tests: 0,
        passed: [],
        failed: [],
        skipped: [],
        xfailed: [],
        xpassed: [],
        error: [],
        metadata: xml._metadata || {},
      };
    }

    var testSuites = xml.testsuites.testsuite;
    testSuites = testSuites instanceof Array ? testSuites : [testSuites];

    for (var testSuite of testSuites) {
      const suiteTime = parseFloat(testSuite["@_time"]);
      multiSuiteResults.suites[suiteName].total_time += suiteTime;
      multiSuiteResults.aggregated.total_time += suiteTime;

      var testCases = testSuite.testcase;
      if (!testCases) {
        continue;
      }
      testCases = testCases instanceof Array ? testCases : [testCases];

      for (const result of testCases) {
        var resultTypeArray;
        var aggregatedResultTypeArray;
        var msg;

        if (Object.hasOwn(result, "failure")) {
          var msg = result.failure["#text"];
          const parts = msg.split("[XPASS(strict)] ");
          if (parts.length == 2) {
            resultTypeArray = multiSuiteResults.suites[suiteName].xpassed;
            aggregatedResultTypeArray = multiSuiteResults.aggregated.xpassed;
            msg = parts[1];
          } else {
            resultTypeArray = multiSuiteResults.suites[suiteName].failed;
            aggregatedResultTypeArray = multiSuiteResults.aggregated.failed;
          }
        } else if (Object.hasOwn(result, "skipped")) {
          if (result.skipped["@_type"] == "pytest.xfail") {
            resultTypeArray = multiSuiteResults.suites[suiteName].xfailed;
            aggregatedResultTypeArray = multiSuiteResults.aggregated.xfailed;
          } else {
            resultTypeArray = multiSuiteResults.suites[suiteName].skipped;
            aggregatedResultTypeArray = multiSuiteResults.aggregated.skipped;
          }
          msg = result.skipped["@_message"];
        } else if (Object.hasOwn(result, "error")) {
          resultTypeArray = multiSuiteResults.suites[suiteName].error;
          aggregatedResultTypeArray = multiSuiteResults.aggregated.error;
          msg = result.error["#text"];
        } else {
          resultTypeArray = multiSuiteResults.suites[suiteName].passed;
          aggregatedResultTypeArray = multiSuiteResults.aggregated.passed;
          msg = undefined;
        }

        const testResult = {
          id: result["@_classname"] + "." + result["@_name"],
          msg: msg,
          suite: suiteName,
        };

        resultTypeArray.push(testResult);
        aggregatedResultTypeArray.push(testResult);

        multiSuiteResults.suites[suiteName].total_tests += 1;
        multiSuiteResults.aggregated.total_tests += 1;
      }
    }
  }

  // Always return the full multiSuiteResults to preserve suites and metadata
  return multiSuiteResults;
}

async function addResults(
  results,
  title,
  summary,
  displayOptions,
  metadataFields,
  metadataFieldMapping
) {
  gha.summary.addHeading(title);

  // Check if we have suite results (single or multi-suite)
  if (results.suites && Object.keys(results.suites).length > 0) {
    addMultiSuiteResults(
      results,
      summary,
      displayOptions,
      metadataFields,
      metadataFieldMapping
    );
  } else {
    // No suites found, use aggregated results (backward compatibility)
    const singleResults = results.aggregated || results;
    addSingleSuiteResults(singleResults, summary, displayOptions);
  }
}

function addMultiSuiteResults(
  results,
  summary,
  displayOptions,
  metadataFields,
  metadataFieldMapping
) {
  if (summary) {
    addOverallSummary(results.aggregated);
    addSuiteTable(results.suites, metadataFields, metadataFieldMapping);
  }

  // Add detailed results for each suite
  for (const [suiteName, suiteResults] of Object.entries(results.suites)) {
    if (hasRelevantResults(suiteResults, displayOptions)) {
      gha.summary.addHeading(`${suiteName} Details`, 2);
      addSuiteDetails(suiteResults, displayOptions);
    }
  }
}

function addSingleSuiteResults(results, summary, displayOptions) {
  if (summary) {
    addSummary(results);
  }

  for (resultType of getResultTypesFromDisplayOptions(displayOptions)) {
    const results_for_type = results[resultType];
    if (!results_for_type.length) {
      continue;
    }

    gha.summary.addHeading(resultType, 2);

    for (const result of results_for_type) {
      if (result.msg) {
        addDetailsWithCodeBlock(
          gha.summary,
          gha.summary.wrap("code", result.id),
          result.msg
        );
      } else {
        gha.summary.addRaw(`\n:heavy_check_mark: ${result.id}`, true);
      }
    }
  }
}

function addOverallSummary(results) {
  gha.summary.addRaw(
    `Ran ${results.total_tests} tests in ${prettyDuration(results.total_time)}`,
    true
  );

  var rows = [["Result", "Amount"]];
  for (const [resultType, emoji] of resultTypesWithEmoji) {
    const abs_amount = results[resultType].length;
    const rel_amount = abs_amount / results.total_tests;
    rows.push([
      `${emoji} ${resultType}`,
      `${abs_amount} (${(rel_amount * 100).toFixed(1)}%)`,
    ]);
  }
  gha.summary.addTable(rows);
}

function addSuiteTable(suites, metadataFields, metadataFieldMapping) {
  // Parse metadata field mapping
  const fieldMapping = metadataFieldMapping
    ? JSON.parse(metadataFieldMapping)
    : {};

  // Use Suite as fallback if no metadata fields provided, otherwise use the order from metadata-fields input
  const fieldsToShow = metadataFields
    ? metadataFields.split(",").map((f) => f.trim())
    : ["Suite"];

  // Build header row using the order of fields as provided
  const headerRow = [];

  // Add metadata columns in the order they were provided
  fieldsToShow.forEach((field) => {
    const displayName =
      fieldMapping[field] ||
      field.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
    headerRow.push(displayName);
  });

  // Add test statistics columns with emojis
  headerRow.push(
    "Total",
    ":green_circle: Passed",
    ":red_circle: Failed",
    ":yellow_circle: Skipped",
    ":red_circle: Errors",
    "Duration"
  );

  const suiteRows = [headerRow];

  for (const [suiteName, suiteResults] of Object.entries(suites)) {
    const row = [];

    // Add metadata values in the order they were provided
    fieldsToShow.forEach((field) => {
      const metadata = suiteResults.metadata || {};
      // For Suite field, use the suite name as fallback
      if (field === "Suite") {
        row.push(metadata[field] || suiteName);
      } else {
        row.push(metadata[field] || "-");
      }
    });

    // Add test statistics - ensure all values are properly formatted
    const stats = [
      String(suiteResults.total_tests || 0),
      String(suiteResults.passed.length || 0),
      String(suiteResults.failed.length || 0),
      String(suiteResults.skipped.length || 0),
      String(suiteResults.error.length || 0),
      prettyDuration(suiteResults.total_time),
    ];

    row.push(...stats);

    suiteRows.push(row);
  }

  gha.summary.addTable(suiteRows);
}

function addSuiteDetails(suiteResults, displayOptions) {
  for (resultType of getResultTypesFromDisplayOptions(displayOptions)) {
    const results_for_type = suiteResults[resultType];
    if (!results_for_type.length) {
      continue;
    }

    gha.summary.addHeading(resultType, 3);

    for (const result of results_for_type) {
      if (result.msg) {
        addDetailsWithCodeBlock(
          gha.summary,
          gha.summary.wrap("code", result.id),
          result.msg
        );
      } else {
        gha.summary.addRaw(`\n:heavy_check_mark: ${result.id}`, true);
      }
    }
  }
}

function hasRelevantResults(suiteResults, displayOptions) {
  const relevantTypes = getResultTypesFromDisplayOptions(displayOptions);
  return relevantTypes.some(
    (type) => suiteResults[type] && suiteResults[type].length > 0
  );
}

function addSummary(results) {
  gha.summary.addRaw(
    `Ran ${results.total_tests} tests in ${prettyDuration(results.total_time)}`,
    true
  );

  var rows = [["Result", "Amount"]];
  for (const [resultType, emoji] of resultTypesWithEmoji) {
    const abs_amount = results[resultType].length;
    const rel_amount = abs_amount / results.total_tests;
    rows.push([
      `${emoji} ${resultType}`,
      `${abs_amount} (${(rel_amount * 100).toFixed(1)}%)`,
    ]);
  }
  gha.summary.addTable(rows);
}

function getResultTypesFromDisplayOptions(displayOptions) {
  // Default to showing failed, error, and xpassed if no options provided
  if (!displayOptions) {
    displayOptions = "fEX";
  }

  // 'N' resets the list of chars passed to the '-r' option of pytest. Thus, we only
  // care about anything after the last occurrence
  const displayChars = displayOptions.split("N").pop();

  console.log(displayChars);

  if (displayChars.toLowerCase().includes("a")) {
    return resultTypes;
  }

  var displayTypes = new Set();
  for (const [displayChar, displayType] of [
    ["f", "failed"],
    ["E", "error"],
    ["s", "skipped"],
    ["x", "xfailed"],
    ["X", "xpassed"],
    ["p", "passed"],
    ["P", "passed"],
  ]) {
    if (displayOptions.includes(displayChar)) {
      displayTypes.add(displayType);
    }
  }

  return [...displayTypes];
}

function addDetailsWithCodeBlock(summary, label, code) {
  return summary.addDetails(
    label,
    "\n\n" + summary.wrap("pre", summary.wrap("code", code))
  );
}
