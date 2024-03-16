import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

import Certifications from "./Certifications";
import WorkEx from "./WorkEx";
import Footer from "./Footer";
import Education from "./Education";
import Achievements from "./Achievements";

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <WorkEx />
      <Achievements />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
