const coding = ["js","ruby","cpp","Java"];

// coding.forEach( function(item){
//     console.log(item);
    
// })

// coding.forEach((items)=>{console.log(items);
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index , array) =>{
// console.log(item, index, array);

// })


const myCoding = [
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"C++",
        languageFileName: "CPP"
    },
    {
        languageName:"Python",
        languageFileName: "py"
    },
    {
        languageName:"Kotlin",
        languageFileName: "kt"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})