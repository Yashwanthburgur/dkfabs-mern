// routes/quoteRoutes.js - MINIMAL WORKING VERSION
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { createQuote } = require('../controllers/quoteController');

// ONLY POST route (form submission)
router.post('/quote', upload.array('files', 5), createQuote);

module.exports = router;
