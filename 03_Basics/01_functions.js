// console.log("k");
// console.log("u");
// console.log("m");
// console.log("k");
// console.log("u");
// console.log("m");

// function myName() {
//     console.log("k");
//     console.log("u");
//     console.log("m");
//     console.log("k");
//     console.log("u");
//     console.log("m");
// }
// myName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);   
// }
// addTwoNumbers(3, 8);

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);   
// }
// addTwoNumbers(3, "8"); 

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);   
// }
// addTwoNumbers(3, "a");

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);   
// }
// addTwoNumbers(3, null);

// Value not returned
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);   
// }
// const result = addTwoNumbers(3, 8);  

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);   
// }
// const result = addTwoNumbers(3, 8);
// console.log("Result:", result);  // Value not return. 

// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;  
//     return result;
// }
// const result = addTwoNumbers(3, 8);
// console.log("Result:", result);

// Nothing can be print after return
// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;  
//     return result;
//     console.log("Kumkum"); // Nothing can be print after return    
// }
// const result = addTwoNumbers(3, 8);
// console.log("Result:", result);

// Everything can be print before return
// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;  
//     console.log("Kumkum"); // Everything can be print before return
//     return result;    
// }
// const result = addTwoNumbers(3, 8);
// console.log("Result:", result);

// function addTwoNumbers(num1, num2) {
//     return num1+num2;
// }
// const result = addTwoNumbers(3, 8);

// function loginUserMessage(username) {
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage("Kumkum"));

// function loginUserMessage(username) {
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage(""));

// function loginUserMessage(username) {
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage());

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return   
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage());

// function loginUserMessage(username) {
//     if (!username) {
//         console.log("Please enter a username");
//         return   
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage());

// always prints the declared value.
// function loginUserMessage(username = "Rani") {
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return   
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage()); 

// override with console log value.
// function loginUserMessage(username = "Rani") {
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return   
//     }
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage("KK-Kumkum"));

// function addTwoNumbers() {
//     let num1=2;
//     let num2=5;
//     let sum = num1 + num2;
//     console.log(sum);   
// }
// addTwoNumbers();


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))

// Objects
// const user = {
//     username: "Kumkum",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)

// undefined objects
// const user = {
//     username: "Kumkum",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject({
//     username: "kumkum",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
