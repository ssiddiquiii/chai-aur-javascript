const user = {
  username: "Sameed",
  loginCount: 8,
  signIn: true,
  getUserDetails: function () {
    // console.log(`username: ${this.username}`);
    console.log(this);
  },
}; // this is base unit, object literals

// console.log(user.username);
// console.log(user.getUserDetails());

function userInfo(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`${this.username}`);
  };
  return this; // implicitly mentioned
}

// const userOne = userInfo("Sameed", 11, false);
// const userTwo = userInfo("chai", 20, true);

const userOne = new userInfo("Sameed", 11, false);
const userTwo = new userInfo("chai", 20, true);

console.log(userOne.constructor);
console.log(userTwo.constructor);

// instanceof() 
