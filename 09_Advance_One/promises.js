// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async tasks
//     // DB calls, croptography, network
//     setTimeout(function(){
//         console.log('Asyn task is complete');        
//     }, 1000)
// })
// promiseOne.then(function(){ // conection with resolve
//     console.log("Promise consumed");   
// })

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async tasks
//     // DB calls, croptography, network
//     setTimeout(function(){
//         console.log('Asyn task is complete');  
//         resolve()
//     }, 1000)
// })
// promiseOne.then(function(){ // conection with resolve
//     console.log("Promise consumed");   
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Asyn task2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");    
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "kumkum", email: "kumkum@gmail.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "Kumkum", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }       
//     }, 1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => { // the process called as chaining & this is the process of db connection
//     console.log(username);   
// }).catch(function(error){
//     console.log(error);    
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username: "Kumkum", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }       
//     }, 1000)
// })
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => { // the process called as chaining & this is the process of db connection
//     console.log(username);   
// })
// .catch(function(error){
//     console.log(error);    
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "Kumkum", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }       
//     }, 1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => { // the process called as chaining & this is the process of db connection
//     console.log(username);   
// }).catch(function(error){
//     console.log(error);    
// }).finally(() => 
//     console.log("The promise is either resolved or rejected")
// )

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username: "Rani", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }       
//     }, 1000)
// })

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);   
// }
// consumePromiseFive()

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "Rani", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }       
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);   
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//         console.log(response);       
//         // const data = await response.json()
//         // console.log(data);
//     } catch (error) {
//         console.log("Error:", error);        
//     }
// }
// getAllUsers()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);        
//     }
// }
// getAllUsers()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);        
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/users/')
// .then((response) => {
//     return response.json()
// })
// .then((data) => { // thenable
//     console.log(data);
// })    
// .catch((error) => console.log(error))


// All code run together for testing
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Kumkum", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }       
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { // the process called as chaining & this is the process of db connection
    console.log(username);   
}).catch(function(error){
    console.log(error);    
}).finally(() => 
    console.log("The promise is either resolved or rejected")
)

fetch('https://api.github.com/users/kumkum228/')
.then((response) => {
    return response.json()
})
.then((data) => { // thenable
    console.log(data);
})    
.catch((error) => console.log(error))