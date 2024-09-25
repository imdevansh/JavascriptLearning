//how data is store and how it is accessed based on these there are two types
// of data: 1-Primitive and 2- Non-Primitive(also called refrence type).
// Primitive(Call by value)

// 7 types : Strig, Number, Boolean, null, undefined, Symbol, Big Int

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const temp = null; // object
let userEmail;

const id = Symbol('123')// use for unique value
const anotherId = Symbol('123')

// console.log(id === anotherId); // gives false
// console.log(id);
// console.log(anotherId);

const bigNumber = 166665757652n;

// console.log(typeof bigNumber);



// Reference type (Non- Primitive)
// Arrays, Objects, Functions

// Java script is dynamically types language.

const heroes = ["Ironman","Captain america","Hulk"];
let obj = {
    name: "Devansh",
    age: "25",
    email: "devansh.gupta@gmail.com"
};

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction); //function
// console.log(typeof obj);// object
// console.log(typeof heroes);// object
// console.log(typeof temp);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) , Heap(Non-Primitive type)

let myName = "Devansh"

let anotherName = myName;
 console.log(anotherName);
anotherName = "Devanshgupta";
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
console.log(userTwo.email);
userTwo.email = "devanshgupta@gmail.com";
console.log(userOne.email);

 

