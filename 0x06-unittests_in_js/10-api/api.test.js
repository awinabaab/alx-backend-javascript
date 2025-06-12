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
});

describe('API /available_payments endpoint', function () {
  it('should return correct payment methods object', function (done) {
    request.get(`${baseURL}/available_payments`, { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('API /login endpoint', function () {
  it('should return welcome message with username', function (done) {
    const options = {
      url: `${baseURL}/login`,
      method: 'POST',
      json: { userName: 'John' },
    };

    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome John');
      done();
    });
  });

  it('should return 400 if username is missing', function (done) {
    const options = {
      url: `${baseURL}/login`,
      method: 'POST',
      json: {},
    };

    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.equal('Username is required');
      done();
    });
  });
});
