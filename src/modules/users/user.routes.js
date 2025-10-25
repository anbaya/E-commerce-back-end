const express = require('express');
const router = express.Router();
const User = require('./user.module');
const controllers = require('./users.controllers');

// Add User
router.post('/', controllers.addUser);

// Get All Users
router.get('/', controllers.getAllUsers);

// Update User by ID
router.put('/:id', controllers.updatedUserById);

module.exports = router;