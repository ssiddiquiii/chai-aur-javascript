const myNum = [1, 2, 3];
// const myTotal = myNum.reduce((acc, curVal) => {
//     console.log(`acc: ${acc} curVal: ${curVal}`);

//   return acc + curVal;
// }, 0);

// const myTotal = myNum.reduce(function (acc, currval) {
//   return acc + currval;
// }, 0);

// console.log(myTotal);

let shopCart = [
    {
        itemName: "JS",
        price: 299
    },
    {
        itemName: "html",
        price: 199
    },
    {
        itemName: "CSS",
        price: 199
    },
]

let total = shopCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(total);

