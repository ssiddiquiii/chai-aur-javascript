const marvel_heros = ["Ironman", "Spiderman", "Captain America", "Black Widow"];
const dc_heros = ["Superman", "Batman", "Flash", "Wonder Woman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[4][0]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...dc_heros, ...marvel_heros];
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, 4, 5, [6, [7, 8, [9, [10]]]]];
const real_array = anotherArray.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Sameed"));
console.log(Array.from("Hitesh"));
// console.log(Array.from({name: "Sameed"})); // interesting case

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));


