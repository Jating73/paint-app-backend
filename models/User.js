const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    paintings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Painting' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
