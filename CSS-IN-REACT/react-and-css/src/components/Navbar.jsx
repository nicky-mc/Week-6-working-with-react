export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/images/airbnb-logo.png" alt="Airbnb logo" />
      </div>
      <div className="navbar__links">
        <a href="#top">Home</a>
        <a href="#top">/About</a>
        <a href="#tickets">/Tickets</a>
      </div>
    </nav>
  );
}
