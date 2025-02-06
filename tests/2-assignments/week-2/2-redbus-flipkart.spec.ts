import { chromium, firefox, test, expect } from '@playwright/test';

test('example test with Edge', async ({}) => {
  // browser creation
  const edgeBrowser = await chromium.launch({channel: 'msedge'});
  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();
  
  const firefoxBrowser = await firefox.launch();
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();

  // test
  await edgePage.goto('https://www.redbus.in ');
  const title1 = await edgePage.title();
  console.log(await edgePage.title());
  console.log(await edgePage.url());

  await firefoxPage.goto('https://www.flipkart.com ');
  console.log(await firefoxPage.title());
  console.log(await firefoxPage.url());
  
  // close browser
  await edgeBrowser.close();
  await firefoxBrowser.close();
});
