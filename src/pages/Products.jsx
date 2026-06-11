import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>Products</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto' }}>
            Open tools for creating, exploring, and hosting digital worlds.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="product-grid">
            {/* WebVerse */}
            <div className="product-card">
              <div className="product-card-header product-card-header-image" style={{ backgroundImage: 'url(/images/webverse-hero.webp)' }}>
                <img src="/images/icon-webverse.png" alt="WebVerse" className="product-card-icon" />
                <h3>WebVerse</h3>
                <p>The world browser</p>
              </div>
              <div className="product-card-body">
                <p>
                  A desktop and web client for exploring digital worlds. Load any world via URL — like a web browser, but for 3D spaces.
                </p>
                <div className="product-card-links">
                  <a href="https://webverse.fivesqd.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Get WebVerse</a>
                  <a href="https://github.com/Five-Squared-Interactive/WebVerse" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
            </div>

            {/* WorldHub */}
            <div className="product-card">
              <div className="product-card-header product-card-header-image" style={{ backgroundImage: 'url(/images/worldhub-hero.png)' }}>
                <img src="/images/icon-worldhub.png" alt="WorldHub" className="product-card-icon" />
                <h3>WorldHub</h3>
                <p>Managed world hosting</p>
              </div>
              <div className="product-card-body">
                <p>
                  Host, manage, and share your worlds with zero infrastructure. Persistent storage, user management, and discovery built in.
                </p>
                <div className="product-card-links">
                  <a href="https://worldhub.me" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Visit WorldHub</a>
                </div>
              </div>
            </div>

            {/* WorldKit */}
            <div className="product-card">
              <div className="product-card-header product-card-header-image" style={{ backgroundImage: 'url(/images/worldkit-hero.webp)' }}>
                <img src="/images/icon-worldkit.png" alt="WorldKit" className="product-card-icon" />
                <h3>WorldKit</h3>
                <p>Developer tooling</p>
              </div>
              <div className="product-card-body">
                <p>
                  The developer toolchain for building worlds. World Builder, WorldOS, WorldSync, and starter templates.
                </p>
                <div className="product-card-links">
                  <Link to="/products/worldkit" className="btn btn-primary btn-sm">Learn More</Link>
                  <a href="https://github.com/Five-Squared-Interactive/WorldKit-World-Builder/releases" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Download</a>
                </div>
              </div>
            </div>

            {/* Git Worlds */}
            <div className="product-card">
              <div className="product-card-header product-card-header-image" style={{ backgroundImage: 'url(/images/gitworlds-hero.webp)' }}>
                <img src="/images/icon-gitworlds.png" alt="Git Worlds" className="product-card-icon" />
                <h3>Git Worlds</h3>
                <p>Forkable starter worlds</p>
              </div>
              <div className="product-card-body">
                <p>
                  Template worlds you can fork, remix, and deploy. Version-controlled, collaborative, open.
                </p>
                <div className="product-card-links">
                  <Link to="/products/gitworlds" className="btn btn-primary btn-sm">Get Started</Link>
                  <a href="https://github.com/Five-Squared-Interactive/GitWorld-Starter" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
            </div>

            {/* WorldOS */}
            <div className="product-card">
              <div className="product-card-header product-card-header-image" style={{ backgroundImage: 'url(/images/worldos-hero.webp)' }}>
                <img src="/images/icon-worldos.png" alt="WorldOS" className="product-card-icon" />
                <h3>WorldOS</h3>
                <p>Server framework</p>
              </div>
              <div className="product-card-body">
                <p>
                  A modular runtime that manages execution and coordination between applications inside and across worlds.
                </p>
                <div className="product-card-links">
                  <Link to="/products/worldkit#worldos" className="btn btn-primary btn-sm">Learn More</Link>
                  <a href="https://github.com/Five-Squared-Interactive/WorldOS" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
