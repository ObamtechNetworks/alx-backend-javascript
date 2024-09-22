const express = require('express');
const app = express();
const port = 7865;

app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

// If id is not a number, it should return 404
app.get('/cart/*', (req, res) => {
    res.status(404).send('Not Found');
});

app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.post('/login', express.json(), (req, res) => {
    const userName = req.body.userName;
    res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});


module.exports = app;
