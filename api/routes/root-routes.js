"use strict";

const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')


router.get('/', asyncHandler(async (req, res) => {
    return res.send('welocme to express-jwt app');
}));


router.post('/', asyncHandler(async (req, res) => {
    return res.send('welocme to express-jwt app');
}));



module.exports = router;