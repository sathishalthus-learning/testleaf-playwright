import { chromium,test } from '@playwright/test';

test('multiple contexts', async () => {
  const browser = await chromium.launch();
  // context 1
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://google.co.in');
  console.log(await page1.title());
  // context 2
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto('https://yahoo.co.in');
  console.log(await page2.title());
});