import { test, expect } from './fixtures';

test('Negative Test: Locked Out User Login', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login('locked_out_user', 'secret_sauce');
  await loginPage.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.');
});