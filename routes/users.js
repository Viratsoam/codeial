const express = require('express');
const router = express.Router();
const {user,signUp,signIn, create,createSession} = require('../controllers/users_controller');

router.get('/profile',user);
router.get('/sign-up',signUp);
router.get('/sign-In',signIn);

// create the user
router.post('/create',create);
router.post('/create-session',createSession);


module.exports = router;