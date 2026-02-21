export  function showIssueOfAny(){
    console.log("I am in Example 0001");
    let value: any = 10;
    value = "HHHello";
     console.log( value.toLowerCase());
    value = true;
   console.log( value.toLowerCase());
    console.log("I am in Example 0001");
}

export  function showIssueSolveOfAnyWithUbknow(){
    console.log("I am in Example 0001");
    let value: unknown = 10;
    value = "HHHello";
    if(typeof value=='string'){
        console.log( value.toLowerCase());
    }
     
    value = true;
    if(typeof value=='number'){
        console.log( value.toFixed());
    }
    console.log("I am in Example 0001");
}