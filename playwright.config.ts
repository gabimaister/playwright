/* eslint-disable no-undef */
// playwright.config.js
// @ts-check

// eslint-disable-next-line no-unused-vars
const { devices } = require('@playwright/test');
const MAX_FAILURES = process.env.CI ? 2 : 0;
const NUM_WORKERS = process.env.CI ? 1 : undefined;
const RETRY = 5;

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    retries: RETRY, //Retries 2 times for a total of 3 runs. When running sharded and with maxFailures = 5, this should ensure that flake is managed without failing the full suite
    testDir: './tests/unit-tests',
    testIgnore: '**/*.perf.spec.js', //Ignore performance tests and define in playwright-perfromance.config.js
    timeout: 60 * 1000,
    reporter: 'html',
    expect: {
      /**
       * Maximum time expect() should wait for the condition to be met.
       * For example in `await expect(locator).toHaveText();`
       */
      timeout: 5000
    },
      /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
    maxFailures: MAX_FAILURES, //Limits failures to 5 to reduce CI Waste
    workers: NUM_WORKERS, //Limit to 2 for CircleCI Agent
    use: {
        baseURL: 'http://localhost:8080/',
        headless: true,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        video: 'on'
    },
    projects: [
      {
        name: 'chromium',
        use: {
          ...devices['Desktop Chrome'],
        },
      },
  
      {
        name: 'firefox',
        use: {
          ...devices['Desktop Firefox'],
        },
      },
  
      {
        name: 'webkit',
        use: {
          ...devices['Desktop Safari'],
        },
      },
  
      /* Test against mobile viewports. */
      // {
      //   name: 'Mobile Chrome',
      //   use: {
      //     ...devices['Pixel 5'],
      //   },
      // },
      // {
      //   name: 'Mobile Safari',
      //   use: {
      //     ...devices['iPhone 12'],
      //   },
      // },
  
      /* Test against branded browsers. */
      // {
      //   name: 'Microsoft Edge',
      //   use: {
      //     channel: 'msedge',
      //   },
      // },
      // {
      //   name: 'Google Chrome',
      //   use: {
      //     channel: 'chrome',
      //   },
      // },
    ],
    reporter: [
        ['list'],
        ['html', {
            open: 'never',
            outputFolder: '../html-test-results' //Must be in different location due to https://github.com/microsoft/playwright/issues/12840
        }],
        ['junit', { outputFile: 'test-results/results.xml' }],
        ['github']
    ]
};

module.exports = config;