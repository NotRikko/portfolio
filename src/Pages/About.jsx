import { useEffect, useState } from 'react'
import Style from './Pages.module.css'
import CSSIcon from '../assets/css.svg'
import ReactIcon from '../assets/react.svg'
import ExpressIcon from '../assets/express.svg'
import JSIcon from '../assets/js.svg'
import HTMLIcon from '../assets/html.svg'
import MongoDBIcon from '../assets/mongodb.svg'
import NodeIcon from '../assets/node.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function About() {
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
        <div className={Style.about} id="about">
            <h1>About</h1>
            <div id={Style.about_main}>
                <div id={Style.left_about} data-aos={isMobile ? null : "fade-right"}>
                    <img src='https://cdn.donmai.us/original/5d/11/5d11fcb5f009d3b806c43343ca56307b.png' />
                    <p>Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, keeping fit and playing guitar.</p>
                </div>
                <div id={Style.right_about} data-aos={isMobile ? null : "fade-left"}>
                    <img src={CSSIcon}/>
                    <img src={HTMLIcon}/>
                    <img src={ReactIcon}/>
                    <img src={JSIcon}/>
                    <img src={NodeIcon}/>
                    <img src={MongoDBIcon}/>
                </div>
            </div>
        </div>
    )
}

export default About