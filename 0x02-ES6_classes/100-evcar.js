import Car from './10-car';

export default class EVCar extends Car {
  /* eslint-disable no-underscore-dangle */
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor
    this._range = range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    // Create a new Car instance and copy properties from this EVCar instance
    const clone = new Car(this._brand, this._motor, this._color);
    return clone;
  }

  // Getter for range
  get range() {
    return this._range;
  }
}
