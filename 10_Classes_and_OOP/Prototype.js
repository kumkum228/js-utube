// Prototype:

// let myName = "kumkum"
// console.log(myName.length);

// let myName = "kumkum      "
// let myChannel = "Rani     "
// console.log(myName.trueLength);

// let myHeros = ["Akshay", "Hritik", "Spiderman"]
// let heroPower = {
//     Akshay: "comedy",
//     Hritik: "action",
//     Spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.Spiderman}`);        
//     }
// }

// Object.prototype.kumkum = function(){
//     console.log(`kumkum is present in all objects`);    
// }

// //heroPower.kumkum()
// //myHeros.kumkum()


// let myHeros = ["Akshay", "Hritik", "Spiderman"]
// let heroPower = {
//     Akshay: "comedy",
//     Hritik: "action",
//     Spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.Spiderman}`);        
//     }
// }

// Object.prototype.kumkum = function(){
//     console.log(`kumkum is present in all objects`);    
// }

// Array.prototype.heyKumkum = function(){
//     console.log(`Kumkum says hello`);    
// }

//heroPower.kumkum()
// myHeros.kumkum()
// myHeros.heyKumkum()
//heroPower.heyKumkum()

// inheritance

const User = {
    name: "Kumkum Rani",
    email: "abc@google.com"
}
const Teacher = { 
    makeVideo: true 
}
const TeachingSupport = { 
    isAvailable: false 
}
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax:
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Swetam1      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);    
}
anotherUsername.trueLength()
"Rani ".trueLength()
"Coffee".trueLength()