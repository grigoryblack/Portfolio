import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './_header.scss';

const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };

    const closeBurgerMenu = () => {
        setBurgerMenuOpen(false);
    };

    const logoVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const navVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = window.innerHeight * 0.1; // 20% от высоты экрана
            const y = section.getBoundingClientRect().top + window.pageYOffset - yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            closeBurgerMenu(); // Закрыть бургер-меню после нажатия на элемент
        }
    };

    useEffect(() => {
        // Обработчик для закрытия меню при клике вне него
        const closeMenuOnClickOutside = (e) => {
            if (isBurgerMenuOpen) {
                const headerContainer = document.querySelector('.header-container');
                if (headerContainer && !headerContainer.contains(e.target)) {
                    setBurgerMenuOpen(false);
                }
            }
        };

        document.addEventListener('click', closeMenuOnClickOutside);

        return () => {
            document.removeEventListener('click', closeMenuOnClickOutside);
        };
    }, [isBurgerMenuOpen]);

    return (
        <header className={'fixed'}>
            <div className="header-container">
                <motion.div className="logo" variants={logoVariants} initial="hidden" animate="visible">
                    Druzhenkov Grigory
                </motion.div>
                <div className={`burger-menu ${isBurgerMenuOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <AnimatePresence>
                    <motion.nav className={isBurgerMenuOpen ? 'open' : ''} variants={navVariants} initial="hidden" animate="visible">
                        <ul>
                            <li><a onClick={() => scrollToSection('about')}>About</a></li>
                            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                            <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                            <li><a onClick={() => scrollToSection('contacts')}>Contacts</a></li>
                        </ul>
                    </motion.nav>
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
