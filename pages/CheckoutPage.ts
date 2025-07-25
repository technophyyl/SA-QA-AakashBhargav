import { Page, expect } from '@playwright/test';
import {locators} from '../config/locators';

interface CheckoutPageActions {
  startCheckout(): Promise<void>;
  fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void>;
  completeCheckout(): Promise<void>;
  assertOrderConfirmation(): Promise<void>;
}

export class CheckoutPage implements CheckoutPageActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async startCheckout(): Promise<void> {
    await this.page.locator(locators.checkout.checkoutButton).click();
  }

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.locator(locators.checkout.firstNameInput).fill(firstName);
    await this.page.locator(locators.checkout.lastNameInput).fill(lastName);
    await this.page.locator(locators.checkout.postalCodeInput).fill(postalCode);
    await this.page.locator(locators.checkout.continueButton).click();
  }

  async completeCheckout(): Promise<void> {
    await this.page.locator(locators.checkout.finishButton).click();
  }

  async assertOrderConfirmation(): Promise<void> {
    await expect(this.page.locator(locators.checkout.confirmationMessage)).toHaveText('Thank you for your order!');
  }
}