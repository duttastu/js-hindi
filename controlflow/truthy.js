const useremail =[]
if(useremail){
    console.log("got user email");
}
else{
    console.log("Don't have user email");
}

//falsy values

// false, 0 , -0, BigInt 0n ,"", null , undefined ,NaN

//truthy values
// "0", 'false', " ",[],{}, function(){}


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceteaprice =100
iceteaprice >=80 ? console.log("less tha 80") : console.log("more than 80");