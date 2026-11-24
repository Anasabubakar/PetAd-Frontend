import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 375, height: 812 }, storageState: { cookies: [], origins: [] } });

test('expanded login text stays within the mobile viewport', async ({ page }, testInfo) => {
  await page.goto('/login?locale=en-XA');
  await expect(page.getByRole('heading', { name: /［/ })).toBeVisible();
  const button = page.getByRole('button', { name: /［Šïğñ Ïñ/ });
  await expect(button).toBeVisible();
  await button.click();
  await expect(page.getByText(/［Ëɱáïľ áďďřëšš ïš řëɋüïřëď/)).toBeVisible();

  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
  for (const control of await page.locator('button:visible, a:visible, h2:visible').all()) {
    expect(await control.evaluate((element) => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
  }
  await testInfo.attach('en-XA login at 375px', {
    body: await page.screenshot({ fullPage: true }), contentType: 'image/png',
  });
});
