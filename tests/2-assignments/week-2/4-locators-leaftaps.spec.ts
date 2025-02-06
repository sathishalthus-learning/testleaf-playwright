import { test, expect } from "@playwright/test";
import exp from "constants";

test.beforeEach(async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator("#username").fill("DemoSalesManager");
  await page.locator("#password").fill("crmsfa");
  await page.locator("[value=Login]").click();
  await page.locator("(//img)[2]").click();
});

test("create and verify lead", async ({ page }) => {
  // create
  await page.locator('//a[text()="Leads"]').click();
  await page.locator('//a[text()="Create Lead"]').click();
  await page.locator('//td//input[@name="companyName"]').fill("Lite");
  await page.locator('//td//input[@name="firstName"]').fill("Sathish");
  await page.locator('//td//input[@name="lastName"]').fill("Johnson");
  await page.locator('//input[@name="personalTitle"]').fill("Mr.");
  await page.locator('//input[@name="generalProfTitle"]').fill("Engineer");
  await page.locator('//input[@name="departmentName"]').fill("Engineering");
  await page.locator('//input[@name="annualRevenue"]').fill("100000");
  ("");
  await page.locator('//input[@value="Create Lead"]').click();
  // verify
  expect(await page.locator("#viewLead_firstName_sp").textContent()).toBe(
    "Sathish"
  );
  expect(await page.locator("#viewLead_lastName_sp").textContent()).toBe(
    "Johnson"
  );
  expect(
    await page.locator("#viewLead_companyName_sp").textContent()
  ).toContain("Lite");
  expect(await page.locator("#viewLead_statusId_sp").textContent()).toBe(
    "Assigned"
  );
  expect(
    await page.locator("#viewLead_generalProfTitle_sp").textContent()
  ).toBe("Engineer");
});

test("edit lead ", async ({ page }) => {
  // search lead
  await page.locator('//a[text()="Leads"]').click();
  await page.locator('//a[text()="Find Leads"]').click();
  await page
    .locator('//div[@id="findLeads"]//input[@name="firstName"]')
    .fill("Sathish");
  await page.locator('//button[text()="Find Leads"]').click();
  await page.locator('(//a[text()="Sathish"])[1]').click();
  // edit  and update lead
  await page.locator('//a[text()="Edit"]').click();
  await page
    .locator('//div[@class="subSectionBlock"]//input[@name="companyName"]')
    .clear();
  await page
    .locator('//div[@class="subSectionBlock"]//input[@name="companyName"]')
    .fill("LiteAgain");
  await page
    .locator('//div[@class="subSectionBlock"]//input[@name="annualRevenue"]')
    .clear();
  await page
    .locator('//div[@class="subSectionBlock"]//input[@name="annualRevenue"]')
    .fill("200000");
  await page
    .locator('//div[@class="subSectionBlock"]//input[@name="departmentName"]')
    .clear();
  await page
    .locator('//div[@class="subSectionBlock"]//input[@name="departmentName"]')
    .fill("Working");
  await page
    .locator('//div[@class="subSectionBlock"]//textarea[@name="description"]')
    .fill("Updated description");
  await page.locator('//input[@value="Update"]').click();
  // verify
  expect(
    await page.locator("#viewLead_companyName_sp").textContent()
  ).toContain("LiteAgain");
  expect(await page.locator("#viewLead_departmentName_sp").textContent()).toBe(
    "Working"
  );
  expect(
    await page.locator("#viewLead_annualRevenue_sp").textContent()
  ).toContain("$200,000.00");
});


