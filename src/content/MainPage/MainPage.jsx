import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../../components/MainPage/Header/index.js";
import About from "../../components/MainPage/About/index.js";
import Main from "../../components/MainPage/Main/index.js";
import Runline from "../../components/MainPage/Runline/index.js";
import Skills from "../../components/MainPage/Skills/index.js";
import Portfolio from "../../components/MainPage/Portfolio/index.js";
import Contacts from "../../components/MainPage/Contacts/index.js";
import './_main-page.scss';

const ScrollButton = ({ onClick }) => (
    <motion.button
        className="bn632-hover bn22"
        onClick={onClick}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 50, opacity: 0 }}
        transition={{ type: "spring", duration: 0.1 }}
    >
        ↑
    </motion.button>
);

const MainPage = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const showButtonThreshold = window.innerHeight * 1.5; // 20% от высоты экрана
            setShowScrollButton(scrollPosition > showButtonThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({ x: 0, opacity: 1 });
    }, [controls]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = window.innerHeight * 0.1; // 20% от высоты экрана
            const y = section.getBoundingClientRect().top + window.pageYOffset - yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="main-page-wrapper">
            <Header/>
            <Main/>
            <About/>
            <Runline/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            {showScrollButton && (
                <ScrollButton onClick={() => scrollToSection('main')} />
            )}
        </div>
    );
};

export default MainPage;
