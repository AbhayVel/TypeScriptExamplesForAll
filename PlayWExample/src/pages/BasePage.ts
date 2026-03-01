import { Page } from "@playwright/test";
import { getLocators } from "../Utility/utility";


export class BasePage  {
  
 
    page: Page;
    constructor(page: Page){
        this.page=page;
    }


   async click(locactors: any){
        for(let i=0;i<locactors.length;i++ ){

            try{
                if(locactors[i].method=='locator'){
                         await this.page.locator(locactors[i].value).click({ timeout: 1000 });
                }else if(locactors[i].method=='getByRole'){
                         await this.page.getByRole(locactors[i].type,locactors[i].value).click();
                }
                
                 return;
            }catch(ex: any){
               // console.log(ex)
            }
        }
    }

     async fill(locactors: any, value: any){

        for(let i=0;i<locactors.length;i++ ){

            try{
                if(locactors[i].method=='locator'){
                         await this.page.locator(locactors[i].value).fill(value, { timeout: 1000 });
                }else if(locactors[i].method=='getByRole'){
                         await this.page.getByRole(locactors[i].type,locactors[i].value).fill(value);
                }
                
                 return;
            }catch(ex: any){
                //console.log(ex)
            }
        }
    }


     async press(locactors: any, value: any){

        for(let i=0;i<locactors.length;i++ ){

           try{
                if(locactors[i].method=='locator'){
                         await this.page.locator(locactors[i].value).fill(value);
                }if(locactors[i].method=='getByRole'){
                         await this.page.getByRole(locactors[i].type,locactors[i].value).fill(value);
                }
                
                 return;
             }catch{

             }
        }
       
    }
 
     

}