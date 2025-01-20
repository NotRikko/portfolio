import { useEffect, useState } from 'react'
import Style from './About.module.css'
import CSSIcon from '../assets/css.svg'
import ReactIcon from '../assets/react.svg'
import JSIcon from '../assets/js.svg'
import HTMLIcon from '../assets/html.svg'
import MongoDBIcon from '../assets/mongodb.svg'
import NodeIcon from '../assets/node.svg'
import JavaIcon from '../assets/JavaIcon.svg'
import SpringBootIcon from '../assets/SpringBootIcon.svg'
import PythonIcon from '../assets/PythonIcon.svg'
import vtuberwordleLogo from '../assets/vtuberwordleLogo.png'
import holoErrorPic from '../assets/holoerrorPic.jpg'
import portfolioSitePic from '../assets/portfolioSitePic.png'
import yugenProjectPic from '../assets/yugenProjectPic.png'
import { GiJusticeStar } from "react-icons/gi"
import { BsStars } from "react-icons/bs"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function About() {
    const [starProject, setStarProject] = useState({
        title: 'Yugen',
        image: yugenProjectPic,
        link: 'https://github.com/NotRikko/yugen'
    })
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Holo Error',
            image: holoErrorPic, 
            link: 'https://github.com/NotRikko/hololive_gacha',
        },
        {
            id: 2,
            title: 'Vordle',
            image: vtuberwordleLogo, 
            link: 'https://github.com/NotRikko/hololive_gacha'
        },
        {
            id: 3,
            title: 'Portfolio',
            image:  portfolioSitePic, 
            link: 'https://github.com/NotRikko/portfolio'
        },
    ]);

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
            <div id={Style.profileCard} data-aos={isMobile ? null : "fade-right"}>
                <div id={Style.profileCardHead}>
                    <img src='https://i.pinimg.com/236x/3c/d2/2b/3cd22b496112fffdc6bc8f42db417b2f.jpg'/>
                    <h2 style={{ fontSize: "1.8rem" }}>Rikko</h2>
                </div>
                <div id={Style.profileCardMain}>
                    <div id={Style.profileCardMainStats}>
                        <div>
                            <h3>Pronouns</h3>
                            <h3>he/him</h3>
                        </div>
                        <div>
                            <h3>Location</h3>
                            <h3>LA, CA</h3>
                        </div>
                        <div>
                            <h3>Currently</h3>
                            <h3>Studying</h3>
                        </div>
                    </div>
                    <p style={{backgroundColor:"rgb(226, 224, 223)", padding:"2.5%", paddingBottom:"3%", boxSizing:"border-box", height: '60%'}}>
                        I&apos;m Rikko, a software engineer who is always striving to learn and improve. 
                        I blend my technical skills with creativity, constantly seeking opportunities to grow and innovate.
                        I also really love anime and reading!
                    </p>
                </div>
                <div id={Style.profileCardRecords}>
                    <img src={JavaIcon}/>
                    <img src={SpringBootIcon}/>
                    <img src={PythonIcon}/>
                    <img src={JSIcon}/>
                    <img src={NodeIcon}/>
                    <img src={MongoDBIcon}/>
                    <img src={ReactIcon}/>
                    <img src={CSSIcon}/>
                    <img src={HTMLIcon}/>
                </div>
                
            </div>
            <div id={Style.right_about} data-aos={isMobile ? null : "fade-left"}>
                <a href={starProject.link} target='_blank' rel='noopener noreferrer'>
                <div id={Style.right_about_main}>
                    <h2 style={{ marginLeft: '2%', display: 'inline-flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '2.5rem', marginRight: '8px' }}>
                            <GiJusticeStar />
                        </span>
                        Star of the Show
                    </h2>
                    <img src={starProject.image}></img>
                    <p style={{ position: 'absolute', bottom: '0', left: '0', right: '0', margin: '0', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', textAlign: 'center' }}>{starProject.title}</p>
                </div>
                </a>
                <div id={Style.right_about_sides_container}>
                    <h2 style={{ marginLeft: '2%', display: 'inline-flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '2rem', marginRight: '8px' }}>
                            <BsStars />
                        </span>
                        Star Faring Companions
                    </h2>
                    <div id={Style.right_about_sides}>
                        {projects.map((project) => (
                            <div key={project.id} style={{ position: 'relative' }}>
                                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                    <img src={project.image} alt={project.title}></img>
                                    <p
                                        style={{
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '0',
                                            right: '0',
                                            margin: '0',
                                            padding: '8px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: 'white',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {project.title}
                                    </p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default About