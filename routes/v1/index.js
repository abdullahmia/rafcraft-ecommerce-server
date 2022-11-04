const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/category', require('./category'));
router.use('/product', require('./product'));
router.use('/address', require('./address'));
router.use('/order', require('./order'));

module.exports = router;