const mongoose = require('mongoose');
const { Schema } = mongoose;

const gamesSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

mongoose.model('games', gamesSchema);
