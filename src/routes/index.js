const express = require('express');
const productRoutes = require ('../modules/products/product.routes.js');
const userRoutes = require ('../modules/users/user.routes.js');
const cardRoutes = require ('../modules/cards/card.routes.js');
const orderRoutes = require ('../modules/orders/order.routes.js');

const router = express.Router();
router.use('/store', productRoutes);
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('/orders', orderRoutes);

module.exports = router;