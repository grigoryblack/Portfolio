import {useEffect} from "react";
import Header from "../../components/MainPage/Header/index.js";
import About from "../../components/MainPage/About/index.js";
import Main from "../../components/MainPage/Main/index.js";
import Runline from "../../components/MainPage/Runline/index.js";
import Skills from "../../components/MainPage/Skills/index.js";
import Portfolio from "../../components/MainPage/Portfolio/index.js";
import CLOUDS from "vanta/src/vanta.clouds.js";
import './_main-page.scss';

const MainPage = () => {
    useEffect(() => {
        CLOUDS({
            el: "#main-page",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            skyColor: 0xFFFFFF,
            sunColor: 0x18ff2d,
            sunGlareColor: 0x30ff43,
            sunlightColor: 0x30ff43
        })
    }, []);


    return (
        <div className="main-page-wrapper">
            <div id="main-page" className="main-wrapper"></div>
            <Header/>
            <Main />
            <About />
            <Runline />
            <Skills/>
            <Portfolio/>
        </div>
    );
};

export default MainPage;