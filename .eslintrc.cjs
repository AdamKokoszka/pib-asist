module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "tailwindcss"],
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "vue/no-multiple-template-root": "off",
    "vue/first-attribute-linebreak": [
      "error",
      { singleline: "ignore", multiline: "beside" },
    ],
    "vue/html-indent": [
      "error",
      2,
      { attribute: 2, baseIndent: 1, closeBracket: 0 },
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      { singleline: "never", multiline: "never" },
    ],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/padding-line-between-tags": [
      "error",
      [{ blankLine: "always", prev: "*", next: "*" }],
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 0,
        "maxBOF": 0
      }
    ]
  },
};
