import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vk from '/src/assets/img/vk.svg';
import telegram from '/src/assets/img/telegram.svg';
import git from '/src/assets/img/git.svg';
import phoneImage from '/src/assets/img/phone.png';
import emailImage from '/src/assets/img/email.png';
import './_contacts.scss';

const Contacts = () => {
    const [notification, setNotification] = useState(null);

    const handleCopyToClipboard = (text, imgSrc) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setNotification({ text, imgSrc });
                console.log(`${text} copied`);
                setTimeout(() => setNotification(null), 1500);
            });
    };

    const handleCallPhone = () => {
        // Use the tel URI scheme to make the phone number clickable for making a call
        window.location.href = 'tel:+79127864139';
    };

    return (
        <section id="contacts" className="contacts-wrapper">
            <AnimatePresence>
                {notification && (
                    <motion.div
                        className="notification"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                    >
                        <img src={notification.imgSrc} alt="" loading="lazy" />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="contacts-container">
                <div className="title">Contacts</div>
                <div className="subtitle">
                    I’m interested in freelance opportunities – especially ambitious or large projects. However, if you
                    have other requests or questions, don’t hesitate to call or write me! ;)
                </div>
                <div className="contacts-items">
                    <div className="contacts-item">
                        <div className="item" onClick={handleCallPhone}>Phone:
                            <span className="gradient-hover" onClick={() => handleCopyToClipboard('+79127864139', phoneImage)}> +79127864139</span>
                        </div>
                        <div className="item" onClick={() => handleCopyToClipboard('drz2002@yandex.ru', emailImage)}>E-mail:
                            <span className="gradient-hover"> drz2002@yandex.ru</span>
                        </div>
                    </div>
                    <div className="social-media-container">
                        <a href="https://vk.com/bigboyblack" target="_blank" rel="noreferrer"> <img src={vk} alt="vk" className="logo-social-media" loading="lazy"/></a>
                        <a href="https://github.com/grigoryblack" target="_blank" rel="noreferrer"> <img src={git} alt="git" className="logo-social-media" loading="lazy" /></a>
                        <a href="tg://resolve?domain=Grigory_Dr" target="_blank" rel="noreferrer"> <img src={telegram} alt="telegram" className="logo-social-media" loading="lazy"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
