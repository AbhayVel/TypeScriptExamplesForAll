"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintJson = PrintJson;
exports.getLocatorJson = getLocatorJson;
const fs_1 = require("fs");
async function PrintJson() {
    const data = await fs_1.promises.readFile('./user.json', 'utf-8');
    const jsonData = JSON.parse(data);
    console.log(jsonData);
}
async function getLocatorJson(fileName) {
    const datastring = await fs_1.promises.readFile('./locators/' + fileName, 'utf-8');
    const jsonData = JSON.parse(datastring);
    return jsonData;
}
//# sourceMappingURL=ex0009_readjson.js.map