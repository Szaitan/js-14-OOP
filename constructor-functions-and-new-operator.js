'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const mike = new Person('Mike', 1990);
console.log(mike);

// What happens when we use "new" operator
// 1. New {} is created
// 2. function is called, and this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const john = new Person('Jhon', 1890);
console.log(john);

// We can check if object was created from specific class
// using instaceof
console.log(john instanceof Person); // true
