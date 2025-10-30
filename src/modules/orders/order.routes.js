const express = require('express');
const router = express.Router();
const controllers = require('./order.controllers');

// Create Order
router.post('/placeorder', controllers.createOrder);

module.exports = router;