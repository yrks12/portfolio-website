const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    // Data validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, message });
    try {
        await contact.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error.' });
    }
});

module.exports = router;