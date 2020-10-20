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
    const product = await Catalog.findById(req.params.id).exec()
    res.send({
        product
    })
};

// create product's form.
exports.product_create_get = function(req, res) {
    console.log(Catalog.schema);
    res.send(Catalog.schema);
};

// create product(post).
exports.product_create_post = async function(req, res) {
    const product = new Catalog({
        name: req.body.name,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category,
        units:req.body.units,
    })
    console.log(req.body);
    console.log('---');
    console.log(req.body.name);
    await product.save();
    res.send(product.id);
};
// delete product's form.
exports.product_delete_get = async function(req, res) {
    const product = await Catalog.findById(req.params.id,'name ').exec()
    res.send({
        product
    })
};

// delete product(post).
exports.product_delete_post = async function(req, res) {
    await Catalog.findByIdAndRemove(req.params.id)
    res.send();
};

// refresh product's form
exports.product_update_get = function(req, res) {
    console.log(Catalog.schema);
    res.send(Catalog.schema);
};

// refresh product(post).
exports.product_update_post = async function(req, res) {
    const update ={
        name: req.body.name,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category,
        units:req.body.units,
    }
    await Catalog.findOneAndUpdate(req.params.id,update)
    console.log(req.params.id)
    console.log(update)
    res.send({msg:'hell'})
};