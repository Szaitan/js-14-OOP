'use strict';

//Function expression
const Car = function () {
  this.make = 0;
  this.speed = 0;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.speed} km/h`);
};

const car1 = new Car();
const car2 = new Car();

car1.accelerate();
car2.break();

// Function declaration
function Car2() {
  this.make = 0;
  this.speed = 0;
}

Car2.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.speed} km/h`);
  return this;
};

const car3 = new Car2();
car3.accelerate();
car3.accelerate();
car3.accelerate().accelerate();
