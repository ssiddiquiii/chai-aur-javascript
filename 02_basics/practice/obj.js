// Single-ton
// Object.create()
// const info = new Object()

// object literals

const mySom = Symbol("123");

const info = {
  myName: "Sameed",
  fullName: {
    username: {
      fn: "Sameed",
      ln: "Siddiqui",
    },
  },
  [mySom]: "123",
  age: 24,
  mail: "ss@gmail.com",
  isLoggedIn: true,
  lastLoggedIn: ["Monday", "Tuesday"],
};

// console.log(info.myName);
// console.log(info["full name"]);
// console.log(info);

// info.mail = "sameedsiddiqui9@gmail.com"
// console.log(info);
// Object.freeze(info)

// info.greeting = function() {
//     console.log("Hello");
// }

// console.log(info);

// info.greetingTwo = function() {
//     console.log(`Name: ${this["full name"]}.`);

// }

// console.log(info.greetingTwo());
// console.log(info);

// ==========================================

// single-ton
// const newObj = new Object();
// newObj.id = 123;
// newObj.myName = "Sam";
// newObj.email = "ss@.com";

// console.log(newObj);

// object literals

// const regUser = {
//   fullName: {
//     username: {
//       firstName: "Sameed",
//       lastName: "Siddiqui",
//     },
//   },
//   Mail: "ss@gmail.com",
// };

// console.log(regUser.fullName.username.firstName);
// console.log(regUser["fullName"]["username"]["lastName"]);

// console.log(regUser["fullName"].username);

// let obj1 = { 1: "a", 2: "b" };
// let obj2 = { 3: "a", 4: "b" };
// let obj3 = { 5: "a", 6: "b" };
// let obj4 = {obj1, obj2, obj3}
// console.log(obj4);

// let obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

// working same above and below methods

// let obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

const users = [
  {
    id: 123,
    age: 24,
  },
  {
    id: 203,
    age: 25,
  },
  {
    id: 100,
    age: 44,
  },
];

// console.log(Object.keys(info));
// console.log(Object.values(info));
// console.log(Object.entries(info));
// console.log(info.hasOwnProperty("myName"));

// ================ object de-structuring

const { fullName: { username: { fn } } } = info;
console.log(fn);

// these two ways syntax JSON form its data 

/*
object
{
  "": "",
  "": "",
  "": "",
}

array of objects
[
  {},
  {},
  {},
]

*/
