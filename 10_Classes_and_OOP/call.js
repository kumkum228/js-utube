// function SetUserName(username){
//     // complex DB calls
//     this.username = username
//     console.log("called");    
// }

// function createUser(username, email, password){
//     SetUserName.call(this, username)

//     this.email = email
//     this.password = password
// }

// const tea = new createUser("Taj", "taj@gmail.com", "123")
// console.log(tea);

function SetUserName(username){
    // complex DB calls
    this.username = username  
}

function createUser(username, email, password){
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}

const tea = new createUser("Taj", "taj@gmail.com", "123")
console.log(tea);

