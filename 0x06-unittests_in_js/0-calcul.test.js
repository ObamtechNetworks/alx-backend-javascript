const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Rounds and adds two numbers', () => {
    assert.strictEqual(calculateNumber(2.5, 3.3), 6);
  });
  it('Round 0 and a positive number', () => {
    assert.strictEqual(calculateNumber(0, 5), 5);
  });
  it('Round 0 and a negative number', () => {
    assert.strictEqual(calculateNumber(0, -2), -2);
  });
  it('Round two negative numbers', () => {
    assert.strictEqual(calculateNumber(-2.4, -3.7), -6);
  });
  it('Round one positive and one negative number', () => {
    assert.strictEqual(calculateNumber(3.2, -1.8), 1);
  });
});
