const coding = ["js", "html", "css", "java"];
// coding.forEach((item) => {
//   console.log(item);
// });

// coding.forEach(function (item) {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }
// // coding.forEach(printMe);

// coding.forEach(function (item, index, arr) {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    langName: "js",
  },
  {
    langName: "java",
  },
  {
    langName: "css",
  },
];

myCoding.forEach((item, index) => {
  if (index === 1) {
    console.log(item.langName);
  }
});
