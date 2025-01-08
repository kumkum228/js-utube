// Old Method: Get and set
// Function based syntax
// Define property 

// Ex1:
// function User(email, password) {
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
// }

// const coffee = new User("coffee@gmail.com", "abc")
// console.log(coffee.email);


// Ex2:
// function User(email, password) {
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const coffee = new User("coffee@gmail.com", "abc")
// console.log(coffee.email);
// console.log(coffee.password);






