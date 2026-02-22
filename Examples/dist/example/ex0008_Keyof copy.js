"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTypeInfrence = showTypeInfrence;
let key = 'name';
function showTypeInfrence() {
    const obj = {
        id: 1,
        name: "Abhay"
    };
    console.log(getProperty(obj, "id"));
    //console.log(obj[key])
}
function getProperty(obj, key) {
    if (Object.hasOwn(obj, key)) {
        return obj[key];
    }
}
// function getProperty(obj: User, key: keyof User) {
//   return obj[key];
// }
// interface User{
//   id: number;
//   name: string;
// }
//# sourceMappingURL=ex0008_Keyof%20copy.js.map