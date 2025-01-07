import Style from './Projects.module.css'
import vtuberwordleLogo from '../assets/vtuberwordleLogo.png'
import holoErrorPic from '../assets/holoerrorPic.jpg'
import portfoliositePic from '../assets/portfoliositePic.png'
import umbralPic from '../assets/umbralPic.jpg'

function Projects() {
    const projects = [
        {   
            name: "Vordle",
            link: "https://github.com/NotRikko/vtuber-wordle",
            tech: "React, Node.js, Express, MongoDB",
            description: "Vtuber centered wordle game",
            picture: vtuberwordleLogo
        },
        {
            name: "Holo Error",
            link: "https://github.com/NotRikko/hololive_gacha",
            tech: "React, Java, Spring Boot, PostgreSQL",
            description: "A Hololive inspired gacha game.",
            picture: holoErrorPic
        },
        {
            name: "Umbral",
            link: "https://github.com/NotRikko/odin-shopping-cart",
            tech: "React",
            description: "Mock ecommerce website.",
            picture: umbralPic
        },
        {
            name: "Portfolio",
            link: "https://github.com/NotRikko/hololive_gacha",
            tech: "React",
            description: "You are here. Just showing off my works",
            picture: portfoliositePic
        },
    ]
    
    return (
        <div id={Style.projects}>
            <h1>Projects</h1>
            <div id={Style.container}>
            {projects.map((project, index) => (
                <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className={Style.projectCard}
                >
                    <img src={project.picture} alt={project.name} />
                    <div className={Style.projectData}>
                        <h2>{project.name}</h2>
                        <h3>{project.tech}</h3>
                        <p>{project.description}</p>
                    </div>
                </a>
            ))}
            </div>
        </div>
    )
}

export default Projects