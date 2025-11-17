// Dates

let myDate = new Date()
// console.log(myDate);

// console.log(typeof myDate); // object


// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 17, 3,)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTempStemp = Date.now()
// console.log(myTempStemp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and time is`;

newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric"
})

console.log(newDate.toLocaleString());






