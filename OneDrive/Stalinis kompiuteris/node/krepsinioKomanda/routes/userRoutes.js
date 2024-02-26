const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authControler');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logOut);

module.exports = router;