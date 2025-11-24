class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }
}

class Teacher extends User {
    constructor(username, email, pass) {
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

// const chai = new Teacher("chai", "ss@.com", "12345")
// chai.addCourse()
// chai.logMe()

const MasalaChai = new User("chai")
// MasalaChai.logMe()

// console.log(chai == MasalaChai); // false

// console.log(chai instanceof User);
// console.log(chai instanceof Teacher);
console.log(MasalaChai instanceof User);






