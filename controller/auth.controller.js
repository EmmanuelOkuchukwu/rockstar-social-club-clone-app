const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const { JWT_SECRET } = require('../key');

const register = (req, res) => {
    const { nickname, fullName, email, password, dob, country } = req.body;
    if( !nickname || !fullName || !email || !password || !dob || !country) {
        return res.json({ message: 'please add all the fields' })
    }
    User.findOne({ email: email })
        .then((insertedUser) => {
            if(insertedUser) {
                return res.json({ message: 'user already exists with this email.' })
            }
            bcrypt.hash(password, 14)
                .then((bcryptPassword) => {
                    const user = new User({ nickname, fullName, email, password: bcryptPassword, dob, country })
                    user.save()
                        .then((savedUser) => {
                            return res.status(201).json({ savedUser })
                        }, (error) => {
                            return res.status(401).json({ error })
                        })
                })
        })
        .catch((error) => console.log(error))
}

const login = (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(200).json({ message: 'Email or password input empty!' })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if(!savedUser) {
                res.json({ message: 'User email not found!' })
            }
            bcrypt.hash(password, savedUser.password)
                .then(doMatch => {
                    if(doMatch) {
                        const token = jwt.sign({ user: savedUser }, JWT_SECRET, { expiresIn: '2d' })
                        const { nickname, fullName, email, dob, country } = savedUser;
                        res.json({ token, user: { nickname, fullName, email, dob, country }})
                    } else {
                        return res.json({ message: 'Invalid email or password' })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        })
}

module.exports = { register, login }
