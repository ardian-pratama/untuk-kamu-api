const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const { username, password, gender, status, admin } = req.body;

    try {
        const user = new User({ username, password, gender, status, admin });
        await user.save();
        res.status(200).json({ message: 'Akun berhasil di buat' });
    } catch (error) {
        if (
            error.code === 11000 &&
            error.keyPattern &&
            error.keyPattern.username
        ) {
            res.status(400).json({ message: 'Nama sudah pernah digunakan' });
        } else {
            res.status(400).json({ message: error.message });
        }
    }
};

const signIn = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            res.status(404).json({ message: 'Akun tidak ditemukan' });
            return;
        } else if (password !== user.password) {
            res.status(401).json({ message: 'Password salah' });
            return;
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({
            message: 'Login berhasil',
            user: {
                id: user._id,
                token,
                username: user.username,
                admin: user.admin
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { signUp, signIn };
