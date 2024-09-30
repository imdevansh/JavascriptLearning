//const tinderUser = new Object() this is singleton object

const tinderUser = {} //this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Jimmy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email : "some@gmal.com",
    fullname: {
        userfullname : {
            firstname: "Devansh",
            lastName: "Gupta"
        }
    }
}

//console.log(regularUser.fullname.userfullname);
const obj1  = {1: "a", 2: "b"};
const obj2 = {3 : "c", 4:"d"};
//const obj3 = obj1 + obj2
// const obj3 = Object.assign({},obj1,obj2) //{} this is target in whcih theywill combine

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


