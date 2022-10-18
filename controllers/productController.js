const cloudinary = require('../lib/cloudinary');
const Product = require('../models/product');
const { skuGenarator } = require('../utils/skuGenarator');

// create a product
module.exports.createProduct = async (req, res) => {
    try {
        if (req.file) {
            let sku = await skuGenarator();
            const image = await cloudinary.uploader.upload(req.file.path, { public_id: `ecommerce/product/${req.file.filename}` });
            const product = new Product({ image: image.public_id, ...req.body, sku});
            await product.save();
            return res.status(200).json({
                product: await product.populate('category'),
                message: "Product created"
            })
        } else {
            return res.status(404).json({message: "Image required"})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


// get all products
module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({}).populate('category')
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// get a single product by slug
module.exports.getProduct = async (req, res) => {
    try {
        const slug = req.params.slug;
        const product = await Product.findOne({slug}).populate('category');
        if (product) {
            return res.status(200).json(product);
        } else {
            return res.status(404).json({
                product: {},
                message: "Product not found!"
            })
        }
        
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// delet a product by slug
module.exports.deleteProduct = async (req, res) => {
    try {
        const slug = req.params.slug;
        let product = await Product.findOne({slug});

        // delete image from cloudinary
        await cloudinary.uploader.destroy(product.image);

        await Product.findOneAndDelete({slug: product.slug});
        return res.status(200).json({message: 'Product has been deleted'});   
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// update product
module.exports.updateProduct = async (req, res) => {
    try {
        const slug = req.params.slug;
        let product = await Product.findOne({slug});
        if (product) {
            if (req.file && product.image) {
                // remove old pic from cloudinary
                await cloudinary.uploader.destroy(product.image);

                // upload new image on cloudinary;
                const image = await cloudinary.uploader.upload(req.file.path, { public_id: `ecommerce/product/${req.file.filename}` });
                const updatedProduct = await Product.findOneAndUpdate({slug}, {image: image.public_id, ...req.body }, {new: true});
                return res.status(200).json({
                    product: await updatedProduct.populate('category'),
                    message: "Product has been updated"
                })
            } else {
                const updatedProduct = await Product.findOneAndUpdate({slug}, {...req.body}, {new: true});
                return res.status(200).json({
                    product: await updatedProduct.populate('category'),
                    message: "Product has been updated"
                })
            }
        } else {
            return res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}