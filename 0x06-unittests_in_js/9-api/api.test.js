const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');  // Assuming api.js exports the server for testing
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /cart/:id', () => {
    it('should return payment methods for cart id when id is a number', (done) => {
        chai.request(server)
            .get('/cart/12')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Payment methods for cart 12');
                done();
            });
    });

    it('should return 404 when id is not a number', (done) => {
        chai.request(server)
            .get('/cart/hello')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});
