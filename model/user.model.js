const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nickname: {
        required: true,
        type: String
    },
    fullName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    dob: {
        required: false,
        type: Date
    },
    country: {
        required: true,
        type: String
    },
    memberSince: {
        default: Date.now(),
        type: Date,
    }
})

mongoose.model('user', userSchema)
