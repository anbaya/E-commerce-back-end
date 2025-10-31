const express = require('express');
const router = express.Router();
const controllers = require('./order.controllers');

// Create Order
router.post('/placeorder', controllers.createOrder);

// Get All Orders - Admin
router.get('/admin/orders', controllers.getAllOrders);

module.exports = router;