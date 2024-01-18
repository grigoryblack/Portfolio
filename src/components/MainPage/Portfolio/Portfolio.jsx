import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Plx from 'react-plx';
import ProgressiveImage from "../ProgressiveImage/index.js";
import CableWalker from "/src/assets/img/CableWalker.png";
import CableWalkerCRM from "/src/assets/img/Cablewalker CRM.png";
import Kampus from "/src/assets/img/Kampus 1.png";
import Olimp from "/src/assets/img/ОЛИМП СК 1.png";
import CableWalkerLow from "/src/assets/img/CableWalker low.png";
import CableWalkerCRMLow from "/src/assets/img/Cablewalker CRM low.png";
import KampusLow from "/src/assets/img/Kampus low.png";
import OlimpLow from "/src/assets/img/ОЛИМП СК low.png";
import zip1 from "/src/assets/img/zip1.png";
import zip2 from "/src/assets/img/zip2.png";
import zip1Low from "/src/assets/img/zip1 low.png";
import zip2Low from "/src/assets/img/zip2 low.png";
import './_portfolio.scss';

const Portfolio = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const handlePlxClick = (route) => {
        // Redirect to the specified route when Plx is clicked
        navigate(route);
    };

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
                <Plx parallaxData={parallaxData1} onClick={() => handlePlxClick('/CableWalker')}>
                    <div className="portfolio-item">
                        <ProgressiveImage src={zip1} placeholderSrc={zip1Low} width={'100%'} className={'zip-texture'}/>
                        <div className="item-tile"><span> №1 </span>CableWalker</div>
                        <div className="item-description">
                            An innovative digital robotic tool for diagnosing and maintaining energized power
                            lines in real-time, increasing the efficiency of electrical networks.
                        </div>
                        <ProgressiveImage src={CableWalker} placeholderSrc={CableWalkerLow} width={'100%'} className={'item-photo'}/>
                    </div>
                </Plx>
                <Plx parallaxData={parallaxData2} onClick={() => handlePlxClick('/CableWalkerCRM')}>
                    <div className="portfolio-item" style={{marginRight: 0, marginLeft: 'auto'}}>
                        <ProgressiveImage src={zip2} placeholderSrc={zip2Low} width={'100%'} className={'zip-texture-2'}/>
                        <div className="item-tile"><span> №2 </span>CableWalker CRM system</div>
                        <div className="item-description">
                            Is a system for tracking project readiness,
                            the state of power line spans, and an employee’s personal account.
                        </div>
                        <ProgressiveImage src={CableWalkerCRM} placeholderSrc={CableWalkerCRMLow} width={'100%'} className={'item-photo'}/>
                    </div>
                </Plx>
                <div className="subtitle">Freelance</div>
                    <Plx parallaxData={parallaxData1} onClick={() => handlePlxClick('/Olimp')}>
                    <div className="portfolio-item">
                        <ProgressiveImage src={zip1} placeholderSrc={zip1Low} width={'100%'} className={'zip-texture'}/>
                        <div className="item-tile"><span> №3 </span>CC «OLYMP»</div>
                        <div className="item-description">
                            Construction company engaged in the construction of
                            country houses and the selection of sites. Created landing. power
                            lines in real-time, increasing the efficiency of electrical networks.
                        </div>
                        <ProgressiveImage src={Olimp} placeholderSrc={OlimpLow} width={'100%'} className={'item-photo'}/>
                    </div>
                </Plx>
                <Plx parallaxData={parallaxData2}  onClick={() => handlePlxClick('/Kampus')}>
                    <div className="portfolio-item" style={{marginRight: 0, marginLeft: 'auto'}}>
                        <ProgressiveImage src={zip2} placeholderSrc={zip2Low} width={'100%'} className={'zip-texture-2'}/>
                        <div className="item-tile"><span> №4 </span>Kampus</div>
                        <div className="item-description">
                            Project that helps students develop,
                            a personal account of trustees has been created
                            to track statistics.
                        </div>
                        <ProgressiveImage src={Kampus} placeholderSrc={KampusLow} width={'100%'} className={'item-photo'}/>
                    </div>
                </Plx>
            </div>
        </section>
    );
};

export default Portfolio;
