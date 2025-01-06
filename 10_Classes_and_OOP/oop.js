// Oject Literal

// const user = {
//     username: "kumkum",
//     loginCount: 8,
//     signedIn: true
// }
// console.log(user.username);

// const user = {
//     username: "kumkum",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("Got user details from databse");       
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());

// const user = {
//     username: "kumkum",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log(`Username: ${this.username}`);               
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());

// const user = {
//     username: "kumkum",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log(this);        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());


// const user = {
//     username: "kumkum",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log(this);        
//     }
// }
// console.log(user.username);
// console.log(this);

// Constructor Function 
// const promiseOne = new Promise()
// const date = new Date() // new is constructor function

// Function

// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     return this
// }
// const userOne = User("Kumkum", 12, true)
// console.log(userOne);

// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn
//     return this
// }
// const userOne = User("Kumkum", 12, true)
// const userTwo = User("Rani", 11, false) // override by userTwo
// console.log(userOne);

// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     return this
// }
// const userOne = new User("Kumkum", 12, true)
// const userTwo = new User("Rani", 11, false) // override by userTwo
// console.log(userOne);

// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     return this
// }
// const userOne = new User("Kumkum", 12, true)
// const userTwo = new User("Rani", 11, false) // override by userTwo
// console.log(userOne);
// console.log(userTwo);


// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     //return this // implicitely defined
// }
// const userOne = new User("Kumkum", 12, true)
// const userTwo = new User("Rani", 11, false) // override by userTwo
// console.log(userOne);
// console.log(userTwo);


// New keyword: 
// Create empty object






