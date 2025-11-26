const des = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(des);
let setProp = Object.defineProperty(Math, "PI", {
    writable: true,
    enumerable: true,
    configurable: true
}); // not possible

Math.PI = 5;
console.log(Math.PI);

let chai = {
  name: "chai",
  price: 299,
  isLogged: true,
  isHave: function (params) {
    console.log("Oops!");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
