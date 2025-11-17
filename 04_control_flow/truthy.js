let userName = [];
// if (userName) {
//   console.log("Got username")
// } else {
//   console.log("Don't have username")
// }

// falsy value
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy value
// ' ', "0", true, 'false', [], {}, function(){}

// if (userName.length === 0) {
//   console.log("Array is empty")
// }

let emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 10 ?? undefined
val1 = null ?? 10 ?? 15;

console.log(val1);

// Ternaory Operator
// condition ? true : false
const iceTea = 100;
iceTea > 50 ? console.log("buy") : console.log("don't buy");
