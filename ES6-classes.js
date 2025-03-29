'use strict';

// Classes are just sugar coat for prototype inheritance
// Important things to remember:
// 1. Classes are NOT hoisted (They need to eb added at the top of code)
// 2. Classes are first-class citizens (they can be used as arguments)
// 3. Classes are executed in strict mode

// class expression
// const PersonCL = class {}

// class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  caclAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hi, my name is ${this.firstName}`);
  }
}

const jessica = new PersonCL('Jessica', 1990);
jessica.caclAge();
jessica.greet();
