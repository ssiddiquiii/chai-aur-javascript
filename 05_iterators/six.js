// const coding = ["js", "css", "html", "ruby"];
// const values = coding.forEach((item) => {
//   // console.log(item);
//   return item;
// });

// // console.log(values);

// forEach koi bhi value return nhi karta hai variable me hold karne k bad!

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNum.filter((item) => {
//     return item > 6
// })
// console.log(newNums);

// filter method value return karta hai!

// =========================================

const newNums = []
myNum.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);
// =========================================


const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];


let fetchInfo = books.filter((bk) => {
   return bk.genre === 'History'
})

// const getBookH = fetchInfo[1]
// console.log(getBookH);
// console.log(books.length);

fetchInfo = books.filter((item) => {
    return item.publish >= 1995 && item.genre === 'History'
})

console.log(fetchInfo);


