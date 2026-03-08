import { test, expect } from '../../fixtures/testFixture';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test('@regression add item to cart', async ({ loggedInPage }) => {

  const inventory = new InventoryPage(loggedInPage);
  const cart = new CartPage(loggedInPage);

  await inventory.addBackpackToCart();
  await inventory.openCart();

  await cart.verifyBackpackInCart();

});
