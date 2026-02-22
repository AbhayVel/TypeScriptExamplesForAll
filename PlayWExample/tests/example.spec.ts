import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home';

test('has title', async ({ page }) => {

  const home= new HomePage(page);

  console.log('I am working in Example.spec')
  //await page.goto('https://practicesoftwaretesting.com/');
  await home.gotoUrl();
  //await page.locator('[data-test="nav-sign-in"]').click();
  await home.clickSignInButton();
  await home.clickEmail();
  await home.fillEmail('customer@practicesoftwaretesting.com');
  await home.pressEmail('Tab');
  await home.fillPassword('welcome01');
  await  home.clickSubmit();
  // await page.goto('https://practicesoftwaretesting.com/');
  // await page.locator('[data-test="nav-sign-in"]').click();
  // await page.locator('[data-test="email"]').click();
  // await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  // await page.locator('[data-test="email"]').press('Tab');
  // await page.locator('[data-test="password"]').fill('welcome01');
  // await page.locator('[data-test="login-submit"]').click();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
