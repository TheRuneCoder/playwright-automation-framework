import { test } from '../../fixtures/testFixture';
import { InventoryPage } from '../../pages/InventoryPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('@regression complete checkout flow', async ({ loggedInPage }) => {

  const inventory = new InventoryPage(loggedInPage);
  const checkout = new CheckoutPage(loggedInPage);

  await inventory.addBackpackToCart();
  await inventory.openCart();

  await checkout.checkout('Test','User','500001');

});
