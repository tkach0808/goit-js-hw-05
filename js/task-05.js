'use strict';

/* eslint-disable */
class Car {
  constructor({ speed = 0, price, maxSpeed, isOn, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  static getSpecs(car) {
    this.speed = car.speed;
    this._price = car.price;
    this.maxSpeed = car.maxSpeed;
    this.isOn = car.isOn;
    this.distance = car.distance;
    console.log(
      `maxSpeed = ${this.maxSpeed}, speed = ${this.speed}, isOn = ${this.isOn}, distance = ${this.distance}, price = ${this._price}`,
    );
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
