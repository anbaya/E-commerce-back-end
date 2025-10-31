const { models } = require('mongoose');
const Product = require('./product.model');

// Get All Products
async function getAllProducts() {
	const products = await Product.find();
	if (products) {
		return products;
	}
	throw new Error('No products found');
}

async function deleteProduct(productId) {
	const deletedProduct = await Product.findByIdAndDelete(productId);
	if (!deletedProduct) {
		throw new Error('Product not found');
	}
	return deletedProduct;
}

// Create Product
async function createProduct(productData) {
	const newProduct = await Product.create(productData);
	if (newProduct) {
		return newProduct;
	}
	throw new Error('Product creation failed');
}

// Update Product
async function updateProduct(productId, productData) {
	const updatedProduct = await Product.findByIdAndUpdate(productId, productData);
	if (!updatedProduct) {
		throw new Error('Product update failed');
	}
	return updatedProduct;
}

// search Products by name
async function searchByName(nameToSearch) {
	const products = await Product.find({ name: nameToSearch });
	if (products) {
		return products;
	}
	throw new Error('No products found');
}

module.exports = {
	getAllProducts,
	deleteProduct,
	createProduct,
	updateProduct,
	searchByName
};