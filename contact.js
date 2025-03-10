const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Contact Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });
const Contact = mongoose.model('Contact', contactSchema);

// Contact Route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });
  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});