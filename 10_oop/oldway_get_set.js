function User(email, pass) {
  this._email = email;
  this._pass = pass;

  Object.defineProperty(this, "email", {
    get: function name() {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
      },
  });
    
  Object.defineProperty(this, "pass", {
    get: function name() {
      return this._pass.toUpperCase();
    },
    set: function (value) {
      this.pass = value;
    },
  });
}

const app = new User("chai@gmail.com", "123")
console.log(app.email);
console.log(app.pass);


