const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "noida1@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   //await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count=await products.count();
   console.log(count); 
   for(let i=0;i<count;i++){
    if(await products.nth(i).locator("b").textContent()===productName){
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
   }
     //await page.pause();
     await page.locator("[routerlink*='cart']").click();
    //await page.pause();
      await page.waitForLoadState('networkidle'); 
      await page.locator("div li").first().waitFor();
      const bool=await page.locator("h3:has-text('zara coat 3')").isVisible();
      expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    optionsCount = await dropdown.locator("button").count();
    for(let i =0;i< optionsCount; ++i)
    {
        text =  await dropdown.locator("button").nth(i).textContent();
        if(text === " India")
        {
           await dropdown.locator("button").nth(i).click();
           break;
        }
    }
    await page.pause();


 
});