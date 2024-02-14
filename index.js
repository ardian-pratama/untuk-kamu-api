require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');
const mongoose = require('mongoose');

const app = express();

// Middleware configuration
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(req.method, res.path);
    next();
});

// Database connection
mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Berhasil terhubung ke MongoDB!'))
    .catch(error =>
        console.error('Terjadi Kesalahan saat menyambung ke MongoDB:', error)
    );

// Routing
app.use('/api', router);

// Server startup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server berjalan di port', port);
});
