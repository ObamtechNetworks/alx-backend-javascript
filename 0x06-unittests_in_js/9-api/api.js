const express = require('express');
const app = express();
const port = 7865;


app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define a route for GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Catch-all for non-numeric cart IDs
app.use('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Export the app
module.exports = app;
