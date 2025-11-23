function Setusername(username) {
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, pass) {
    Setusername.call(this, username)
    this.email = email
    this. pass = pass
}

const chai = new createUser("chai", "chai@example.com", "123")
console.log(chai);
