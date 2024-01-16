import { useEffect, useState } from 'react';
import './_main.scss';
import Plx from 'react-plx';

const Main = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const wordsInBrackets = ['designer', 'developer', 'student'];
    const [currentWord, setCurrentWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typeText = () => {
            const currentText = wordsInBrackets[wordIndex];

            if (isDeleting) {
                setCurrentWord(currentText.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                setCurrentWord(currentText.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }

            if (!isDeleting && charIndex === currentText.length + 1) {
                setIsDeleting(true);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % wordsInBrackets.length);
            }
        };

        const intervalId = setInterval(typeText, 130);

        return () => clearInterval(intervalId);
    }, [charIndex, isDeleting, wordIndex]);

    const parallaxData = [
        {
            start: 0,
            end: 500,
            properties: [
                {
                    startValue: 0,
                    endValue: -500, // Adjust this value based on your needs
                    property: "translateX",
                },
            ],
        },
    ];

    return (
        <section id="main" className="greetings">
            <div className="greeting-container">
                <Plx parallaxData={parallaxData}>
                    <div className="title">
                        HI, my name <br /> is <span>Grigory</span> <br /> I am a <br/> <span>{currentWord}</span>
                    </div>
                </Plx>
            </div>
        </section>
    );
};

export default Main;
