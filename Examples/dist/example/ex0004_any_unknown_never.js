"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showIssueOfAny = showIssueOfAny;
exports.showIssueSolveOfAnyWithUbknow = showIssueSolveOfAnyWithUbknow;
function showIssueOfAny() {
    console.log("I am in Example 0001");
    let value = 10;
    value = "HHHello";
    console.log(value.toLowerCase());
    value = true;
    console.log(value.toLowerCase());
    console.log("I am in Example 0001");
}
function showIssueSolveOfAnyWithUbknow() {
    console.log("I am in Example 0001");
    let value = 10;
    value = "HHHello";
    if (typeof value == 'string') {
        console.log(value.toLowerCase());
    }
    value = true;
    if (typeof value == 'number') {
        console.log(value.toFixed());
    }
    console.log("I am in Example 0001");
}
//# sourceMappingURL=ex0004_any_unknown_never.js.map