'use strict';
class CarCl {
  constructor() {
    this.make = 0;
    this.speed = 0;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.speed} km/h`);
  }

  break() {
    this.speed -= 10;
    console.log(`${this.speed} km/h`);
  }

  get speedUs() {
    const x = this.speed / 1.6;
    return x;
  }

  set speedUs(curSpeed) {
    this.speed = curSpeed * 1.6;
  }
}

const ford = new CarCl();
ford.accelerate();
ford.accelerate();
ford.break();

ford.speedUs = 50; // 80
// Why 80? because we are 'calling' setter, which sets property speed = 80 * 1.6
console.log(ford.speed);
