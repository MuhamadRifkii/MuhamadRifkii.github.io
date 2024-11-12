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
              500,
              "I'm a Web Developer",
              500,
              "I'm a Mobile Developer",
              500,
            ]}
            wrapper="span"
            speed={250}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
