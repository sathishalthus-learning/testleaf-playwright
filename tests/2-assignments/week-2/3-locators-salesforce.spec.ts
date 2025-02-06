import { test, expect } from "@playwright/test";

test("create lead using playwright locators", async ({ page }) => {
  //
  await page.goto("https://login.salesforce.com/");
  await page
    .getByRole("textbox", { name: "Username" })
    .fill("sathishalthus@hotmail.com");
  await page.getByRole("textbox", { name: "Password" }).fill("Jsa@2sales");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByRole("button", { name: "App Launcher" }).click();
  await page.getByRole("button", { name: "View All Applications" }).click();
  await page.getByRole("link", { name: "Sales", exact: true }).click();
  await page.getByRole("link", { name: "Leads" }).click();
  await page.getByRole("button", { name: "New" }).click();
  await page.getByRole("combobox", { name: "Salutation" }).click();
  await page
    .getByRole("option", { name: "Mr." })
    .locator("span")
    .nth(1)
    .click();
  await page.getByRole("textbox", { name: "First Name" }).fill("Sathish");
  await page.getByRole("textbox", { name: "*Last Name" }).fill("Johnson");
  await page.getByRole("textbox", { name: "*Company" }).fill("Lite");
  await page.getByRole("button", { name: "Save", exact: true }).click();
  await expect(
    page.getByText('Lead "Mr. Sathish Johnson" was created.')
  ).toBeVisible();
});

test("create individuals using playwright locators", async ({ page }) => {
  //
  await page.goto("https://login.salesforce.com/");
  await page.getByRole("textbox", { name: "Username" }).fill("sathishalthus@hotmail.com");
  await page.getByRole("textbox", { name: "Password" }).fill("Jsa@2sales");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByRole("button", { name: "App Launcher" }).click();
  await page.getByRole("button", { name: "View All Applications" }).click();
  await page.getByRole("link", { name: "Individuals" }).click();
  await page.getByRole("button", { name: "New" }).click();
  await page.getByRole("group", { name: "* Name" }).getByRole("combobox").click();
  await page.getByRole("option", { name: "Mr." }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill("First");
  await page.getByRole("textbox", { name: "Last Name *" }).fill("Man");
  await page.getByRole("button", { name: "Save", exact: true }).click();
  await expect(page.locator('[id="toastDescription3031\\:0"]')).toContainText('Individual "First Man" was created.' );
});

test("edit individuals using playwright locators", async ({ page }) => {
  // 
await page.goto('https://login.salesforce.com/');
await page.getByRole('textbox', { name: 'Username' }).fill('sathishalthus@hotmail.com');
await page.getByRole('textbox', { name: 'Password' }).fill('Jsa@2sales');
await page.getByRole('button', { name: 'Log In' }).click();
await page.waitForTimeout   (5000);
await page.getByRole('button', { name: 'App Launcher' }).click();
await page.getByRole('button', { name: 'View All Applications' }).click();
await page.getByRole('link', { name: 'Individuals' }).click();
await page.getByRole('row').getByRole('button').first().click();
await page.getByRole('menuitem', { name: 'Edit' }).click();
await page.getByRole('option', { name: 'Dr.' }).click();
await page.getByRole('button', { name: 'Save', exact: true }).click();
await expect(page.locator('[id="toastDescription3302\\:0"]')).toContainText('Individual "First Man" was saved.');

});

test("create accout using locators", async ({ page }) => {
  // 
    await page.goto('https://login.salesforce.com/');
    await page.getByLabel('Username').fill('sathishalthus@hotmail.com');
    await page.getByLabel('Password').fill('Jsa@2sales');
    await page.locator('#Login').click();
    await page.waitForTimeout(10000);
    expect(page.url()).toContain('/SetupOneHome/');
    expect (await page.title()).toBe('Home | Salesforce');

    await page.locator('.slds-show').click();
    await page.getByText('View All').click();
    await page.getByPlaceholder('Search apps or items...').fill('Service');
    await page.locator('(//div[@data-name])[1]').click();
    await page.locator('a[title="Accounts"]').click();
    await page.getByRole('button', { name: 'New' }).click();
    await page.locator('input[name="Name"]').fill('Sathish');
    await page.locator('//button[text()="Save"]').click();
    await expect(page.getByRole('alert')).toBeVisible();
    
});
