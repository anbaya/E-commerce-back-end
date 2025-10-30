const User = require('./user.module');
const Card = require('../cards/card.module');
const {register, login} = require('../../sevices/auth.services');
const {updateUser} = require('./user.services');

// Add User
const addUser = async (req, res) => {
	try {
		const user = await register(req.body);
		if (!user) {
			return res.status(400).json({ message: "Invalid user data" });
		}
		res.status(201).json(user);
	} catch (error) {
		console.error("Registration error:", error);
		// Handle specific known errors
		if (error.message === "user already exist") {
			return res.status(409).json({ message: "Email already registered" });
		}
		// Input validation errors
		if (error.message.includes("required")) {
			return res.status(400).json({ message: error.message });
		}
		// Mongoose validation errors
		if (error.name === 'ValidationError') {
			return res.status(400).json({ message: error.message });
		}
		// Default to 500 for unknown errors
		res.status(500).json({ message: "Registration failed. Please try again." });
	}
};

// Login User
const userLogin = async (req, res) => {
	try {
		const section = await login(req.body);
		if (!section)
			return res.status(400).json({ message: "login error" });
		res.status(200).json(section);
	} catch (error) {
		console.error("Login error:", error);
		// Input validation errors
		if (error.message.includes("required")) {
			return res.status(400).json({ message: error.message });
		}
		// Authentication errors should be 401
		if (error.message === "invalid email or password" || error.message === "invalid password or email") {
			return res.status(401).json({ message: "Invalid credentials" });
		}
		// Default to 500 for unknown errors
		res.status(500).json({ message: "Login failed. Please try again." });
	}
}

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
		const user = await updateUser(id, req.body);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json(user);
	} catch (error) {
		console.error("Update user error:", error);
		// Input validation errors
		if (error.message.includes("required")) {
			return res.status(400).json({ message: error.message });
		}
		// Mongoose validation errors
		if (error.name === 'ValidationError') {
			return res.status(400).json({ message: error.message });
		}
		res.status(500).json({ message: "Failed to update user" });
	}
};


module.exports = {
	addUser,
	getAllUsers,
	updatedUserById,
	userLogin
};
