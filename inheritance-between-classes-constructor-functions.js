'use strict';

// First Class
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Second class
const Student = function (firstName, birthYear, course) {
  // This is how we set Person class as a parent
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};
// We have to correct the constructor of class to the true one:
Student.prototype.constructor = Student;

const mike = new Student('Mike', 1990, 'Computer Sience');
mike.introduce(); // My name is Mike and I study Computer Sience.
mike.calcAge();
console.log(mike);
console.log(mike.__proto__);
