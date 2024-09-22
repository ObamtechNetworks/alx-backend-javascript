const express = require('express');
app = express();

// set default port
port = 7865;

// default url
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// handle regex and matching
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// listen to port whencalled
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
})

module.exports = app;
