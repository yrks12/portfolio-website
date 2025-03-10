// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Create a new contact message
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        
        const contact = await newContact.save();
        res.status(201).json(contact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;