// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
      assert.strictEqual(calculateNumber('SUM', -1.6, -2.4), -4);
    });
  });

  describe('SUBTRACT', function () {
    it('should return difference of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.1), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.8), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.6, -1.3), -2);
    });
  });

  describe('DIVIDE', function () {
    it('should return quotient of rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 2.1), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 15.1, 2.9), 5);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3.2, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.7, 0.4), 'Error');
    });

    it('should return correct result with negative numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -7.7, 2.2), -4);
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid operation type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
    });
  });
});
