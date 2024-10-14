import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

// PropTypes for validation
Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Default props
Skills.defaultProps = {
    skills: ['JavaScript', 'React', 'CSS', 'HTML'],
};

export default Skills;
