import { Page, expect } from '@playwright/test';
import {locators} from '../config/locators';

interface LoginPageActions {
  navigate(): Promise<void>;
  login(username: string, password: string): Promise<void>;
  assertErrorMessage(expectedMessage: string): Promise<void>;
}

export class LoginPage implements LoginPageActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator(locators.login.usernameInput).fill(username);
    await this.page.locator(locators.login.passwordInput).fill(password);
    await this.page.locator(locators.login.loginButton).click();
  }

  async assertErrorMessage(expectedMessage: string): Promise<void> {
    await expect(this.page.locator(locators.login.errorMessage)).toHaveText(expectedMessage);
  }
}