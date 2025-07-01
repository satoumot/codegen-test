const fs = require('fs');
const path = require('path');

module.exports.createCart = fs.readFileSync(path.join(__dirname, 'createCart.gql'), 'utf8');
module.exports.placeOrder = fs.readFileSync(path.join(__dirname, 'placeOrder.gql'), 'utf8');
module.exports.refundOrder = fs.readFileSync(path.join(__dirname, 'refundOrder.gql'), 'utf8');
module.exports.payOrder = fs.readFileSync(path.join(__dirname, 'payOrder.gql'), 'utf8');
module.exports.workflowOrder = fs.readFileSync(path.join(__dirname, 'workflowOrder.gql'), 'utf8');
