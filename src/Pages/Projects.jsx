import { useState, useEffect } from 'react'
import Style from './Projects.module.css'
import vtuberwordleLogo from '../assets/vtuberwordleLogo.png'
import holoErrorPic from '../assets/holoerrorPic.jpg'
import portfoliositePic from '../assets/portfoliositePic.png'
import AOS from 'aos';

function Projects() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth)
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    AOS.init();
    const isMobile = width <= 850;
    return (
        <div id={Style.projects}>
            <h2>Projects</h2>
            <div className={Style.project} id={Style.project1} data-aos={isMobile ? null : "fade-right"}>
                <img src={vtuberwordleLogo} /> 
                <div className={Style.projectDescription}>
                    <h3>Vordle</h3>
                    <a href='https://github.com/NotRikko/vtuber-wordle' target='_blank' rel='noopener noreferrer'>Github</a>
                    <p>Made with: <span>React, Node.js, Express, MongoDB</span></p>
                    <p>Vtuber centered wordle game!</p>
                </div>
            </div>
            {isMobile ? 
                <div className={Style.project} id={Style.project2} >
                <img src={holoErrorPic} /> 
                    <div className={Style.projectDescription}>
                        <h3>Holo Error</h3>
                        <a href='https://github.com/NotRikko/hololive_gacha' target='_blank' rel='noopener noreferrer'>Github</a>
                        <p>Made with: <span>React, Java, Spring Boot, PostgreSQL</span></p>
                        <p>A Hololive inspired gacha game.</p>
                    </div>
                </div> 
            : 
                <div className={Style.project} id={Style.project2} data-aos={isMobile ? null : "fade-left"}>
                <div className={Style.projectDescription}>
                        <h3>Holo Error</h3>
                        <a href='https://github.com/NotRikko/hololive_gacha' target='_blank' rel='noopener noreferrer'>Github</a>
                        <p>Made with: <span>React, Java, Spring Boot, PostgreSQL</span></p>
                        <p>A Hololive inspired gacha game.</p>
                </div>
                <img src={holoErrorPic} /> 
                </div>
            }
            <div className={Style.project} id={Style.project3} data-aos={isMobile ? null : "fade-right"}>
                <img src={portfoliositePic}/> 
                <div className={Style.projectDescription}>
                    <h3>Portfolio Site</h3>
                    <a href='https://github.com/NotRikko/hololive_gacha' target='_blank' rel='noopener noreferrer'>Github</a>
                    <p>Made with: <span>React, Node.js, Express, MongoDB</span></p>
                    <p>You are here. Just showing off my works!</p>
                </div>
            </div>
        </div>
    )
}

export default Projects