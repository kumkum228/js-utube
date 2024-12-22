// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Kumkum",
//     "full name": "Kumkum Kumari",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "kumkum@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "kumkum@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "kumkum@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const myHome = Symbol("💒💒")
const JsUser = {
    name: "Kumkum",
    "full name": "Kumkum Kumari",
    [myHome]: "💒💒",
    age: 18,
    location: "Jaipur",
    email: "kumkum@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser[myHome])