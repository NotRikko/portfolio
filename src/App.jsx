import Intro from './Pages/Intro'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { useRef } from 'react'
import './App.css'

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Intro 
        scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToContact={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
          <Contact />
      </div>
    </>
  )
}

export default App
