import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './_header.scss';

const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };

    const logoVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const navVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

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
                            <li><a href="#about" onClick={toggleBurgerMenu}>About</a></li>
                            <li><a href="#services" onClick={toggleBurgerMenu}>Skills</a></li>
                            <li><a href="#contact" onClick={toggleBurgerMenu}>Portfolio</a></li>
                            <li><a href="#contact" onClick={toggleBurgerMenu}>Contacts</a></li>
                        </ul>
                    </motion.nav>
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
