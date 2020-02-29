const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const connexionController = require('../controllers/connexionController');
const chapterController = require('../controllers/chapterController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', authController.homePage);

router.get('/connexions', connexionController.getConnexions);
// router.get('/connexions/add', connexionController.addConnexion);
router.post('/connexions/add', connexionController.addConnexion);

router.get('/connexions/:id', catchErrors(connexionController.viewConnexion));
router.get('/connexions/:id/edit', catchErrors(connexionController.editConnexion));
router.post('/connexions/:id/update', connexionController.updateConnexion);
router.get('/connexions/:id/delete', connexionController.deleteConnexion);

router.get('/connexions/:id/chapter/new', chapterController.newChapter);
router.post('/connexions/:id/chapter/add', chapterController.addChapter);
router.get('/connexions/:connexion_id/chapter/:chapter_id', chapterController.showChapter);
router.get('/connexions/:connexion_id/chapter/:chapter_id/edit', chapterController.editChapter);
router.post('/connexions/:connexion_id/chapter/:chapter_id/update', chapterController.updateChapter);

router.get('/connexions/:id/circles/new', connexionController.newCircle);
router.post('/connexions/:id/circles/add', connexionController.addCircleToConnexion);
router.get('/connexions/circles/:circle', connexionController.displayCircle);
router.get('/circles', connexionController.allCircles);

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
