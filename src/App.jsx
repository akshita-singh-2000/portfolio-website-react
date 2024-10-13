import './App.css'
import Intro from './sections/Intro/Intro'
import Projects from './sections/Projects/projects'
import Skills from './sections/Skills/Skills';

// Components
function App() {
  return (
    <>
      <Intro/>
      <Skills />
      <Projects/>
    </>
  );
}

export default App;
