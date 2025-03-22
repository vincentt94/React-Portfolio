import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // new CSS file for header-specific styles

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <header className="custom-header">
      <div className="header-container">
        <span className="logo">Vincent T</span>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={currentPage === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</Link>
            </li>
            <li>
              <Link to="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</Link>
            </li>
            <li>
              <Link to="/resume" className={currentPage === '/resume' ? 'active' : ''}>Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
