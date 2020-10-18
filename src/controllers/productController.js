var Product = require('../models/product');
const Catalog = require('../models/product')


// get all list
exports.product_list = async function(req, res) {
    const products = await Catalog.find({})
    res.send({
        products
    })
};

// get product details
exports.product_detail = async function(req, res) {
    // res.send('NOT IMPLEMENTED: product detail: ' + req.params.id);
    const product = await Catalog.findById(req.id).exec()
    res.send({
        product
    })
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