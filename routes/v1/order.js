const { addOrder, getUserOrders, getUserOrder, getAllOrders } = require('../../controllers/orderController');
const { isLoggedIn, isAdmin } = require('../../middlewares/auth');

const router = require('express').Router();

router.post('/', isLoggedIn, addOrder);
router.get('/', isLoggedIn, isAdmin, getAllOrders);
router.get('/:userId', isLoggedIn, getUserOrders);
router.get('/order/:orderId', isLoggedIn, getUserOrder);

module.exports = router;