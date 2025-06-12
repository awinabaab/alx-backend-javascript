const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return sum of rounded numbers', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
      expect(calculateNumber('SUM', -1.6, -2.4)).to.equal(-4);
    });
  });

  describe('SUBTRACT', function () {
    it('should return difference of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 5.5, 2.1)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 1.2, 3.8)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', -2.6, -1.3)).to.equal(-2);
    });
  });

  describe('DIVIDE', function () {
    it('should return quotient of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 7.5, 2.1)).to.equal(4);
      expect(calculateNumber('DIVIDE', 15.1, 2.9)).to.equal(5);
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 3.2, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5.7, 0.4)).to.equal('Error');
    });

    it('should return correct result with negative numbers', function () {
      expect(calculateNumber('DIVIDE', -7.7, 2.2)).to.equal(-4);
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid operation type', function () {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid operation type');
    });
  });
});
