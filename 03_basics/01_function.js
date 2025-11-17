// Note: A function is a wrapper of a set of instructions to perform a task in a repeatedily way.

function myName() {
  console.log("S");
  console.log("a");
  console.log("m");
  console.log("e");
  console.log("e");
  console.log("d");
}

// myName()

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

// const results = addTwoNum(10, 10);
// console.log(results); // it does not hold any value it is just concoled the value not return!

function addThreeNum(num1, num2, num3) {
  //   let result = num1 + num2 + num3;
  return num1 + num2 + num3;
}

// const result = addThreeNum(9, 9, 9);
// console.log(result);

// ======================================

function logginUserMess(username = "Sam") {
  if (!username) {
    console.log("Please enter name");
    return;
  }
  return `${username}, just logged in`;
}

// console.log(logginUserMess("Sameed"));
// console.log(logginUserMess(""));
// console.log(logginUserMess());

// =======================================

function CalculateCartPrice(val1, val2, ...num1) {
  return [val1, val2, num1];
}

// console.log(CalculateCartPrice(200, 300, 400, 1000, 20000));

// ======================================

const user = {
  username: "Histesh",
  price: 1299,
};

function handleObj(anyObj) {
  console.log(`Name: ${anyObj.username} and Price: ${anyObj.price}`);
}

// handleObj(user)
handleObj({
  username: "Sameed",
  price: 1399,
});

// =======================================

const newArr = [1, 2, 3, 4, 5];
function handleArry(anyArr) {
  return anyArr[1]
}
// console.log(handleArry(newArr));
console.log(handleArry([100, 200, 300]));

