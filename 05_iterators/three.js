// for of loop

// ["", "", ""]
// [{},{},{}]

const myArr = [1, 2, 3, 4, 5, 6];
for (const newArr of myArr) {
  //   console.log(newArr);
}

const greeting = "Hello World";
for (const greet of greeting) {
  if (greet === " ") {
    continue;
  }
  // console.log(`each char ${greet}`);
}

// map

const map = new Map();
map.set("IND", "India");
map.set("PK", "Pakistan");
map.set("USA", "United State of America");

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, value);
// } // not iterable with for or loop for this object case
