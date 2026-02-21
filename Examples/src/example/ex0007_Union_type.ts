export  function showTypeInfrence(){

   let id: string | number;
   // let id: unknown;
    id = "ABC123";  // ✅
    id = 101;       // ✅
   // id = true;      // ❌ Error

  //  if(typeof id=='string'){
  //   id.toLowerCase();
  //  }
   
    
}
