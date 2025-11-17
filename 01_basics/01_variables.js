const accountId = 19347;
let accountEmail = "ss@gmail.com";
var accountPassword = 12345;
accountCity = "Karachi";
let accountState;

// accountId = 10012 // not allowed
accountEmail = "ss_@gmail.com";
accountPassword = 10012;
accountCity = "Lahore";

{
} // scope

/*
Prefer not to use var  
because of issue in block scope and funtional scope
*/

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
