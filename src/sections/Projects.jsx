import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="container-projects">
        <img className="logo" src="/assets/logo.png" alt="Aquaculture" />
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
      <div className="container-projects">
        <img className="logo" src="/assets/moonlight.png" alt="Moonlight" />
        <div>
          <h3>Moonlight Android - Absolute Touch</h3>
          <p>
            Moonlight for Android is an open source client for NVIDIA GameStream
            and Sunshine. Moonlight for Android will allow you to stream your
            full collection of games from your Windows PC to your Android
            device, whether in your own home or over the internet.
          </p>
          <a
            href="https://github.com/MuhamadRifkii/moonlight-android"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="container-projects">
        <img className="logo" src="/assets/react.svg" alt="Jikan Moe" />
        <div>
          <h3>Jikan Moe - React</h3>
          <p>
            Jikan (時間) is an unofficial & open-source API for the “most active
            online anime + manga community and database” — MyAnimeList.
          </p>
          <div className="links">
            <a
              href="https://jikan-moe-react.vercel.app/anime"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            <span className="separator">|</span>
            <a
              href="https://github.com/MuhamadRifkii/jikan-moe-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
