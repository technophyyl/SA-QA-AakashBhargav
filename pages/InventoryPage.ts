import { Page } from '@playwright/test';
import {locators} from '../config/locators';

interface InventoryPageActions {
  addBackpackToCart(): Promise<void>;
  goToCart(): Promise<void>;
}

export class InventoryPage implements InventoryPageActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart(): Promise<void> {
    await this.page.locator(locators.inventory.addToCartBackpack).click();
  }

  async goToCart(): Promise<void> {
    await this.page.locator(locators.inventory.cartLink).click();
  }
}