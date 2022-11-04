const { addAddress, getAddress, updateAddress } = require('../../controllers/addressController');
const { isLoggedIn } = require('../../middlewares/auth');

const router = require('express').Router();


router.post('/', isLoggedIn, addAddress);
router.get('/:id', isLoggedIn, getAddress);
router.patch('/:id', isLoggedIn, updateAddress);

module.exports = router;