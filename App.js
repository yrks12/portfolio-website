import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import FeaturedProjects from './components/FeaturedProjects';
import ContactForm from './components/ContactForm';

const App = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <FeaturedProjects />
            <ContactForm />
        </div>
    );
};

export default App;