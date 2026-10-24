import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environments';
import { TIMEOUTS, VIEWPORT } from './config/constants';

export default defineConfig({
  testDir: './tests',
  outputDir: 'reports/test-artifacts',
  timeout: TIMEOUTS.test,
  expect: { timeout: TIMEOUTS.expect },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['allure-playwright', { resultsDir: 'reports/allure-results' }],
  ],
  use: {
    baseURL: env.baseUrl || undefined,
    headless: env.headless,
    actionTimeout: TIMEOUTS.action,
    navigationTimeout: TIMEOUTS.navigation,
    screenshot: 'off',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'setup',
      testDir: './fixtures',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: VIEWPORT },
      dependencies: ['setup'],
    },
  ],
});
