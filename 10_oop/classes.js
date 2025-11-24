// ES6

// class User {
//   constructor(username, email, pass) {
//     this.username = username;
//     this.email = email;
//     this.pass = pass;
//   }

//   encryptPass() {
//     return `${this.pass}.`;
//   }

//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "ss@.com", "12345");

// console.log(chai);
// console.log(chai.encryptPass());
// console.log(chai.changeUserName());


// Behind the scene

function User(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
}

User.prototype.encryptPass = function () {
    return `${this.pass}.`;
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "aa@.com", "98765");

console.log(tea);
console.log(tea.encryptPass());
console.log(tea.changeUserName());




