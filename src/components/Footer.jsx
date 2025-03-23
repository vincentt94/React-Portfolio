// import '../app.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay" />
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Vincent T</p>
        <div className="footer-links">
          <a href="https://github.com/vincentt94" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vincent-t-5ba8621b5/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://vincentt94.github.io/" target="_blank" rel="noreferrer">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
