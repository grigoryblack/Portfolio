import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './_portfolio-page.scss';

const PortfolioPage = ({ title, subtitle, image, link, description }) => {
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
    };

    return (
        <div>
            <div className="portfolio-page-wrapper">
                <div className="portfolio-page-container">
                    <motion.div
                        className="text-block"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Link className="back-button" to="/">
                            ← Back
                        </Link>
                        <div className="title">{title}</div>
                        <div className="subtitle">{subtitle}</div>
                        {description && <div className="about-text">{description}</div>}
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                className="open-site"
                                rel="noreferrer"
                            >
                                Show site
                            </a>
                        )}
                    </motion.div>
                    <motion.img
                        src={image}
                        alt=""
                        className="image-container"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
