import { test } from '@playwright/test';

test('launch browser', async ({page}) => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
  await page.go('https://google.co.in');
  console.log(await page.title());
});