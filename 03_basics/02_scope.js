// var c = 100
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // global scope access
  // console.log("Inner", a);
}

// console.log("Outer", a);
// console.log(b);
// console.log(c);

function one() {
  const username = "sameed";
  function two() {
    const website = "sameeddotcom";
    console.log(username);
  }
  // console.log(website);
  // two();
}
// one();

if (true) {
  const username = "sameed";
  if (username == "sameed") {
    const website = "dotcom";
    console.log(`${username + website}`);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++++++++++++ Interesting

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}



addTwo(5)
const addTwo = function (num) { // function expression
  return num + 2
}
