const Utils = require('./utils.js');

//send the payment function
function sendPaymentRequestToApi(amountTotal, shippingTotal) {
  const total = Utils.calculateNumber('SUM', amountTotal, shippingTotal);
  console.log(`The total is: ${total}`);
}

// export the module
module.exports = sendPaymentRequestToApi;
