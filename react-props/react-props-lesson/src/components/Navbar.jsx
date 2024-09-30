export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="react-props/react-props-lesson/public/SpaceY.jpeg"
          alt="spaceY logo"
          height="50px"
        />
      </div>
      <div className="navbar-links">
        <a href="#top">Home</a>
        <a href="#top">/About</a>
        <a href="#tickets">/Tickets</a>
        <a href="#tickets">/Read More</a>
        <a href="#pricing">/Pricing</a>
      </div>
    </nav>
  );
}
