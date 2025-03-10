import React from 'react';

const FeaturedProjects = () => {
    return (
        <section id="featured-projects">
            <h2>Featured Projects</h2>
            <div className="project">
                <h3>Project Title</h3>
                <p>Short description of the project.</p>
                <a href="#">View Project</a>
            </div>
            {/* More projects can be added here */}
        </section>
    );
};

export default FeaturedProjects;