// Primitive Types (Stack) - "Call by value"
// 7 Types: Number, String, Booelan, null, undefined, Bigint, Symbol

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outSideTemp = null;
let userMail;

const bigNumber = 89374737283843637n;
const id = Symbol("123");
const idOther = Symbol("123");

// console.log(id == idOther); // false



// Reference/Non-Primitive Types (Heap) - "Call by reference"
// Array, Object, Function

const heros = [1, 2, 3, 4, 5];
const info = {
    myName: "Sameed",
    age: 24
}
const myfun = function() {
    console.log("Sameed");
    
} // typeof: object function

// console.log(typeof outSideTemp);



// ++++++++++++++++++++++++++++++++++++ Memory (Stack and Heap)

// Primitive (Stack)

let myChannel = "ssdotcom"
let mySecondChannel = myChannel // call by value, give you copy not original value!

mySecondChannel = "jsdotcom"

console.log(myChannel);
console.log(mySecondChannel);

// Non-Primitive (Heap)

let myBio = {
    myName: "Sameed",
    age: 24
}

let anotherBio = myBio // call by reference give you oiginal value to modify!

anotherBio.age = 30

console.log(myBio);
console.log(anotherBio);


