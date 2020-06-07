module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    cmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  plugins: ['prettier'],
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    // Check props type
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    // Một số rule trong airbnb ko quan trọng thì tắt nó đi như linebreak-style
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'reat/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-first-prop-new-line': 1,
    'no-unused-vars': 1,
    'import/extensions': 0,
    'import/order': 1,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'prettier/prettier': ['error', {
      endOfLine: "auto"
    }],
  },
};
