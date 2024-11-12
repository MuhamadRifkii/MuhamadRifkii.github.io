import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <div className="profile-container">
        <div className="profile-image">
          <img
            src="/assets/Profile.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>

        <div className="introduction">
          <h2 className="name">Muhamad Rifqi</h2>
          <p>
            I am a final-year Information System student at Dinamika Bangsa
            University. I have sufficient skills in web and mobile development
            using various technologies.
          </p>
          <p>
            Additionally, I have an interest in Machine Learning and Cloud
            Computing.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/MuhamadRifkii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-rifqii/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="experience-section">
        <h3>Experience</h3>
        <ul>
          <li className="experience-item">
            <strong>
              Mobile Development Cohort at Bangkit Academy 2024 Batch 1
            </strong>
            <p>
              Focused on mobile development with Kotlin as part of a
              collaborative learning program.
            </p>
          </li>
          <li className="experience-item">
            <strong>
              FullStack Web Development Cohort at CAMP Celerates 2024 Batch 1
            </strong>
            <p>
              Focused on fullstack web development with React and Node.js as
              part of a learning mastery program.
            </p>
          </li>
        </ul>
      </div>

      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-icons">
          <img src="/assets/java.png" alt="Java" className="skill-icon" />
          <img src="/assets/kotlin.png" alt="Kotlin" className="skill-icon" />
          <img src="/assets/flutter.png" alt="Flutter" className="skill-icon" />
          <img src="/assets/react.svg" alt="React" className="skill-icon" />
          <img src="/assets/vite.svg" alt="Vite" className="skill-icon" />
          <img src="/assets/laravel.png" alt="Laravel" className="skill-icon" />
        </div>
      </div>
    </section>
  );
}

export default About;
