'use strict'

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**.js'],
  coverageDirectory: 'coverage',
  setupTestFrameworkScriptFile: '<rootDir>/test/setup-test-framework.js',
  testEnvironment: 'node'
}
