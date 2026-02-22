import {showData, showData2, getLocatorJson, PrintJson} from './example'

// showData();
// showData2();

//showIssueOfAny();

// showIssueSolveOfAnyWithUbknow();

// type Environment = "QA" | "UAT" | "PROD" | "Dev";


// let currentEnv: Environment;

// currentEnv="Dev";


async function  show(){
let result=await getLocatorJson('login_locator.json');
console.log(result);

 result=await getLocatorJson('dashboard_locator.json');
console.log(result);
}

show();