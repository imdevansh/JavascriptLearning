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
console.log(loginUserFunction("dev"));
 