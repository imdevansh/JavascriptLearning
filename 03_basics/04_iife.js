// Immediately invoked functions expression (IIFE) 
// sometimes there is pollution due to global scope. To remove that we are using iffe.
// use semicolon to edn
(function chai(){// named iifee
    console.log(`Db connnected`);
    
})();


((name) => {// unamed iffe
    console.log(`Db connected t0 ${name}`);
    
})('Devansh');