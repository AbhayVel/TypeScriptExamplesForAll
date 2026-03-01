import { Page } from "@playwright/test";
import { getLocators } from "../Utility/utility";
import { BasePage } from "./BasePage";


export default class HomePage  extends BasePage {
  
 

    locators: any;
   // page: Page;
    constructor(page: any){
            super(page);
       // this.page=page;
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
         await this.click(this.locators.email);
    }

    async fillEmail(email: string){
          await this.fill(this.locators.email,email);
     }

     async pressEmail(email: string){
         await this.press(this.locators.email,email);
     }

      async clickPassword() {
         await this.click(this.locators.password);
      }

     async fillPassword(password: string) {
         await this.fill(this.locators.password, password);
      }

     async clickSubmit() {
      await this.click(this.locators.submit);
   
  }
     

}