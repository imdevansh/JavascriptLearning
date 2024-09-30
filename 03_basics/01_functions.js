function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("A");
    console.log("S");
    console.log("H");
    
}
///sayMyName()

// function addTwoNumbers( num1, num2){
//     console.log(num1 + num2);
    
// }


function addTwoNumbers( num1, num2){
    return (num1 + num2);
    
}
 const result = addTwoNumbers(8,4)

//  console.log("Result: ", result);

function loginUserFunction(userName = "Sam") { // sam is default value
    // if(userName === undefined){
    //     console.log("please enter a username");
    //     return;
    // }

    if(!userName){
        console.log("please enter a username");
        return;
    }
    return `${userName} just logged in.`;
}

//console.log(loginUserFunction("devansh"));
//console.log(loginUserFunction("dev"));
function calculateCartPrice(val1, val2,...num1){
    return num1;
}

//console.log(calculateCartPrice(200,122,123,234));

const user ={
    userName: "Devansh",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    userName: "jim",
    price : 200
})

const myArry = [200,100,230,560];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArry));
