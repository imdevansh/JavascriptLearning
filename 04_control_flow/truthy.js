const userEmail = [];
if (userEmail) {
    console.log("got user mail");
    
}else{
    console.log("not found");
    
}
//falsy values
//false, 0,-0,BigInt 0n,"", null, undefined, NaN

// truthy-> "0", 'false'," ",[],{},function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyOnj = {}
if (Object.keys(emptyOnj).length === 0) {
    console.log("objetc is empty");
    
}

// Nullish coalesching operator (??):: null undefined

// let val1 ;
// //val1 = 5 ?? 10;
// val1 = undefined ?? null
// console.log(val1);

//Ternary operator

// condition ? true : false

const iceteaPrice = 10
iceteaPrice <=80 ? console.log("Less than 80") : console.log("More tha 80");

