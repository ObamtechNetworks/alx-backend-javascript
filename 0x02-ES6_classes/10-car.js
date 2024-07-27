/* eslint-disable no-unused-vars */
const CarSymbol = Symbol('CarSymbol');

export default class Car {
  /* eslint-disable no-underscore-dangle */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Using Object.create to clone the prototype and copy properties
    const clone = Object.create(Object.getPrototypeOf(this));
    Object.assign(clone, this);
    return clone;
  }
}
