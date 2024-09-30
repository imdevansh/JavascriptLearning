const user = {
    username : "devansh",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this is used to get the current context of object
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Jim"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "devansh"
//     console.log(this.username);
    
// }

// const chai = function (){
//     let username = "devansh"
//     console.log(this.username);
    
// }

const chai = () =>{
    let username = "devansh"
    console.log(this);
    
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//implicit return function
// const addTwo = (num1 , num2) =>   num1 + num2
// const addTwo = (num1 , num2) =>   (num1 + num2)
const addTwo = (num1 , num2) =>   ({name:"devansh"}) //returnning objects.
console.log(addTwo(3,4));

// const myArray = [1,2,3,4,5,6]
// myArray.forEach(() =)


