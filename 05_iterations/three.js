//for of
const arr = [1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);
// }
// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`);
    
// }

// for (const key in arr) {
//     console.log(key);
//     console.log(typeof key);
// }

///map -- has no duplicate values

const map = new Map();
map.set('IN','India');
map.set('USA', 'United states of america');
map.set('FR', 'France');
for (const [key, value] of map) {
    //console.log(key,":-", value);
    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA5',
    'game3': 'san andreas'
}

// for (const [key, value] of myObject) {
//     console.log("Key is",key, "and value is: ",value); it will not work
    
// }