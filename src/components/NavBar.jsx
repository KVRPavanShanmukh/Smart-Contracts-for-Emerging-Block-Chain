import "../styles/App.css";
import logo from "../assets/logo.mp4";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <video className="logo" autoPlay loop muted playsInline>
          <source src={logo} type="video/mp4" />
        </video>
        <span className="brand">CRYPLET</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Docs</li>
        <li>Whitepaper</li>
      </ul>
      <button className="wallet-btn">Connect Wallet</button>
    </nav>
  );
}

export default NavBar;
