const jwt = require('jsonwebtoken');
const User = require('../modules/users/user.module');
const config = require('dotenv');


const register = async ({email, name, password}) => {
	const existingUser = User.findOne(email);
	if (existingUser) throw new Error ("user already exist");

	await User.create(name, email, password);
}