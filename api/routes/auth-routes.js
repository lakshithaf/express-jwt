"use strict";

const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const AuthController = require('../controllers/AuthController');

router.get('/', asyncHandler(async (req, res) => {
    return AuthController.getUserByParms(req, res);
}));


router.post('/sign-in', asyncHandler(async (req, res) => {
    return AuthController.signIn(req, res);
}));



module.exports = router;