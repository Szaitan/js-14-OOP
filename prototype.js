'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // We should never do this
  // this.calcAge = function(){
  // return 2000 - this.birthYear}
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

// Adding function to prototype object
// What we do, we are adding function to prototype object which is inside of the Person object:

Person.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};

// Object { firstName: "Jhon", birthYear: 1890 }
//birthYear: 1890
//firstName: "Jhon"
//<prototype>: Object { calcAge: calcAge(), species: "Homo Sapiens", … }

// Adding property to prototype object
Person.prototype.species = 'Homo Sapiens';

console.log(mike.calcAge()); // 35
console.log(john.calcAge()); // 135

// We can check the proto property
console.log(mike.__proto__);
console.log(mike.__proto__ === Person.prototype); // true

// To check if prototype is a property of linked objects
// Prototype property exists only on constructor functions!!!
console.log(Person.prototype.isPrototypeOf(mike)); // true
console.log(Person.prototype.isPrototypeOf(john)); // true

console.log(mike, john);
// This alows us to check if object has a property with specific name
// Because species is property shared via prototype it return false
console.log(mike.hasOwnProperty('firstName')); // true
console.log(mike.hasOwnProperty('species')); // false

// This returns information regarding the function constructor which was used to create this instance
console.log(mike.__proto__.constructor); // function Person(firstName, birthYear)

// WHAT IS IMPORTANT TO REMEMBER IS THAT PROTOTYPE CHAIN WORKS SIMILAR TO SCOPE CHAIN
// INSTEAD OF FINDING VARIABLES ITS TRY TO FIND PROPERTYS
