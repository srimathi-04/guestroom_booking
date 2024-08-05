const express = require('express');
const { register, login } = require('../../../backend/controller/authController');

const router = express.Router();

router.post('/register-owner', register);
router.post('/login-owner', login);
router.post('/register-customer', register);
router.post('/login-customer', login);

module.exports = router;
