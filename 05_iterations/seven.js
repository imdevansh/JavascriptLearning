const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNumbers.map((num) => num+10)
//console.log(newNums);
//using for each
let newNumsFor = []
myNumbers.forEach((num) =>{
    newNumsFor.push(num + 10);
})
//console.log(newNumsFor);

const newChainingNums = myNumbers
                        .map((nums) => nums * 10)
                        .map((num) => num + 1)
                        .filter((num) => num > 23);
console.log(newChainingNums);


