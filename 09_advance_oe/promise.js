const promiseOne = new Promise(function (resolve, reject) {
  // do any async task
  // DB calls, crytography, networks calls
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// ===========================================

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("async task 2 resolved");
});

// ===========================================

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ myName: "Sameed", Age: 24 });
  }, 2000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// ===========================================

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ mail: "siddiqui", isloggedIn: "Yes!" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.mail;
  })
  .then((mail) => {
    console.log(mail);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is done!");
  });

// ===========================================

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 2000);
});

async function promiseFiveConsumed() {
  try {
    const respone = await promiseFive;
    console.log(respone);
  } catch (error) {
    console.log(error);
  }
}

promiseFiveConsumed();

// ===========================================

// async function getAllUsers() {
//   try {
//     const respone = await fetch("https://api.github.com/users/ssiddiquiii");
//     const data = await respone.json();

//     console.log(data);
//   } catch (error) {
//     console.log("Error!");
//   }
// }

// getAllUsers();

// ===========================================

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((respone) => {
//     return respone.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally((done) => {
//     console.log(done);
//   });

// ===========================================

// async function getAllUsers() {
//   try {
//     console.log("Starting request");
//     const responeOne = fetch("https://api.github.com/users/hiteshchoudhary");
//     const responeTwo = fetch("https://api.github.com/users/ssiddiquiii");
//     const conOne = (await responeOne).json();
//     const conTwo = (await responeTwo).json();
//     const allResponse = await Promise.all([conOne, conTwo]);
//     console.log(allResponse);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers()

// ===========================================

async function getAllUsers() {
  try {
    const data = await Promise.all([
      fetch("https://api.github.com/users/hiteshchoudhary").then((res) =>
        res.json()
      ),
      fetch("https://api.github.com/users/ssiddiquiii").then((res) =>
        res.json()
      ),
    ]);
    console.log(data);
    
  } catch (error) {
    console.log("Error! Something went wrong");
    
  }
}

getAllUsers()
