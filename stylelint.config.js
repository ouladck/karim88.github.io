module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/selector-no-redundant-nesting-selector": true,
  }
}
