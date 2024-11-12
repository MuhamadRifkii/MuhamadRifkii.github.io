import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import About from "./sections/About";
import ParticlesComponent from "./components/particles";

function App() {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <Navbar />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
