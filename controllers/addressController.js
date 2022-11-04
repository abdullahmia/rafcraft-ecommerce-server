const Address = require("../models/address");


// add address
module.exports.addAddress = async (req, res) => {
    try {
        const user = req.user;
        let isExistAdress = await Address.findOne({ user: user.id });
        if (isExistAdress) {
            return res.status(401).json({
                message: "Already have address"
            });
        } else {
            const address = new Address({ user: user.id, ...req.body });
            await address.save();
            return res.status(201).json({
                address: await address.populate('user', '-password'),
                message: 'Address added'
            })
        }
        
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// get address by user
module.exports.getAddress = async (req, res) => {
    try {
        const id = req.params.id;
        const address = await Address.findOne({user: id}).populate('user', '-password');
        if (address) {
            return res.status(200).json(address);
        } else {
            return res.status(200).json(address);
        }
        
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// update address 
module.exports.updateAddress = async (req, res) => {
    try {
        const id = req.params.id;
        let isExistAdress = await Address.findOne({user: id});
        if (isExistAdress) {
            const updatedAddress = await Address.findOneAndUpdate({user: id}, {...req.body}, {new: true})
            return res.status(200).json({
                address: updatedAddress,
                message: "Address has been updated"
            })

        } else {
            return res.status(404).json({
                message: "Address not found"
            })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}