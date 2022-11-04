const { addOrder, getUserOrders, getUserOrder } = require('../../controllers/orderController');
const { isLoggedIn } = require('../../middlewares/auth');

const router = require('express').Router();

router.post('/', isLoggedIn, addOrder);
router.get('/:userId', isLoggedIn, getUserOrders);
router.get('/order/:orderId', isLoggedIn, getUserOrder);

module.exports = router;