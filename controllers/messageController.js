const Message = require('../models/message.js');

// dapatkan semua pesan
const getMessages = async (req, res) => {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.status(200).json(messages);
};

// dapatkan pesan tertentu sesuai data yg dikirim
const getMessage = async (req, res) => {
    const message = await Message.find({ name: req.query.name });
    res.status(200).json(messages);
};

// kirim pesan
// const createMessage = async (req, res) => {
//     const { nama, pocky, coklat, lainnya } = req.body;
// 
//     try {
//         const message = await Message.create({ nama, pocky, coklat, lainnya });
//         res.status(200).json(message);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

module.exports = {
    getMessages,
    // createMessage
};
