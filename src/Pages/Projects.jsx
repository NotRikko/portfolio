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
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f2826e66444409.5b16b63ad5c69.jpg" /> 
                    <div className={Style.projectDescription}>
                        <h3>Umbral</h3>
                        <p>Made with: <span>React, Fake Store API</span></p>
                        <p>A mock e-commerce site inspired by high end fashion.</p>
                    </div>
                </div> 
            : 
                <div className={Style.project} id={Style.project2} data-aos={isMobile ? null : "fade-left"}>
                <div className={Style.projectDescription}>
                    <h3>Umbral</h3>
                    <p>Made with: <span>React, Fake Store API</span></p>
                    <p>Mock high end fashion e-commerce site.</p>
                </div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f2826e66444409.5b16b63ad5c69.jpg" /> 
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