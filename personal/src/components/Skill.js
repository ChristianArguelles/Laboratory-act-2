import React from 'react';
import PropTypes from 'prop-types'; // Optional: For prop type validation

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <ul className="skills-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Node.js</li>
            </ul>
        </div>
    );
};

// Optional: Add PropTypes for future enhancements
Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string),
};

export default Skills;
