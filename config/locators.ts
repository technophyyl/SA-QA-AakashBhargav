export const locators = {
    login: {
      usernameInput: '[data-test="username"]',
      passwordInput: '[data-test="password"]',
      loginButton: '[data-test="login-button"]',
      errorMessage: '[data-test="error"]',
    },
    inventory: {
      addToCartBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
      cartLink: '.shopping_cart_link', 
    },
    checkout: {
      checkoutButton: '[data-test="checkout"]',
      firstNameInput: '[data-test="firstName"]',
      lastNameInput: '[data-test="lastName"]',
      postalCodeInput: '[data-test="postalCode"]',
      continueButton: '[data-test="continue"]',
      finishButton: '[data-test="finish"]',
      confirmationMessage: '[data-test="complete-header"]',
    },
  };