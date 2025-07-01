const fs = require('fs');
const path = require('path');

module.exports.product = fs.readFileSync(path.join(__dirname, 'product.gql'), 'utf8');
module.exports.cart = fs.readFileSync(path.join(__dirname, 'cart.gql'), 'utf8');
