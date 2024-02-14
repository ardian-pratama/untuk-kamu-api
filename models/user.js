const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['admin', 'visitor'],
            default: 'visitor'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
