// routes/contact.js
const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST contact form submission
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Data validation
    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please fill in all fields' });
    }

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ msg: 'Message sent successfully!' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;