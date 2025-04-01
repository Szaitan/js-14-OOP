'use strict';
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  // We call them: Instance Methods
  caclAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hi, my name is ${this.firstName}`);
  }
  // Static methods
  static hey() {
    console.log('Hey there');
  }
}

const jessica = new PersonCL('Jessica', 1990);
// We cant call static function on instances
// jessica.hey(); // this will give us error that this is not a function
PersonCL.hey(); // Hey there
