// array

// const myArr = [1, 2, 3, 4, 5];
const heros = ["Superman", "Batman", "Hulk"];
const number = new Array(1, 2, 3, 4, 5);

// console.log(number[1]);

// Array Methods

number.push(6)
number.pop()
number.unshift(0)
number.shift()

// console.log(number.includes(4));
// console.log(number.indexOf(1));
// console.log(number);
// console.log(typeof number);


const newArr = number.join()
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

const myArr = [1, 2, 3, 4, 5];
console.log("A", myArr);

const my1 = myArr.slice(1, 3)
console.log(my1);
console.log("B", myArr);

const my2 = myArr.splice(1, 3, "Sameed")
console.log(my2);

console.log("C", myArr);








