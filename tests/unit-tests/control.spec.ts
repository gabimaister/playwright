import { test, expect, chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1

const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright Build",
    name: "Playwright Test",
    user: "your-user",
    accessKey: "your-key",
  },
};


test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').fill('username');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();
});

test('first', async ({ page }) => {
  // page is signed in.
});

test('second', async ({ page }) => {
  // page is signed in.
});


//  test.describe('homepage', () => { // 2
//   test('should not have any automatically detectable accessibility issues', async ({ page }) => {
//     await page.goto('https://playwright.dev/docs/accessibility-testing'); // 3

//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

//     expect(accessibilityScanResults.violations).toEqual([]); // 5
//   });
// });



//  test('example test', async ({ page }) => {
//   const playwright = require('@playwright/test');

//   try {
//     await page.goto('https://playwright.dev');
//     await expect(page).toHaveScreenshot();
//   } catch (error) {
//     if (error instanceof playwright.errors.TimeoutError)
//       console.log("Timeout!")
//   }

// });



// test(`xxxxxxxxxxxxxxxxxxxxxx`, async({page})=>{
// await page.route('https://dog.ceo/api/breeds/list/all', async route => {
//   const response = await route.fetch();
//   const json = await response.json();
//   json.message['big_red_dog'] = [];
//   // Fullfill using the original response, while patching the response body
//   // with the given JSON object.
//   await route.fulfill({ response, json });
// });
// });