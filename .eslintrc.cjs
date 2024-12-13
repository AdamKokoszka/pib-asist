module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'no-param-reassign': [2, { props: false }],
    quotes: [2, 'single', { avoidEscape: true }],
    'no-console': 'error',
    'no-debugger': 'error',
    'object-curly-spacing': [2, 'always'],
    'no-multi-spaces': ['error', { exceptions: { ImportDeclaration: true } }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': { 'multiline': true, 'minProperties': 2 },
        'ObjectPattern': { 'multiline': true },
        'ImportDeclaration': { 'multiline': true }
      }
    ],
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/multi-word-component-names': 'off',
    'max-len': [
      'error',
      {
        code: 200,
        ignorePattern: '<path\\b|<svg\\b'
      }
    ],
    'no-shadow': 'off',
    'vue/no-mutating-props': [
      'error',
      {
        'shallowOnly': true
      }
    ],
    'vue/script-setup-uses-vars': 'error',
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        'ignoreWhenEmpty': true,
        'allowEmptyLines': true
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'beside',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 2,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: true,
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'tailwindcss/no-custom-classname': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/padding-line-between-tags': [
      'error',
      [{ blankLine: 'always', prev: '*', next: '*' }],
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 0,
        'maxBOF': 0
      }
    ]
  },
};
