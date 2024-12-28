import { useState, useEffect } from 'react'
import Style from './Pages.module.css'
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
    const isMobile = width <= 850;
    return (
        <div id={Style.projects}>
            <h2>Projects</h2>
            <div className={Style.project} id={Style.project1} data-aos={isMobile ? null : "fade-right"}>
                <img src="https://i.gadgets360cdn.com/large/wordle_website_screenshot_new_1641474361623.jpg" /> 
                <div className={Style.projectDescription}>
                    <h3>Vordle</h3>
                    <p>Made with: <span>React, Node.js, Express, MongoDB</span></p>
                    <p>Vtuber centered wordle game!</p>
                </div>
            </div>
            {isMobile ? 
                <div className={Style.project} id={Style.project2} >
                <img src="https://i.redd.it/lajibygqo6w71.png" /> 
                    <div className={Style.projectDescription}>
                        <h3>Holo Error</h3>
                        <p>Made with: <span>React, Java, Spring Boot, PostgreSQL</span></p>
                        <p>A Hololive inspired gacha game.</p>
                    </div>
                </div> 
            : 
                <div className={Style.project} id={Style.project2} data-aos={isMobile ? null : "fade-left"}>
                <div className={Style.projectDescription}>
                <div className={Style.projectDescription}>
                        <h3>Holo Error</h3>
                        <p>Made with: <span>React, Java, Spring Boot, PostgreSQL</span></p>
                        <p>A Hololive inspired gacha game.</p>
                    </div>
                </div>
                <img src="https://preview.redd.it/ffi2po49unb91.png?width=1920&format=png&auto=webp&s=c394a888163f9e51aaaf0616c4548b58cccad12a" /> 
                </div>
            }
            <div className={Style.project} id={Style.project3} data-aos={isMobile ? null : "fade-right"}>
                <img src="https://cdn.oneesports.gg/cdn-data/2024/03/Anime_Frieren_MainCharacter_Wallpaper2.jpg" /> 
                <div className={Style.projectDescription}>
                    <h3>HSR TFT</h3>
                    <p>Made with: <span>React, Node.js, Express, MongoDB</span></p>
                    <p>HSR inspired team fight tactics shop.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects