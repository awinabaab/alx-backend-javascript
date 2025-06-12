const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
  });

  it('should return undefined when success is false', () => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.equal(undefined);
  });
});
