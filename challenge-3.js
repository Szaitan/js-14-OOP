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
console.log(electricCar.__proto__ === EV.prototype);
console.log(electricCar.__proto__.__proto__ === Car.prototype);

////////////////////////////////////////////
const Animal = function (name) {
  this.name = name;
  this.speed = 10;
};

Animal.prototype.run = function (speed) {
  this.speed = speed;
  console.log(`${this.name} is running at ${this.speed} km/h`);
};

Animal.prototype.stop = function () {
  this.speed = 0;
  console.log(`${this.name} has stopped`);
};

const Bird = function (name) {
  Animal.call(this, name);
  this.canFly = true;
};

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function () {
  this.canFly
    ? console.log(`${this.name} can fly`)
    : console.log(`${this.name} cant fly`);
};

const kiwi = new Bird('Kiwi');
kiwi.stop();
kiwi.run(100);
