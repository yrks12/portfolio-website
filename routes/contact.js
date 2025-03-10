const express = require('express');
const router = express.Router();
const Contact = require('./Contact');

// POST: Create new contact submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message,
  });
  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error });
  }
});

module.exports = router;