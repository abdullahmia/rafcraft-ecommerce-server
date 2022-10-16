const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/category', require('./category'));

module.exports = router;