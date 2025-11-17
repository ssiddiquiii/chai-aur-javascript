const tinderUser = new Object(); // single-ton object
// const tinderUserTwo = {} // literal object

// console.log(tinderUser);
// console.log(tinderUserTwo);

tinderUser.id = "123";
tinderUser.name = "Hitesh";
tinderUser.isloggedIn = true;

// console.log(tinderUser);

const regularUser = {
  email: "sameed@google.com",
  fullName: {
    username: {
      fn: "Sameed",
      ln: "Siddiqui",
    },
  },
};

// console.log(regularUser.fullName.username.fn);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = { obj1, obj2, obj3 }

// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

const users = [
  {
    id: 12,
    age: 24,
  },
  {
    id: 12,
    age: 24,
  },
  {
    id: 12,
    age: 24,
  },
];

// console.log(users[2].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isloggedIn"));


const course = {
  courseName: "JS in hindi",
  price: 999,
  courseInstructor: "Hitesh Choudhary"
}

// course.courseInstructor

const { courseInstructor: Teacher } = course // object de-structured

// console.log(courseInstructor);
console.log(Teacher);


// {
//   "name" : "Sameed",
//   "age": "23",
//   "email": "ss@gmail.com"
// }

// -->  JSON formate

[
  {},
  {},
  {},
]
