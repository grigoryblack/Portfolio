import {useEffect, useState} from "react";
import Plx from 'react-plx';
import CableWalker from '/src/assets/img/CableWalker.png'
import CableWalkerCRM from '/src/assets/img/Cablewalker CRM.png'
import Kampus from '/src/assets/img/Kampus 1.png'
import Olimp from '/src/assets/img/ОЛИМП СК 1.png'
import zip1 from '/src/assets/img/zip1.png'
import zip2 from '/src/assets/img/zip2.png'
import './_portfolio.scss';

const Portfolio = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const endValue1 = windowWidth <= 650 ? 50 : 400;
    const endValue2 = windowWidth <= 650 ? -50 : -400;

    const parallaxData1 = [
        {
            start: 'self',
            startOffset: '0%',
            end: 'self',
            endOffset: '60%',
            easing: 'easeInOutQuad',
            properties: [
                {
                    startValue: 0,
                    endValue: endValue1,
                    property: 'translateX',
                },
            ],
        },
    ];

    const parallaxData2 = [
        {
            start: 'self',
            startOffset: '0%',
            end: 'self',
            endOffset: '60%',
            easing: 'easeInOutQuad',
            properties: [
                {
                    startValue: 0,
                    endValue: endValue2,
                    property: 'translateX',
                },
            ],
        },
    ];


    return (
        <section className="portfolio-wrapper" id="experience">
            <div className="portfolio-container">
                <div className="title">Experience <span>3.5 years</span></div>
                <div className="subtitle">Commercial</div>
                <Plx parallaxData={parallaxData1}>
                    <div className="portfolio-item">
                        <img className="zip-texture" src={zip1} alt="зип"/>
                        <div className="item-tile"><span> №1 </span>CableWalker</div>
                        <div className="item-description">
                            An innovative digital robotic tool for diagnosing and maintaining energized power
                            lines in real-time, increasing the efficiency of electrical networks.
                        </div>
                        <img className="item-photo" src={CableWalker} alt=""/>
                    </div>
                </Plx>
                <Plx parallaxData={parallaxData2}>
                    <div className="portfolio-item" style={{marginRight: 0, marginLeft: 'auto'}}>
                        <img className="zip-texture-2" src={zip2} alt="зип"/>
                        <div className="item-tile"><span> №2 </span>CableWalker CRM system</div>
                        <div className="item-description">
                            Is a system for tracking project readiness,
                            the state of power line spans, and an employee’s personal account.
                        </div>
                        <img className="item-photo" src={CableWalkerCRM} alt=""/>
                    </div>
                </Plx>
                <div className="subtitle">Freelance</div>
                <Plx parallaxData={parallaxData1}>
                    <div className="portfolio-item">
                        <img className="zip-texture" src={zip1} alt="зип"/>
                        <div className="item-tile"><span> №3 </span>CC «OLIMP»</div>
                        <div className="item-description">
                            Construction company engaged in the construction of
                            country houses and the selection of sites. Created landing. power
                            lines in real-time, increasing the efficiency of electrical networks.
                        </div>
                        <img className="item-photo" src={Olimp} alt=""/>
                    </div>
                </Plx>
                <Plx parallaxData={parallaxData2}>
                    <div className="portfolio-item" style={{marginRight: 0, marginLeft: 'auto'}}>
                        <img className="zip-texture-2" src={zip2} alt="зип"/>
                        <div className="item-tile"><span> №4 </span>Kampus</div>
                        <div className="item-description">
                            Project that helps students develop,
                            a personal account of trustees has been created
                            to track statistics.
                        </div>
                        <img className="item-photo" src={Kampus} alt=""/>
                    </div>
                </Plx>
            </div>
        </section>
    );
};

export default Portfolio;
