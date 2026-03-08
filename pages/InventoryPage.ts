import { Page, expect } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) {}

  async verifyInventoryPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async addBackpackToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
