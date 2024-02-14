const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        pocky: {
            type: String,
            required: true
        },
        coklat: {
            type: String,
            required: true
        },
        lainnya: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
