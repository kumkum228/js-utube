// # Primitive Datatype(Call by value)
// 7 Types: String, Number, Null, Boolean, Undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 987654321098766n
// console.log(bigNumber);


// console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail]);

// # Non-Primitive Datatype(Call by reference)
// 3 Types: Array, Objects, Functions

// const heros = ["Hanuman", "Jai Shree Ram", "Jai Shree Krishna"]
// console.log(heros);
// console.log(heros[0]);

// const Vamp = {
//     firstName: "Amrish",
//     lastName: "Puri"
// }
// console.log(Vamp);

// const myFunction = function() {
//     console.log("Hello world");    
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Primitive)

// let myYoutubename = "kkdotcom"
// let anotherName = myYoutubename
// anotherName = "ranidotcom"

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    email: "kk@gmail.com",
    upi: "kk@ybl"
}

let userTwo = userOne
userTwo.email = "rani@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);









