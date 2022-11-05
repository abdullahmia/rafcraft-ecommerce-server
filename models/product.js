const { Schema, model, Types } = require('mongoose');
const slugify = require('slugify');

// product schema 
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Types.ObjectId,
        ref: 'Category',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    availability: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shortDescription: String,
    description: {
        type: String,
        required: true
    },
    slug: String,
    status: {
        type: Boolean,
        default: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

productSchema.pre('save', function (next) {
    this.slug = slugify(this.name);
    next();
})

const Product = model('Product', productSchema);
module.exports = Product;