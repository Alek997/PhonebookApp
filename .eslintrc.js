module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
