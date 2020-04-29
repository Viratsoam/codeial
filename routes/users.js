const express = require('express');
const router = express.Router();
const {user} = require('../controllers/users_controller');

router.get('/profile', user);




module.exports = router;