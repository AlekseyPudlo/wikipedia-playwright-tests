import { defineConfig, devices } from '@playwright/test';
import { URLS } from './src/utils/constants';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'test-report', open: 'never' }]
  ],
  use: {
    baseURL: URLS.BASE_URL,
    viewport: { width: 1900, height: 1200 },
    launchOptions: {
      slowMo: 300,
    },
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'dev',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'stage',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'prod',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'api',
      testDir: './tests/api',
  },
  ],
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env['CI'],
  /* Retry on CI only */
  retries: process.env['CI'] ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env['CI'] ? 2 : 1,
});

