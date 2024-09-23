const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app

describe('Index page', () => {
  it('should return status 200 and correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      // Expect status code to be 200
      expect(response.statusCode).to.equal(200);
      // Expect body to match "Welcome to the payment system"
      expect(body).to.equal('Welcome to the payment system');
      done(); // Mark test as done
    });
  });
});
