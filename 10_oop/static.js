class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }

  static allowedID() {
    return Math.floor(Math.random() * 10 + 1);
  }
}

// const sameed = new User("Chai")
// console.log(sameed.allowedID());
// sameed.logMe()


class Phone extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

// const newPhone = new Phone("Sameed", "ss@.com")
// console.log(newPhone.allowedID())

console.log(Phone.allowedID())


// In JavaScript, the static keyword is used inside classes
// to define methods or properties that belong to the class itself, 
// not to instances of the class.


// Note! Static methods cannot be called on instances
class Parent {
  static greet() { return "Hello"; }
}

class Child extends Parent {}

Child.greet(); // "Hello"
