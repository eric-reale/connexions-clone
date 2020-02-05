const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

// Do work here
router.get('/', authController.homePage);
router.get('/register', userController.registerForm);

module.exports = router;
