import type { Locator } from '@playwright/test';

export class Sidebar {
  constructor(readonly root: Locator) {}

  async isVisible(): Promise<boolean> {
    return this.root.isVisible();
  }
}
