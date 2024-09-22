// Replace this:
// const { expect } = require('chai');
// const calculateNumber = require('./2-calcul_chai');

// With this:
import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';  // Add `.js` extension for ES modules

describe('calculateNumber', () => {
  it('should round the numbers and return sum', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should round the numbers and return subtraction', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should round the numbers and return division', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
