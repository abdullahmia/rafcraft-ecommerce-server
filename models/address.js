const { Schema, model, Types } = require('mongoose');

const addressSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    phone: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        requried: true
    },
    streetAddress: {
        type: String,
        requried: true
    },
    city: {
        type: String,
        requried: true
    },
    address: {
        type: String,
        requried: true
    },
    zipCode: {
        type: Number,
        requried: true,
    },
    companyName: {
        type: String,
    }
}, {timestamps: true})

const Address = model('Address', addressSchema);
module.exports = Address;