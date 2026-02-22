import { Page } from "@playwright/test";
import { getLocators } from "../Utility/utility";


export class HomePage  {
  
 

    locators: any;
    page: Page;
    constructor(page: any){
        this.page=page;
        this.locators=getLocators('./locators/login.json');
        console.log(this.locators);
    }

   async gotoUrl(){

    console.log('I am working in home')
        await this.page.goto(this.locators.url, {
            waitUntil: 'domcontentloaded'
        });
    }

    async clickSignInButton(){
       await this.page.locator(this.locators.signinButton).click();
    }

    async clickEmail(){
         await this.page.locator(this.locators.email).click();
    }

    async fillEmail(email: string){
         await this.page.locator(this.locators.email).fill(email);
     }

     async pressEmail(email: string){
         await this.page.locator(this.locators.email).press(email);
     }

     async fillPassword(password: string) {
         await this.page.locator(this.locators.password).fill(password);
      }

     async clickSubmit() {
      await this.page.locator(this.locators.submit).click();
   
  }
     

}