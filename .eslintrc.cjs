module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react/function-component-definition': 0,
    'react-refresh/only-export-components': 1,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-console': 0,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'arrow-body-style': 0,
    'prettier/prettier': 0,
    'import/prefer-default-export': 0,
  },
};