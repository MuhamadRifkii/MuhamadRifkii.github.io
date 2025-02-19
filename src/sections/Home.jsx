import { TypeAnimation } from "react-type-animation";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <div className="text">
          <h1>Hello! My name is Muhamad Rifqi</h1>
          <TypeAnimation
            sequence={[
              "Welcome to my Website!",
              2500,
              "I'm a Web Developer",
              1000,
              "I'm a Mobile Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
