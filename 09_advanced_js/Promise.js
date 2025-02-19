const promiseOne = new Promise(
    function(resolve,reject){
        //Do an asyn task
        // Db Calls, cryptography, network
        setTimeout(function(){
            console.log('Async task is complete..');
            resolve()
        },1000)
});

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2..');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved...");
    
});

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    },1000)
});

promiseThree.then(function(user){
    console.log(user);
    
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Devansh",password:"1231"})
        }else{
            reject("Erro: somehing went wrong..");
        }
    },1000)
});

promiseFour.then((data)=>{
    console.log(data);
    return data.username
}).then((userName)=>{
    console.log(userName)
}).catch((error)=>{
    console.log(error);  
}).finally(()=>console.log("Promise is either reolved or rejected"))

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript",password:"1231"})
        }else{
            reject("Error: JS went wrong..");
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive()


// async function getAllUsers() {
// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
    
// } catch (error) {
//     console.log("E:",error);
    
// }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((e)=> console.log(e))