import { test, type Page } from '@playwright/test';

export abstract class BasePage {
  protected abstract readonly path: string;

  constructor(protected readonly page: Page) {}

  async open(): Promise<void> {
    await test.step(`Mở trang ${this.path}`, async () => {
      await this.page.goto(this.path);
      await this.page.waitForLoadState('domcontentloaded');
    });
  }

  async title(): Promise<string> {
    return this.page.title();
  }

  currentUrl(): string {
    return this.page.url();
  }
}
