module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true
  },
  plugins: ['wdio', 'mocha'],
  extends: ['standard', 'prettier', 'plugin:wdio/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
}
