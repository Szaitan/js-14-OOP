'use strict';
// With ES2022 we have 4 types of fields in class
// 1) Public property
// 2) Private property
// 3) Public method
// 4) Private method

class Account {
  // Private Property
  // Lets make movements, pin and locale into private property
  #locale = navigator.language;
  #movements = [];
  // For passed parameters to be private we have to
  #pin;

  constructor(owner, currency, pin) {
    // This are public property
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // This is public method
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Private method
  // This shouldn't be viable through outside
  // to change it into private method we add '#'
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved.`);
    }
  }

  test() {
    console.log(this.#locale);
    console.log(this.#movements);
  }
}

const newAcc = new Account('Mike', 1990, 1234);
console.log(newAcc);
newAcc.test();
// console.log(newAcc.#movements); // reference to undeclared private field or method
