import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ProductPage } from '../pages/ProductPage';
import { UserPage } from '../pages/UserPage';
import { SCREENSHOT_NAMES } from '../config/constants';

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  productPage: ProductPage;
  userPage: UserPage;
  finalScreenshot: void;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  userPage: async ({ page }, use) => {
    await use(new UserPage(page));
  },
  finalScreenshot: [
    async ({ page }, use, testInfo) => {
      await use();
      if (testInfo.status === 'skipped' || page.isClosed()) return;
      const failed = testInfo.status !== testInfo.expectedStatus;
      await testInfo.attach(failed ? SCREENSHOT_NAMES.failed : SCREENSHOT_NAMES.passed, {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png',
      });
    },
    { auto: true },
  ],
});

export { expect };
