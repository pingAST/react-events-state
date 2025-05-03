import React from 'react';

const ProjectList = ({ projects }) => (
    <div className="portfolio">
        {projects.map((project, index) => (
            <div key={index} className="project">
                <img
                    src={project.img}
                    alt={project.category}
                />
            </div>
        ))}
    </div>
);

export default ProjectList;