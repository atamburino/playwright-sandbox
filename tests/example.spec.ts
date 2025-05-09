import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Navigate to a website
  await page.goto('https://example.com');
  
  // Get the title
  const title = await page.title();
  console.log('Page title:', title);
  
  // Verify the title
  expect(title).toBe('Example Domain');
  
  // Get the h1 text
  const heading = await page.locator('h1').textContent();
  expect(heading).toBe('Example Domain');
}); 