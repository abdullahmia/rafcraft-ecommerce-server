const { createCategory, getCategories, updatecategory, deleteCategory } = require('../../controllers/categoryController');
const uploader = require('../../lib/multer');
const { isLoggedIn, isAdmin } = require('../../middlewares/auth');

const router = require('express').Router();

let admin = [isLoggedIn, isAdmin]

router.post('/', isAdmin, uploader.single('image'), createCategory);
router.get('/', getCategories);
router.patch('/:id', isAdmin, uploader.single('image'), updatecategory);
router.delete('/:id', isAdmin, deleteCategory);

module.exports = router;