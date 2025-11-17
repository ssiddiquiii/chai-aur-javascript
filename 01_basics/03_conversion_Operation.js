let score = "";
// console.log(typeof score);

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 2

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// "" => false
// "Sam" => true
// 1 => true, 0 => false

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************************** Operations *******************************

let value = 3;
let negValue = -value;

// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 / 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 % 2);

let str1 = "Sameed";
let str2 = "Siddiqui";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + (3 * 10) / 2);

// console.log(true);
// console.log(+true); // 1
// console.log(true+);

console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 10;
// console.log(num2);

// postfix operator
let a = 100;
let b = a++;
console.log(`a: ${a} & b: ${b}`);

// prefix operator
let x = 100;
let y = ++x;
console.log(`x: ${x} & y: ${y}`);
