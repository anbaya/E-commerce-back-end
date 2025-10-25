const User = require('./user.module');
const Card = require('../cards/card.module');

// Add User
const addUser = async (req, res) => {
	try {
		const user = await User.create(req.body);
		const card = await Card.create({ userId: user._id });
		user.card = card._id;
		await user.save();
		if (!user) {
			return res.status(400).json({ message: "Invalid user data" });
		}
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// Get All Users
const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// Update User by ID
const updatedUserById = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndUpdate(id, req.body);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const updatedUser = await User.findById(id);
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

module.exports = {
	addUser,
	getAllUsers,
	updatedUserById
};
