import { test, expect } from './fixtures';

test('Happy Path: Complete Purchase Flow', async ({ loginPage, inventoryPage, checkoutPage }) => {
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();
  await checkoutPage.startCheckout();
  await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
  await checkoutPage.completeCheckout();
  await checkoutPage.assertOrderConfirmation();
});


