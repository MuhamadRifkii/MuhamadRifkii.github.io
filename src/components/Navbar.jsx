import { Link } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" spy={true} duration={250} activeClass="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} duration={250} activeClass="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} duration={250} activeClass="active">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
