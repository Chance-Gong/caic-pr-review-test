import { test, expect } from '@playwright/test';

test('chat opens', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'Send' })).toBeVisible();
});
