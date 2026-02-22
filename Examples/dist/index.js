"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("./example");
// showData();
// showData2();
//showIssueOfAny();
// showIssueSolveOfAnyWithUbknow();
// type Environment = "QA" | "UAT" | "PROD" | "Dev";
// let currentEnv: Environment;
// currentEnv="Dev";
async function show() {
    let result = await (0, example_1.getLocatorJson)('login_locator.json');
    console.log(result);
    result = await (0, example_1.getLocatorJson)('dashboard_locator.json');
    console.log(result);
}
show();
//# sourceMappingURL=index.js.map