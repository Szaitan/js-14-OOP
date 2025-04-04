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

const EV = function (charge) {
  Car.call(this);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
  return this;
};

const electricCar = new EV(90);
electricCar.accelerate().accelerate();
console.log(electricCar);
