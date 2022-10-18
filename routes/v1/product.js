const { createProduct, getProducts, deleteProduct, updateProduct } = require('../../controllers/productController');
const uploader = require('../../lib/multer');
const { isAdmin } = require('../../middlewares/auth');

const router = require('express').Router();

router.post('/', isAdmin, uploader.single('image'), createProduct);
router.get('/', getProducts);
router.delete('/:slug', isAdmin, deleteProduct);
router.patch('/:slug', isAdmin, uploader.single('image'), updateProduct);

module.exports = router;