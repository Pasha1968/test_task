var Product = require('../models/product');

// get all list
exports.product_list = function(req, res) {
    res.send('NOT IMPLEMENTED: product list');
};

// get product details
exports.product_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: product detail: ' + req.params.id);
};

// create product's form.
exports.product_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product create GET');
};

// create product(post).
exports.product_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product create POST');
};

// delete product's form.
exports.product_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product delete GET');
};

// delete product(post).
exports.product_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product delete POST');
};

// refresh product's form
exports.product_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product update GET');
};

// refresh product(post).
exports.product_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product update POST');
};