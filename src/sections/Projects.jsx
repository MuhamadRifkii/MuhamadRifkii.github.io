import "../styles/Projects.css";
import Aquaculture from "../assets/logo.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container-projects">
        <img className="logo" src={Aquaculture} alt="Aquaculture" />
        <div>
          <h3>Aquaculture Mate</h3>
          <p>
            Aquaculture Mate is an application that helps users identify types
            of fish by scanning fish images. This application provides
            registration, login, scan fish features, and view scan history.
          </p>
          <a
            href="https://github.com/C241-PS258/AquaQulture"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
