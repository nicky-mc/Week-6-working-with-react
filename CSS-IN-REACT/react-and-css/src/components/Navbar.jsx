import "./Navbar.css"; // Make sure to create this CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg"
        alt="Logo"
        className="navbar-logo"
      />
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
