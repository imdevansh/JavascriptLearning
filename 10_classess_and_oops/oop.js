// const user = {
//     username: "devansh",
//     loginCount: 10,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user deteails from database.");
//         //console.log(`Username: ${this.username}`);
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.Username = username;
    // left hand side variable and right habd side is passed value
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    this.greeting = function(){
        console.log(`Welcome ${this.Username}`);
        
    }
    return this;
}

const userOne = new User("Devansh", 4,true);
const userTow =  new User("Gupta",6,false)
console.log(userOne.constructor);

