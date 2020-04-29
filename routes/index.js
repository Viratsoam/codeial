const express = require('express');
const router = express.Router();

const {home} = require('../controllers/home_controller');
const {user} = require('../controllers/users_controller');

router.get('/',home);

router.use('/users',user);



module.exports = router;