import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>My Website</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Package">Package</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;
