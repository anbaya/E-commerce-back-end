const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	type: {
		type: String,
		enum: ['customer', 'admin'],
		default: 'customer'
	},
	email: {
		type: String,
		required: true,
		unique: [true, "invalid email"]
	},
	password: {
		type: String,
		required: true
	},
	card: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Card'
	},
	purchasedProducts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product'
		}
	],
	address: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Address'
		}
	]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);