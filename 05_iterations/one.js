//for

// const array = [1,2,3,4,5,6,7,8]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element == 5) {
//         console.log("5 is best number");
        
//     }
//     console.log(element);  
// }

// for (let index = 0; index <= 3; index++) {
//     console.log(`Outer loop value ${index}`);
    
//     for (let i = 0; i <= 2; i++) {
//        console.log(`Inner loop value ${i} and inner loop is ${index}`);
       
       
//     }
    
// }

// Keyword in loops

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 7) {
//         console.log(`Detected number 7`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log(`Detected number 7`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
    
}