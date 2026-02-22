
let key: string='name'
export  function showTypeInfrence(){

    const obj={
      id: 1,
      name: "Abhay"
    }

   
 
console.log(getProperty(obj,"id"))
 
    


     
    //console.log(obj[key])
   
    
}

function getProperty<T extends Object, K extends keyof T>(obj: T, key: K) {
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