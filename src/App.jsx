import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div> 
       <Navbar />
       <Home />
       <SocialLinks />
       <About />
       <Portfolio />
       <Experience />
       <Contact />
       <ParticlesComponent />
    </div>
 
  );
}

export default App;