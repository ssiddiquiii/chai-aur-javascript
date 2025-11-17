// array

// const myArr = [1, 2, 3, 4, 5];
// const heros = ["superman", "batman", "hulk"];
// const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(heros[0]);
// console.log(myArr2[3]);

// array methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(0)
// myArr.shift()

// console.log(myArr);
// console.log(myArr.includes(1));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr); //string

// const myArr = [1, 2, 3, 4, 5];
// console.log("A:", myArr);

// const forSlice = myArr.slice(-2);
// console.log(forSlice);

// console.log("B:", myArr);
// const forSplice = myArr.splice(0, 2, "sameed")
// console.log(forSplice);
// console.log("C:", myArr);


// ===================================================

const marvel_heros = ["hulk", "widow", "captain", "thor"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros.push(dc_heros));

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_heros = [...marvel_heros, ...marvel_heros]
// console.log(all_heros);

const nestedArrayElement = [1, 2, 3, 4, 5, [6, [7, 8, [9, [10]]]]];

const simplifiedArray = nestedArrayElement.flat(4)
// console.log(simplifiedArray);

console.log(Array.isArray(marvel_heros));
console.log(Array.from("sameed"));

const score1 = 100
const score2 = 200
const score3 = 300

// console.log(Array.of(score1, score2, score3));









