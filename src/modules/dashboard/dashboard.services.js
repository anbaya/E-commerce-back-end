const User = require('../users/user.module');
const Product = require('../products/product.module');
const Order = require('../orders/order.module');

// Dashboard General Admin services

async function getDashboardStats() {
	const totalUsers = await User.countDocuments();
	const totalProducts = await Product.countDocuments();
	const totalOrders = await Order.countDocuments();

	return {
		totalUsers,
		totalProducts,
		totalOrders
	};
}

async function getTotalOfSales() {
	const getTotalOfSales = await Order.aggregate([
		{$match: {status: 'paid'}},
		{$group: {}}
	]);
}







module.exports = {
	getDashboardStats,
	getTotalOfSales
};
