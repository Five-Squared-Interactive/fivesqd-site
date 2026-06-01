import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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
                display: 'block',
                filter: theme === 'dark' ? 'invert(1) brightness(2)' : 'none'
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
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

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
