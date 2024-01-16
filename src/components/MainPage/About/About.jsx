import {useEffect} from "react";
import Plx from "react-plx";
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import './_about.scss';

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true});

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            // Start the animation a bit earlier (adjust the value based on your needs)
            controls.start('visible', { delay: 0.2 });
        }
    }, [controls, inView]);

    const parallaxData = [
        {
            start: 1500,
            end: 2000,
            properties: [
                {
                    startValue: 0,
                    endValue: 5, // Adjust this value based on your needs
                    property: "blur",
                },
            ],
        },
    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: 50, // Start 50 pixels below its original position
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0, // Move to its original position
            transition: {
                duration: 0.8,
            },
        },
    };

    const textVariants = {
        hidden: {opacity: 0, y: 200},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.8, // Add a delay for the text animation
            },
        },
    };

    return (
        <Plx parallaxData={parallaxData} id="about" className="about-wrapper">
            <div className="card-container">
                <motion.section
                    className="about-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    ref={ref}
                >
                    <motion.div
                        variants={textVariants}
                    >
                        <motion.h1 className="title">
                            About me
                            <div className="line"/>
                        </motion.h1>
                        <br/>
                        <motion.p className="subtitle">
                            Front-end developer with <span>3 years</span> of experience and <span> 3.7 years</span> of
                            passion front-end.
                            I enjoy building responsive and fast web applications that will add value both businesses
                            and
                            people.
                            Now I am in search of new interesting and challenging tasks,
                            thanks to which I can get a unique experience for myself!
                        </motion.p>
                        <br/><br/><br/>
                        <motion.h1 className="title">
                            <div className="line"/>
                            EDUCATION
                        </motion.h1>
                        <br/>
                        <motion.p className="subtitle">
                            Ural Federal University named after the first President of Russia B. N. Yeltsin
                            ,(UrFU) <br/> <br/>
                            <span>(August 31, 2020 - July 01, 2024)</span> <br/><br/>
                            Bachelor, Applied Informatics
                        </motion.p>
                        <br/><br/><br/>
                        <motion.h1 className="title">
                            Interests
                            <div className="line"/>
                        </motion.h1>
                        <br/>
                        <motion.p className="subtitle">
                            <span>Sport:</span> basketball, gym, ski,
                            hockey, enduro. <br/> <br/>
                            <span>Films, movie:</span> The Place Beyond the Pines (2012), Gold (2016),
                            The Lincoln Lawyer (2011),There Will Be Blood (2007).
                        </motion.p>
                    </motion.div>
                </motion.section>
            </div>
        </Plx>
    );
};

export default About;
