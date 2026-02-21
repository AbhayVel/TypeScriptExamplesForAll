"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let userObj: User={
//     id: 1,
//     nmae: "Abhay"
// };
//Strongly Typed API Responses:
//Check example ex0003_Interface.
//  let userObj: User={
//      id: "aa",     //Type 'string' is not assignable to type 'number'
//      nmae: "Abhay"
//  };
let userObjCorrect = {
    id: 1,
    name: "Abhay"
};
// Better IntelliSense & Developer Productivity
userObjCorrect.id.toFixed();
//# sourceMappingURL=ex0003_Interface%20copy.js.map