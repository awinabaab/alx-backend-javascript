const request = require('request');
const { expect } = require('chai');

const baseURL = 'http://localhost:7865';

describe('API index page', function () {
  it('should return status 200', function (done) {
    request.get(baseURL, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message', function (done) {
    request.get(baseURL, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('API /cart/:id endpoint', function () {
  it('should return 200 and correct message when id is a number', function (done) {
    request.get(`${baseURL}/cart/42`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 42');
      done();
    });
  });

  it('should return 404 when id is not a number', function (done) {
    request.get(`${baseURL}/cart/abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 when id is missing', function (done) {
    request.get(`${baseURL}/cart/`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
