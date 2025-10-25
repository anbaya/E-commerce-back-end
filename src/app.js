const express = require('express');
const app = express();
const router = require('./routes/index.js');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use product routes
app.use('/api', router);

module.exports = app;