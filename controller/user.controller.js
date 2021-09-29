const mongoose = require('mongoose');
const User = mongoose.model('user');

const getUser = (req, res) => {
    const _id = req.params.id
    User.findById(_id, (error, doc) => {
        if(error) {
            return res.status(422).json(error);
        } else {
            res.status(200).json(doc);
        }
    })
}

module.exports = { getUser };

