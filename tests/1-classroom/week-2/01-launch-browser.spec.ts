import { chromium,test } from '@playwright/test';

test('launch browser', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.co.in');
  console.log(await page.title());
});