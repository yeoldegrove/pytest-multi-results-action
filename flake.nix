{
  description = "pytest-multi-results-action development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        nodejs = pkgs.nodejs_20;
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            nodePackages.npm
            nodePackages.prettier
          ];

          shellHook = ''
            echo "🧪 pytest-multi-results-action Development Environment"
            echo "=================================================="
            echo ""
            echo "Available commands:"
            npm run

            # Ensure test-output directory exists
            mkdir -p test-output
          '';
        };
      }
    );
}
