// Importing express
const express = require('express');
const app = express();

// Define a port
const port = 7865;

// Define the /cart/:id route
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Handle non-numeric cart ID (this will handle routes like /cart/hello)
app.use('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
