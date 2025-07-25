# Defect Report: Cart Badge Not Updating After Removing Item

**Steps to Reproduce**:
1. Log in to https://www.saucedemo.com with `standard_user` / `secret_sauce`.
2. Click “Add to cart” on the “Sauce Labs Backpack”.
3. Click the cart icon to view the cart page.
4. Click the “Remove” button next to the backpack.
5. Check the cart badge in the top-right corner.

**Expected Result**: The cart badge should show “0” or disappear, indicating an empty cart.

**Actual Result**: The cart badge still shows “1” until the page is refreshed.

**Severity**: Medium. This visual inconsistency may confuse users about their cart’s contents but doesn’t prevent purchases.

**Screenshot Description**: The cart page shows no items, but the top-right cart badge displays “1”.