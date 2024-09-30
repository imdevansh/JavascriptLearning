// when onkect is defind though constructor then it is singleton => Object.create
//we can define by constructor or by literals

// object by literal

const mySym = Symbol("key1")
const jsUser = {
    name : "Devansh",
    "fullname": "Devansh Gupta",
    age : 18,
    [mySym]: "myKey1",
    location : "Jaipur",
    email: "devansh@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Saturday"]
}

// console.log(jsUser.email); // this is one way there is one more way.

// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

jsUser.email = "devansh.gupta@email.com";
jsUser["age"] = 24;
//Object.freeze(jsUser)// freeze all change
jsUser.email =" devans@mail.com"

// console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




