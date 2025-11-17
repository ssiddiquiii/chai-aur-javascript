const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNums = myNums.map((num) => {
//     return num + 10
// })

// console.log(newNums);
// forEach se ye example karna hai!

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);

console.log(newNums);
