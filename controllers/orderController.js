const Order = require('../models/order');
const { orderIdGenarator } = require('../utils/orderIdGenarator');

// add order
module.exports.addOrder = async (req, res) => {
    try {
        const user = req.user;
        const orderId = await orderIdGenarator();

        const addOrder = new Order({user: user.id, orderId, ...req.body});
        await addOrder.save();
        console.log(addOrder);
        return res.status(200).json({
            orderd: true,
            order: addOrder,
            message: "Thank you. Your order has been received."
        })

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// get order by users
module.exports.getUserOrders = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ user: userId }).populate({
            path: 'products',
            populate: {
                path: 'product',
                model: 'Product'
            }
        }).populate('user', '-password').sort({ createdAt: -1 })
        return res.status(200).json({
            orders
        })
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


// get a single order with user, order id
module.exports.getUserOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const orderId = req.params.orderId;
        console.log(userId, orderId)
        const order = await Order.findOne({ user: userId, orderId }).populate({
            path: 'products',
            populate: {
                path: 'product',
                model: 'Product'
            }
        }).populate('user', '-password')
        if (order) {
            return res.status(200).json(order);
        } else {
            return res.status(404).json({
                message: "Order not found!"
            })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}