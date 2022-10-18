const _ = require('lodash');
const Category = require('../models/category');
const cloudinary = require('../lib/cloudinary');

// create category
module.exports.createCategory = async (req, res) => {
    try {
        if (req.file) {
            const image = await cloudinary.uploader.upload(req.file.path, { public_id: `ecommerce/category/${req.file.filename}` });
            const category = new Category({image: image.public_id, name: req.body.name});
            await category.save();
            return res.status(201).json({
                category,
                message: 'Category added'
            })
        } else {
            return res.status(404).send('Image requried');
        }
        res.send("Category Create");
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// get all categories
module.exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        return res.status(200).send(categories);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// update category
module.exports.updatecategory = async (req, res) => {
    try {
        const catId = req.params.id;
        let category = await Category.findOne({_id: catId});

        if (req.file) {
            // delete the old image from cloudinary
            await cloudinary.uploader.destroy(category.image);

            // updload the new image
            const image = await cloudinary.uploader.upload(req.file.path, { public_id: `ecommerce/category/${req.file.filename}` });
            let updatedCategory = await Category.findOneAndUpdate({_id: catId}, {name: req.body.name, image: image.public_id}, {new: true});
            return res.status(200).json({
                category: updatedCategory,
                message: 'Category has been updated'
            });

        } else {
            let updatedCategory = await Category.findOneAndUpdate({_id: catId}, {name: req.body.name}, {new: true});
            return res.status(200).json({
                category: updatedCategory,
                message: 'Category has been updated'
            });
        }

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// delete a category by id
module.exports.deleteCategory = async (req, res) => {
    try {
        const catId = req.params.id;
        
        let category = await Category.findOne({_id: catId});
        if (category) {
            // delete category image from cloudinary
            await cloudinary.uploader.destroy(category.image);
            await Category.findOneAndDelete({_id: catId});
            return res.status(200).json({message: "Category has been deleted"});
        }

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}