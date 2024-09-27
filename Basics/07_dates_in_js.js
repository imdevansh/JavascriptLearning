let myDate = new Date();
// console.log(myDate.toString()); //Fri Sep 27 2024 04:19:12 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Fri Sep 27 2024
// console.log(myDate.getDate());//27
// console.log(myDate.toISOString());//2024-09-27T04:19:12.055Z
// console.log(myDate.toLocaleDateString());//9/27/2024
//  console.log(myDate.toLocaleString());//27/9/2024, 4:19:12 am
// console.log(typeof myDate);//object

//let myCreatedDate = new Date(2024, 8, 27);
// let myCreatedDate = new Date(2024, 8, 27,5,3);

// let myCreatedDate = new Date("2024-01-12")
let myCreatedDate = new Date("2-15-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);

console.log(`${newDate.getDay()} and time is ${newDate.getTime}`);






