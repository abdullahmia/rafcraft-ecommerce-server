const { Schema, model, Types } = require('mongoose');

// order Shema
const orderSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            product: {
                type: Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number
            }
        },
    ],
    shippingAddress: {
        country: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        zipCode: {
            type: String,
        },
        number: {
            type: String,
        },
        email: {
            type: String,
        }
    },
    orderId: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        default: "Not processed",
        enum: [
            'Not processed',
            "Confirmed",
            'Processing',
            'Shipped',
            'Delivered',
            'Cancelled',
        ],
    },
    amount: {
        type: Number,
        required: true
    },
    customerNote: {
        type: String,
    },
    orderNote: {
        type: String,
    },
    paymentType: {
        type: String,
        requried: true
    }
}, {timestamps: true});

const Order = model('Order', orderSchema);
module.exports = Order;