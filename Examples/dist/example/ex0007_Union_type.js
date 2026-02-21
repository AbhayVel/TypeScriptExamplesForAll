"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTypeInfrence = showTypeInfrence;
function showTypeInfrence() {
    let id;
    // let id: unknown;
    id = "ABC123"; // ✅
    id = 101; // ✅
    // id = true;      // ❌ Error
    //  if(typeof id=='string'){
    //   id.toLowerCase();
    //  }
}
//# sourceMappingURL=ex0007_Union_type.js.map