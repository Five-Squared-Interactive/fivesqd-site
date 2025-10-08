import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <img 
              src="/images/fivesquared-dark-medium.png" 
              alt="Five Squared Interactive" 
              style={{
                height: '40px',
                width: 'auto',
                display: 'block'
              }}
            />
          </Link>
          
          <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/webwideworlds" onClick={() => setIsMenuOpen(false)}>Web Wide Worlds</Link></li>
            <li><a href="https://webverse.fivesqd.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>WebVerse</a></li>
            <li><a href="https://aurelia.worldhub.me" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Aurelia</a></li>
            <li><Link to="/worldos" onClick={() => setIsMenuOpen(false)}>WorldOS</Link></li>
            <li><Link to="/worldsync" onClick={() => setIsMenuOpen(false)}>WorldSync</Link></li>
          </ul>

          <button 
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
