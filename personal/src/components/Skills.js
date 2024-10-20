import React from 'react';
import PropTypes from 'prop-types';
import './Skills.css';

const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h3>{skill}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

// PropTypes for validation
Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Default props
Skills.defaultProps = {
    skills: ['JavaScript', 'HTML', 'CSS', 'Java', 'C', 'C#', 'MySQL', 'React'],
};

export default Skills;
