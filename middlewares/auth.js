const jwt = require('jsonwebtoken');


module.exports.isLoggedIn = async (req, res, next) => {
    let token = req.header("Authorization");
    if (token) {
        try {
            const decoedToken = await jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoedToken;
            next();
        } catch (error) {
            return res.status(400).send("Invalid Token!");
        }
    } else {
        return res.status(401).json({ message: "Access Denied" });
    }
}

module.exports.isAdmin = async (req, res, next) => {
    let token = req.header("Authorization");
    if (token) {
        try {
            const decoedToken = await jwt.verify(token, process.env.JWT_SECRET);
            if (decoedToken?.role === 'admin') {
                req.user = decoedToken;
                next();
            } else {
                return res.status(401).json({ message: "Access Denied" });
            }
        } catch (error) {
            return res.status(400).send("Invalid Token!");
        }
    } else {
        return res.status(401).json({ message: "Access Denied" });
    }
}