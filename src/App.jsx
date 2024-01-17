import {Route, Routes} from 'react-router-dom'
import {useEffect} from "react";
import MainPage from "./content/MainPage/index.js";
import PortfolioPage from "./content/PortfolioPage/index.js";
import CLOUDS from "vanta/src/vanta.clouds.js";
import CableWalker from '/src/assets/img/CableWalkerMocup.png';
import CableWalkerCrm from '/src/assets/img/CrmMockup.png';
import Olimp from '/src/assets/img/OlimpMockup.png';
import Kampus from '/src/assets/img/KapusMockup.png';
import './App.css'


function App() {

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
        });
    }, []);

    return (
        <div className="app-wrapper">
            <div id="main-page" className="main-wrapper"></div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/CableWalker" element={<PortfolioPage title="CableWalker"
                                                                   link="https://cablewalker.com/"
                                                                   image={CableWalker}
                                                                   description="We create innovative solutions for diagnostics and maintenance of power lines."
                                                                   subtitle="An innovative digital robotic device for monitoring and maintaining power lines in real time, improving the efficiency of power grids."/>
                }/>
                <Route path="/CableWalkerCrm" element={<PortfolioPage title="CableWalker CRM system"
                                                                   link={null}
                                                                   image={CableWalkerCrm}
                                                                   description={null}
                                                                   subtitle="System for tracking project readiness, the state of power line spans and an employee’s personal account."/>
                }/>
                <Route path="/Olimp" element={<PortfolioPage title="CC «OLYMP»"
                                                                   link={null}
                                                                   image={Olimp}
                                                                   description={null}
                                                                   subtitle="Construction company engaged in the construction of country houses and the selection of sites. Created landing."/>
                }/>
                <Route path="/Kampus" element={<PortfolioPage title="Kampus"
                                                                   link={null}
                                                                   image={Kampus}
                                                                   description={null}
                                                                   subtitle="A project that helps students develop, a personal account of trustees has been created to track statistics."/>
                }/>
            </Routes>
        </div>
    )
}

export default App
