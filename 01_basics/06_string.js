const myName = "Sameed"
const myRepo = 3

// console.log(myName + myRepo); old way
console.log(`Name: ${myName} & Repo: ${myRepo}`);

const gameName = new String("Sameed Siddiqui")
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // start from index
console.log(gameName.indexOf('S'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4)
console.log(anotherString);

console.log(gameName.includes("a"));

const trimString = "  Sameed"
console.log(trimString);
console.log(trimString.trim());

const url = "https://www.chaicode.com"
console.log(url.replaceAll(".", "_"));

console.log(gameName.split(' '));



