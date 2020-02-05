const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.get('/', authController.homePage);

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

// Reguster Users
router.get('/register', userController.registerForm);
router.post('/register',
  userController.validateRegister,
  userController.register,
  authController.login
);

module.exports = router;
