const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const connexionController = require('../controllers/connexionController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', authController.homePage);

router.get('/connexions', connexionController.getConnexions);
// router.get('/connexions/add', connexionController.addConnexion);
router.post('/connexions/add', connexionController.addConnexion);

router.get('/connexions/:id', catchErrors(connexionController.viewConnexion));
router.get('/connexions/:id/edit', catchErrors(connexionController.editConnexion));
router.post('/connexions/:id/update', catchErrors(connexionController.updateConnexion));

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

// Reguster Users
router.get('/register', userController.registerForm);
router.post('/register',
  userController.validateRegister,
  userController.register,
  authController.login
);
router.get('/forgot-password', authController.forgotPassword);
// router.post('/forgot-password', authController.forgot); PASSWORD RESET TODO

module.exports = router;
