// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }
// }

// const user_details = new User("kk@gmail.com", "1234")
// console.log(user_details.password);


// getter and setter:
// To use of get and set:

// Ex1:
// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }
//     get password(){
//         // return `${this._password}kk`
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password = value 
//     }
// }

// const user_details = new User("kk@gmail.com", "abcd")
// console.log(user_details.password);

// Ex2:
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}kk`
        // return this._password.toUpperCase()
    }
    set password(value){
        this._password = value 
    }
}

const user_details = new User("kk@gmail.com", "abcd")
console.log(user_details.password);
console.log(user_details.email);



