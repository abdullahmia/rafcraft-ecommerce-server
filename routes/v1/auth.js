const { signup, signin, getUser } = require('../../controllers/authContoller');
const router = require('express').Router();

// routes
router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;