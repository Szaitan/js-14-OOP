'use strict';
const PersonProto = {
  calc() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Instance creation
const steve = Object.create(PersonProto);
steve.init('Steve', 1991);
console.log(steve);

// Creating second Proto
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.test = function () {
  console.log('this is test');
};

const mikeStudent = Object.create(StudentProto);
mikeStudent.init('Mike', 1990, 'Biology');
console.log(mikeStudent);
