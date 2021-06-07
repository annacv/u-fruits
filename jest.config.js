module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleDirectories: ['node_modules'],
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!(vuetify)/)'
  ],
  moduleFileExtensions: ['vue', 'js', 'json', 'node']
}
