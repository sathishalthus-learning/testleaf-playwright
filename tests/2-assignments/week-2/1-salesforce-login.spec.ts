import { chromium, test } from '@playwright/test';

test('Salesforce Login', async () => {
    // initialize
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //
    await page.goto('https://login.salesforce.com/');

    // login
    await page.getByRole('textbox', { name: 'Username' }).fill('sathishalthus@hotmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Jsa@2sales');
    await page.getByRole('button', { name: 'Log In' }).click();

    // wait for loading
    await page.waitForTimeout(10000);

    // check if login is successful
    const pageTitle = await page.title();
    const pageUrl = page.url(); 
    
    // print results
    console.log('Page Title:', pageTitle);
    console.log('Page URL:', pageUrl);

    // close browser
    await browser.close();
});