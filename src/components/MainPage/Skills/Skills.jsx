import React, { useState, useEffect } from 'react';
import './_skills.scss';
import { SKILLS } from '../../../constants/skillsConstants.js';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
    const [expandedSkill, setExpandedSkill] = useState(null);
    const [isMobileView, setIsMobileView] = useState(false);
    const [showAllSkills, setShowAllSkills] = useState(false); // новое состояние

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 559);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSkill = (index) => {
        setExpandedSkill((prevExpanded) => (prevExpanded === index ? null : index));
    };

    const toggleSkillsView = () => {
        setShowAllSkills(!showAllSkills);
    };

    const renderSkills = () => {
        const skillsToRender = showAllSkills ? SKILLS.length : (isMobileView ? 5 : SKILLS.length);

        return SKILLS.slice(0, skillsToRender).map((skill, index) => (
            <motion.div
                className={`skill-card ${expandedSkill === index ? 'expanded' : ''}`}
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                <div className="skill-name" onClick={() => toggleSkill(index)}>
                    {skill.name}
                </div>
                <AnimatePresence>
                    {expandedSkill === index && (
                        <motion.div
                            className="skill-details"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            <div className="skill-description">
                                <ul>
                                    {skill.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="skill-progress">
                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${(skill.rating / 5) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="progress-text">{`${(skill.rating / 5) * 100}%`}</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        ));
    };

    return (
        <section className="skills-wrapper" id="skills">
            <div className="skills-container">
                <div className="skills-title">Skills</div>
                <div className="skills-cards">{renderSkills()}</div>
                {isMobileView && (
                    <div className="show-all-button" onClick={toggleSkillsView}>
                        {showAllSkills ? 'Hide' : <p>Show All (<span>{SKILLS.length - 5}</span>)</p>}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
