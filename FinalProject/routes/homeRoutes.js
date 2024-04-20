// homeRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('./authMiddleware');

router.get('/home', authMiddleware, (req, res) => {
    // Return homepage content (e.g., HTML template)
    res.sendFile(__dirname + '/home.html');
});

module.exports = router;
