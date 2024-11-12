import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="home" spy={true} smooth={false} duration={250} activeClass="active">Home</Link></li>
        <li><Link to="projects" spy={true} smooth={false} duration={250} activeClass="active">Projects</Link></li>
        <li><Link to="about" spy={true} smooth={false} duration={250} activeClass="active">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;