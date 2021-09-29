const mongoose = require('mongoose');
const User = mongoose.model('user');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../key');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(401).json({ message: 'You must be logged in!' });
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET, (error, data) => {
        if(error) {
            return res.status(401).json({ message: 'You must be logged in!' })
        }
        const { id } = data;
        User.findById(id)
            .then((userData) => {
                req.user = userData;
                next();
            })
    })
}