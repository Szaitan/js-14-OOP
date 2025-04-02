'use strict';

// Object create is a way to create object, however is not use for this purpose.
// It's true purpose is inheritance between two diffrent objects

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // That's how we supose to set property for object
  innit(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// To create object we use
// The proto property is exaclty PersonProto class
const sasha = Object.create(PersonProto);
sasha.innit('Sasha', 1990);
sasha.calcAge(); //47
