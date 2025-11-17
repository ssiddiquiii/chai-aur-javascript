// // if

// // let isLoggedIn = true;
// // if (isLoggedIn) {
// //   console.log("Yes");
// // }

// const temperature = 40;

// if (temperature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("greater than 50");
// }

// // if (2 != 3) {
// //   console.log("executed");
// // }

// // <,>,<=,>=,==,===,!=,!==

// let score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

// const balance = 1000;
// // if (balance > 500) console.log("Yes"), console.log("yes2");
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else if (balance < 1000) {
//   console.log("less than 1000");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}
