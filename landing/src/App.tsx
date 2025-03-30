import { useEffect } from 'react'
import { lifeController } from './life/LifeController';
import './App.css'
import { IntroCard } from './components/IntroCard/IntroCard';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';

function App() {

  useEffect(() => {
    setInterval(() => lifeController.drawLife(), 150);
  }, []);


  return (
    <>
        <IntroCard/>
        <ProjectsSection/>
    </>
  )
}

export default App
