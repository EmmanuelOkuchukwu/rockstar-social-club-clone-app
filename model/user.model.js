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
    pic: {
      type: String,
      default: 'https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1632937686/Josiah-Tralawny-icon_mpuhb7.png'
    },
    memberSince: {
        default: Date.now(),
        type: Date,
    }
})

mongoose.model('user', userSchema)
