describe('GET /available_payments', () => {
    it('should return available payment methods', (done) => {
        chai.request(server)
            .get('/available_payments')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
    });
});

describe('POST /login', () => {
    it('should return welcome message with userName', (done) => {
        chai.request(server)
            .post('/login')
            .send({ userName: 'Betty' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome Betty');
                done();
            });
    });
});
