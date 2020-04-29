const express = require('express');
const router = express.Router();

const {home} = require('../controllers/home_controller');

router.get('/home',home);



module.exports = router;