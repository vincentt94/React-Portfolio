import { Link, useLocation } from 'react-router-dom';
import '../pages/Home.css';
function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex justify-content-between">
                {/*This span will hold my name */}
                <span className = "navbar-brand fw-bold"> Vincent T</span>
                <ul className="nav nav-tabs ms-auto">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/resume"
                            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
                            {/* Footer section*/}
            <footer className="footer mt-5">
                <div className="container text-center">
                    <a href="https://github.com/vincentt94" className="footer-link" target="_blank" >Portfolio</a>
                    <a href="https://www.linkedin.com/in/vincent-t-5ba8621b5/" className="footer-link" target="_blank" >LinkedIn</a>
                    <a href="https://github.com/vincentt94" className="footer-link" target="_blank" >GitHub</a>
                </div>
            </footer>

            </div>
        </nav>
    );
}


export default NavTabs;