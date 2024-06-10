import Intro from './Pages/Intro'
import About from './Pages/About'
import Projects from './Pages/Projects'
import { useRef } from 'react'
import './App.css'

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Intro 
        scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </>
  )
}

export default App
