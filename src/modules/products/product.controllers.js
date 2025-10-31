const Product = require('./product.module');
const productServices = require('./product.services');

// Add Product
const addProduct = async (req, res) => {
	try {
		const product = await productServices.createProduct(req.body);
		res.status(201).json(product);
	}catch (error) {
		console.error(error);
		if (error.name === 'ValidationError') {
			return res.status(500).json({message: error.message, errors: error.errors});
		}
		res.status(500).json({message: error.message});
	}
};

// Get All Products
const getAllProducts = async (req , res) => {
	try {
		const products = await productServices.getAllProducts();
		res.status(200).json(products);
	}catch (error) {
		res.status(500).json({message: error.message});
	}
};

// Get Product by ID
const getProductById = async (req , res) => {
	try {
		const {id} = req.params;
		const product = await productServices.getProductById(id);
		if (!product) {
			return res.status(404).json({message: "Product not found"});
		}
		res.status(200).json(product);
	}catch (error) {
		res.status(500).json({message: error.message});
	}
};

// Search Products by Name
const searchProductsByName = async (req, res) => {
	try {
		const products = await productServices.searchByName(req.body);
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Update Product by ID
const updateProductById = async (req , res) => {
	try {
		const {id} = req.params;
		const product = await productServices.updateProduct(id, req.body);
		if (!product) {
			return res.status(404).json({message: "Product not found"});
		}
		res.status(200).json(product);
	}
	catch (error) {
		res.status(500).json({message: error.message});
	}
};

// Delete Product by ID
const deleteProductById = async (req, res) => {
	try {
		const {id} = req.params;
		const product = await productServices.deleteProduct(id);
		if (!product) {
			return res.status(404).json({message: "Product not found"});
		}
		res.status(200).json({message: "Product deleted successfully"});
	}
	catch (error) {
		res.status(500).json({message: error.message});
	}
};

module.exports = {
	addProduct,
	getAllProducts,
	getProductById,
	searchProductsByName,
	updateProductById,
	deleteProductById
};