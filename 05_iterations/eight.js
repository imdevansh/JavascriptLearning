const myNums = [1,2,3,4,5,6];
// const sum = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and curr ${currval}`);
    
//     return acc + currval
// }, 0);

// using arrow function

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'Js Course',
        price: 999
    },
    {
        itemName: 'Python Course',
        price: 1999
    },
    {
        itemName: 'Android Course',
        price: 5699
    },
    {
        itemName: 'Data Science Course',
        price: 9239
    }
]

const pricetoPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(pricetoPay);
