import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import  HomePage  from '../../src/pages/home';
 

let browser: Browser;
let page: Page;
let homePage: HomePage;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  homePage= new HomePage(page);
});

After(async () => {
  await browser.close();
});

Given('I open the login page', async () => {
  homePage.gotoUrl()
  homePage.clickSignInButton();
});

When('I enter username {string}', async (username: string) => {

  await homePage.clickEmail();
   await homePage.fillEmail(username);
   // await homePage.pressEmail('Tab');
});

When('I enter password {string}', async (password: string) => {
   await homePage.clickPassword();
 await homePage.fillPassword(password);
});

When('I click login', async () => {
   await homePage.clickSubmit();
});

Then('I should see dashboard', async () => {
  ///await page.getByText('Dashboard').isVisible();
});