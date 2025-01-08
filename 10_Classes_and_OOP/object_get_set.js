// Object based syntax(get and set)
// Ex1: 

// const User = {
//     _email: 'kk@kyc.com',
//     _password: "abc123",

//     get email(){
//         return this._email.toUpperCase()
//     },

//     set password(value){
//         this._email = value
//     }
// }

// // Factory Function used below: universal object
// const tea = Object.create(User)
// console.log(tea.email);

// Ex2:
const User = {
    _email: 'kk@kyc.com',
    _password: "abc123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// Factory Function used below: universal object
const tea = Object.create(User)
console.log(tea.email);
