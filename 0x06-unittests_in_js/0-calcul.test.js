const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(2.8, 3.3), 6);
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should handle rounding up correctly', function () {
    assert.strictEqual(calculateNumber(1.9, 0.1), 2);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should handle zero values', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });
});

