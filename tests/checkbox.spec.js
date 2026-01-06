const { test, expect } = require('@playwright/test');

test('Checkboxes can be toggled', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkboxes = page.locator('input[type="checkbox"]');

  // There are two checkboxes on this page
  await expect(checkboxes).toHaveCount(2);

  // Toggle first checkbox ON
  await checkboxes.nth(0).check();
  await expect(checkboxes.nth(0)).toBeChecked();

  // Toggle second checkbox OFF (it is usually checked by default)
  await checkboxes.nth(1).uncheck();
  await expect(checkboxes.nth(1)).not.toBeChecked();
});

