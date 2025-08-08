const {test, expect} = require('@playwright/test');
//import{utilclass} from "../../../commonmethod/util.js";

test('Browser context playwright test', async({browser})=>
{
//playwright code
//chrome - plugins/ cookies
const context= await browser.newContext();
const page=await context.newPage();
const userName = page.locator('#username');
const signIn = page.locator('#signInBtn');
const cardTitles = page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//Method 1- locator using CSS Selector-using id
//await page.locator("#username").fill("rahulshettyacademy");
//Method 2-locator using CSS Selector-using class with child
//await page.locator(".form-control:nth-child(1))").fill("rahulshettyacademy");
//Method 3-Locator using placeholder

//await page.getByPlaceholder('Username:').fill("rahulshettyacademy");
//CSS
//await page.locator("#username").fill("rahulshetty");
await userName.fill("rahulshetty");
await page.locator("#password").fill("learning");
//await page.getByPlaceholder('Password:').fill("learning");
//await page.locator("#signInBtn").click();
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//type-fill
await userName.fill("");
await userName.fill("rahulshettyacademy");
await signIn.click();
console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);

});

test('Page context playwright test', async({page})=>
{
await page.goto("https://www.amazon.in/");
console.log(await page.title());
await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

});

test('UI Control', async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("#password").fill("learning");
const documentlink=page.locator("[href*='documents-request']");
const dropdown=page.locator("select.form-control");
await dropdown.selectOption("Consultant");
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
await expect(page.locator(".radiotextsty").last()).toBeChecked();
console.log (page.locator(".radiotextsty").last().isChecked());
await expect(page.locator("#terms").toBeChecked());
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();
await expect(documentlink).toHaveAttribute("class","blinkingText");
//await page.pause();
//await signIn.click();

});

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
    const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").textContent());
 
 });

 test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3'; 
   const products = page.locator(".card-body"); 
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
  
   await page.locator("[routerlink*='cart']").click();
   
    await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
   await page.locator("[placeholder*='Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
  
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
       
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy(); 
   await page.pause();
 
});

