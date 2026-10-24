import type { Locator } from '@playwright/test';

export class Header {
  constructor(readonly root: Locator) {}

  async isVisible(): Promise<boolean> {
    return this.root.isVisible();
  }
}
