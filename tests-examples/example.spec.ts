import { test, expect, chromium  } from '@playwright/test';

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

 


 test(`Should add item to cart using API`, async({page})=>{
   const Url = 'https://ecommerce-playground.lambdatest.io/index.php/' ;
   await page.goto(Url);
   const response =await page.request.post(Url, {
     params:{
       route: "checkout/cart/add"
     },
     form: {
       product_id: 28,
       quantity: 1
     }
   })
   await page.goto(`${Url}?route=checkout/cart`)
   await expect(page.locator("td.text-left", {hasText: 'HTC Touch HD'})).toBeVisible()
   await expect(page.locator("div[class$='flex-nowrap'] > input")).toHaveValue("1")
})