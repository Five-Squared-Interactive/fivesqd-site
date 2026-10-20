import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS_MENU = [
  { icon: '/images/icon-webverse.png', name: 'WebVerse', desc: 'The client', to: '/products#webverse' },
  { icon: '/images/icon-worldhub.png', name: 'WorldHub', desc: 'Hosting, sign-in, a directory', to: '/products/worldhub' },
  { icon: '/images/icon-worldkit.png', name: 'WorldKit', desc: 'The Blender add-on', to: '/products#worldkit' },
  { icon: '/images/WorldOSLogo.webp', name: 'WorldOS', desc: 'A world with its own logic', to: '/technology#worldos' },
];

const TECH_MENU = [
  { name: 'How it works', desc: 'A world is a document at a URL', to: '/technology' },
  { name: 'VEML', desc: 'The format', to: '/technology#veml' },
  { name: 'WorldSync', desc: 'Being there together', to: '/technology#worldsync' },
  { name: 'WorldOS', desc: 'The runtime', to: '/technology#worldos' },
  { name: 'White paper', desc: 'The long form (2025)', href: '/docs/www_whitepaper_v1.1.pdf', external: true },
];

const DropdownItem = ({ item, onClose }) => {
  const Tag = item.external ? 'a' : Link;
  const props = item.external
    ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: item.to };

  return (
    <Tag className="dropdown-item" onClick={onClose} role="menuitem" {...props}>
      {item.icon && <img src={item.icon} alt="" className="dropdown-item-icon" width="32" height="32" />}
      <div>
        <span className="dropdown-item-name">
          {item.name}
          {item.comingSoon && <span className="dropdown-soon">Soon</span>}
          {item.external && (
            <svg className="dropdown-external-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4.5 1.5H10.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 1.5L1.5 10.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="dropdown-item-desc">{item.desc}</span>
      </div>
    </Tag>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const validThemes = ['light', 'dark'];
    const theme = validThemes.includes(stored) ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    if (!stored) localStorage.setItem('theme', theme);
  }, []);

  const handleEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  }, []);

  // Escape key closes dropdown or mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (openDropdown) {
          setOpenDropdown(null);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
          toggleRef.current?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openDropdown, isMenuOpen]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand" onClick={closeAll}>
            <img
              src="/images/fivesquared-gradient.png"
              alt="Five Squared Interactive"
              width="36"
              height="36"
              style={{ display: 'block', borderRadius: '8px' }}
            />
          </Link>

          <ul id="navbar-menu" className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            <li
              className="navbar-dropdown-wrapper"
              onMouseEnter={() => handleEnter('products')}
              onMouseLeave={handleLeave}
            >
              <div className="navbar-link-row">
                <Link to="/products" onClick={closeAll}>What we make</Link>
                <button
                  className="dropdown-chevron"
                  onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
                  aria-label="Expand What we make menu"
                  aria-expanded={openDropdown === 'products'}
                  aria-haspopup="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6l4 4 4-4" />
                  </svg>
                </button>
              </div>
              <div className={`navbar-dropdown ${openDropdown === 'products' ? 'open' : ''}`} role="menu">
                <div className="dropdown-grid">
                  {PRODUCTS_MENU.map((item) => (
                    <DropdownItem key={item.name} item={item} onClose={closeAll} />
                  ))}
                </div>
                <div className="dropdown-footer">
                  <Link to="/products" onClick={closeAll}>Everything we make &rarr;</Link>
                </div>
              </div>
            </li>
            <li
              className="navbar-dropdown-wrapper"
              onMouseEnter={() => handleEnter('technology')}
              onMouseLeave={handleLeave}
            >
              <div className="navbar-link-row">
                <Link to="/technology" onClick={closeAll}>How it works</Link>
                <button
                  className="dropdown-chevron"
                  onClick={() => setOpenDropdown(openDropdown === 'technology' ? null : 'technology')}
                  aria-label="Expand How it works menu"
                  aria-expanded={openDropdown === 'technology'}
                  aria-haspopup="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6l4 4 4-4" />
                  </svg>
                </button>
              </div>
              <div className={`navbar-dropdown ${openDropdown === 'technology' ? 'open' : ''}`} role="menu">
                <div className="dropdown-grid dropdown-grid-narrow">
                  {TECH_MENU.map((item) => (
                    <DropdownItem key={item.name} item={item} onClose={closeAll} />
                  ))}
                </div>
                <div className="dropdown-footer">
                  <a href="https://github.com/Five-Squared-Interactive" target="_blank" rel="noopener noreferrer" onClick={closeAll}>
                    View all repos on GitHub &rarr;
                  </a>
                </div>
              </div>
            </li>
            <li><Link to="/first-world" onClick={closeAll}>Your first world</Link></li>
            <li><Link to="/ecosystem" onClick={closeAll}>Build on it</Link></li>
            <li><Link to="/about" onClick={closeAll}>About</Link></li>
          </ul>

          <button
            ref={toggleRef}
            className="navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
