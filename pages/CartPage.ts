import { Page, expect } from '@playwright/test';

export class CartPage {

  constructor(private page: Page) {}

  async verifyBackpackInCart() {
    await expect(this.page.locator('.inventory_item_name'))
      .toContainText('Sauce Labs Backpack');
  }
}
