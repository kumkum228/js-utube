// ESG

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encrptPassword(){
//         return `${this.password}abc`
//     }
// }
// const tea = new User("tea", "tea@abc.com", "123")
// console.log(tea.encrptPassword());

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encrptPassword(){
//         return `${this.password}abc`
//     }
//     changedUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const tea = new User("tea", "tea@abc.com", "123")
// console.log(tea.encrptPassword());
// console.log(tea.changedUsername());


// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encrptPassword(){
//         return `${this.password}abc`
//     }
//     changedUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const tea = new User("tea", "tea@abc.com", "123")
// console.log(tea.encrptPassword());
// console.log(tea.changedUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encrptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changedUsername = function(){
    return `${this.password}abc`
}

const tea1 = new User("Tata Tea Gold", "tea123@gmail.com", "1212")
console.log(tea1.encrptPassword());
console.log(tea1.changedUsername());

