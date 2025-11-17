// "this" keyword always use for access current context specifically in object or console!

const user = {
  username: "Sameed",
  price: 299,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // In node current context of this is empty!

// function chai() {
//   let userName = "sam";
//   console.log(this.userName); // In function "this" cannot be working!
// }
// chai();

// const chai = function () {
//   let userName = "sam";
//   console.log(this);
// };

// chai()

// const chai = () => {
//   let userName = "sam";
//   console.log(this);
// };

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // explicit return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // implicit return

const addTwo = (num1, num2) => ({ name: "sameed" }) // implicit return
console.log(addTwo());


