module.exports = {
  root: true,
  plugins: [
    'cypress'
  ],
  env: {
    node: true,
    mocha: true,
    'cypress/globals': true
  },
  rules: {
    strict: 'off'
  }
}
