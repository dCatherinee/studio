export default {
  extends: ["stylelint-config-standard-scss"],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    "custom-property-empty-line-before": null,
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
  },
};
