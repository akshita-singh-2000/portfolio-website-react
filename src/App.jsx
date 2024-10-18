import './App.css'
import Intro from './sections/Intro/Intro'
import Projects from './sections/MyProjects/Projects'
import Skills from './sections/Skills/Skills';
import Interests from './sections/Interest/Interest';
import Education from './sections/Education/Education';
import Footer from './sections/Footer/Footer';


// Components
function App() {
  return (
    <>
      <Intro/>
      <Education />
      <Projects/>
      <Interests />
      <Skills />
      <Footer />
      
    </>
  );
}

export default App;
