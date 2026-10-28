import config from '@webex/jest-config-legacy';

const jestConfig = {
  rootDir: './',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testResultsProcessor: 'jest-junit',
  transformIgnorePatterns: [
    '/node_modules/(?!(uuid)/)', // Transform `uuid` using Babel
  ],
  // Clear mocks in between tests by default
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 85,
      functions: 85,
      branches: 85,
      statements: 85,
    },
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['clover', 'json', 'lcov'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'coverage/junit',
        outputName: 'coverage-junit.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
    [
      'jest-html-reporters',
      {
        publicPath: './coverage',
        filename: 'jest-report.html',
        openReport: false,
      },
    ],
  ],
};

// Keep normal unit-test behavior and the existing 85% thresholds unchanged.
// The manual Sonar workflow additionally instruments untested production files.
const sonarCoverage = process.env.SONAR_COVERAGE === 'true' ? {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageDirectory: '../../../coverage/sonar/contact-center',
  maxWorkers: 2,
} : {};

export default {...config, ...jestConfig, ...sonarCoverage};
