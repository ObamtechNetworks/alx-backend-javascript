const request = require('supertest');
const app = require('./api'); // Import the app from api.js
let server;

before((done) => {
  server = app.listen(7865, done); // Start the server before tests
});

after((done) => {
  server.close(done); // Close the server after tests
});

describe('GET /cart/:id', () => {
  it('should return status code 200 and the correct response when :id is a number', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200)
      .expect('Payment methods for cart 12', done);
  });

  it('should return status code 404 when :id is not a number', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});
