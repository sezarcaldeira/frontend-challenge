const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/node_modules/jest-css-modules',
  },
}

export default config
