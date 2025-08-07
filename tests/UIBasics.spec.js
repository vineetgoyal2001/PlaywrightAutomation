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

test.only('UI Control', async({page})=>
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

