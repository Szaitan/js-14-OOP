'use strict';

// First Class
// Class creating by function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Second Class
// Created by EA6 class
// 1) We are connecting classes using "extends"
class StudentCl extends Person {
  constructor(firstName, birthYear, course) {
    // 2) Next Step we call super function, in which we pass parameters
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
  }
}

const tom = new StudentCl('Tom', 1999, 'Biology');
tom.calcAge();
tom.introduce();
