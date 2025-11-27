class User {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
    }
    
    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

  get pass() {
    return `${this._pass} - Hitesh`;
    }
    
    set pass(value) {
        this._pass = value
    }
}

const app = new User("s@.com", "123");
console.log(app.pass);
console.log(app.email);

