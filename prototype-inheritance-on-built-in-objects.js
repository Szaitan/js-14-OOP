'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const mike = new Person('Mike', 1990);
console.log(mike);

// Object prototype (top of prototype chain)
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__); // null

const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 6];
console.log(arr.__proto__); // whole bunch of methods

// we can add out own functionality to built in object
// but its not a good habit, so better not to
arr.__proto__.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// We can check __proto__ property of DOM obejct
const h1 = document.querySelector('h1');
console.dir(h1);
