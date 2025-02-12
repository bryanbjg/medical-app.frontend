const jsdoc = require("eslint-plugin-jsdoc");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const sonarjs = require("eslint-plugin-sonarjs");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      jsdoc,
      sonarjs
    },
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "no-console": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "jsdoc/require-jsdoc": ["error", {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true
        }
      }],
      "sonarjs/cognitive-complexity": ["warn", 10]
    }
  }
];
