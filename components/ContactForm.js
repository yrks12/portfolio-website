import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the submit logic here
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;