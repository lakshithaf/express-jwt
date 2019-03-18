"use strict"; //For use with ES6

const express = require('express');
const router = express.Router();

//add route files in app
const rootRouter = require('./root-routes');


router.use('/', rootRouter);
router.use('/api/v1/', rootRouter);


module.exports = router;