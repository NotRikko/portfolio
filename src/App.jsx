import Intro from './Pages/Intro'
import About from './Pages/About'
import Projects from './Pages/Projects'
import { useRef } from 'react'
import Style from './App.module.css'

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Intro 
        scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center'})}
        scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToContact={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}
      />
      <div ref={aboutRef} className={Style.appSection}>
        <About />
      </div>
      <div ref={projectsRef} className={Style.appSection}>
        <Projects />
      </div>
    </>
  )
}

export default App
