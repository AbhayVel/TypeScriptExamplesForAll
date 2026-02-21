
// interface User {
//   id: number;
//   name: string;
// }


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

interface User {
  id: number;
}

interface User {
  name: string;
}

 
let userObjCorrect: User={
    id: 1,
    name: "Abhay"
    
};
 
// Better IntelliSense & Developer Productivity
userObjCorrect.id.toFixed();

