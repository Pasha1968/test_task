var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');



// GET-запрос для создания. Должен появиться до маршрута для id
router.get('/product/create', product_controller.product_create_get);

// POST request for creating product.
router.post('/product/create', product_controller.product_create_post);

// GET request to delete product.
router.get('/product/:id/delete', product_controller.product_create_get);

// POST request to delete product.
router.post('/product/:id/delete', product_controller.product_create_get);

// GET request to update product.
router.get('/product/:id/update', product_controller.product_create_get);

// POST request to update product.
router.post('/product/:id/update', product_controller.product_create_get);

// GET request for one product.
router.get('/product/:id', product_controller.product_detail);

// GET request for list of all products
router.get('/', product_controller.product_list);

module.exports = router;