const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
 // console.log(`${key} is shortcut of ${myObject[key]}`);
}

// const programming = ["js", "css", "html", "java"]
// for (const key in programming) {
//     console.log(key);
// }

// for (const key of programming) {
//     console.log(key);
// }

const map = new Map();

map.set("IND", "India");
map.set("PK", "Pakistan");
map.set("USA", "United State of America");

// for (const key in map) {
//     console.log(key);
// } 