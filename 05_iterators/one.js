// for
// for (let i = 0; i <= 10; i++) {
//   const element = i
//   if (element === 5) {
//     console.log("5 is best")
//   }
//   console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop ${i}`)
//   for (let j = 0; j <= 10; j++) {
//     console.log(`Outer loop ${i} Inner loop ${j}`)
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Table ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let myArr = ["flash", "superman", "batman"]
// for (let i = 0; i < myArr.length; i++) {
//   const element = myArr[i]
//   console.log(element)
// }

// break and continue

for (let i = 1; i < 20; i++) {
  if (i === 5) {
    console.log("Detected 5")
    break
  }
  console.log(`Value of i is ${i}`)
}

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i is ${i}`);
}
