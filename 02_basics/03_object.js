// Single-ton
// Object.create()

// Object Literals

// Notes: object has key and value pair. But array has element!
// object "keys" specifically treat as string ""!

const mySym = Symbol("123")

const jsUser = {
  myName: "Histesh",
  [mySym]: "myKey",
  "full name": "Sameed",
  age: 24,
  email: "ss@gmail.com",
  isLoggedIn: false,
  lastLoggedIn: ["Mon", "Sun", "Tue"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "ssiddiqui@google.com"
// console.log(jsUser);
// Object.freeze(jsUser)
jsUser.age = 30
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS");
    
}

// same "object" ko reference karne k lye hum "this" keyword ka use karte hain funcion mai!

jsUser.greetingTwo = function() {
    console.log(`Hello ${this["full name"]}.`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




