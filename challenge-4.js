'use strict';
class CarCL {
  constructor() {
    this.make = 0;
    this.speed = 0;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.speed} km/h`);
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCL {
  #charge;
  constructor(charge) {
    super(CarCL);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `Tesla going at ${this.speed}km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const eletric = new EVCl(0);
console.log(eletric);
console.log(eletric.chargeBattery(60).accelerate().accelerate());
console.log(eletric);
