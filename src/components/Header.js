import './Header.css';

const Header = () => (
  <header className="navbar">
    <h1> Math Magicians </h1>
    <div className="links">
      <a href="/" className="link-item">
        Home
      </a>
      <a href="/calculator" className="link-item">
        Calculator
      </a>
      <a href="/quote" className="link-item">
        Quote
      </a>
    </div>
  </header>
);

export default Header;
