const express = require('express');
const router = express.Router();

const {home} = require('../controllers/home_controller');

router.get('/',home);

router.use('/users',require('./users'));




module.exports = router;