const express = require('express');
const router = express.Router();
const Product = require('./product.module');

const controllers = require('./product.controllers');

// Add Product
router.post('/products', controllers.addProduct);

// Get All Products
router.get('/products', controllers.getAllProducts);

// Get Product by ID
router.get('/products/:id', controllers.getProductById);

// Search Products by Name
router.post('/products/search', controllers.searchProductsByName);

// Update Product by ID
router.put('/products/:id', controllers.updateProductById);

// Delete Product by ID
router.delete('/products/:id', controllers.deleteProductById);

module.exports = router;