const config = {
  testEnvironment: 'jest-fixed-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/node_modules/jest-css-modules',
  },

  coveragePathIgnorePatterns: [
    '__tests__',
    '__fixtures__',
    'testUtils',
    'mock',
  ],
}

export default config
