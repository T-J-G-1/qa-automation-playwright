import { test, expect } from '@playwright/test';

test('Successful login with valid credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter username
  await page.fill('#username', 'tomsmith');

  // Enter password
  await page.fill('#password', 'SuperSecretPassword!');

  // Click login
  await page.click('button[type="submit"]');

  // Verify successful login message
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
