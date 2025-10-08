import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="fade-in-up" style={{ marginBottom: '1.5rem' }}>
            <img 
              src="/images/fivesquared-dark-medium-text.png" 
              alt="Five Squared Interactive" 
              style={{
                maxWidth: '400px',
                width: '100%',
                height: 'auto',
                filter: 'invert(1) brightness(2)'
              }}
            />
          </div>
          <p className="fade-in-up">
            Building the future of spatial computing:
            <br />
            <b>Open, Modular, & Creator-First</b>
          </p>
        </div>
      </section>

      {/* Web Wide Worlds Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 text-center">
            <div>
              <h2>Introducing Web Wide Worlds</h2>
              <h4>A modular framework for building persistent, interoperable digital worlds</h4>
              <Link to="/webwideworlds" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div>
              <img 
                src="/images/webwideworlds-ecosystem.png"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '1rem'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Web Wide Worlds Ecosystem</h2>
          </div>
          
          <div className="product-grid">
            <div className="product-card">
              <div className="product-card-header">
                <h3>WebVerse</h3>
                <p>A browser for exploring digital worlds</p>
              </div>
              <div className="product-card-body">
                <p>
                  Explore modular worlds with a desktop runtime built for immersion and extensibility.
                </p>
                <a href="https://webverse.fivesqd.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Try WebVerse
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-header">
                <h3>Aurelia</h3>
                <p>An explorable planet for creation and collaboration</p>
              </div>
              <div className="product-card-body">
                <p>
                  Dig, build, and script across a fully modifiable planet with limitless possibilities.
                </p>
                <a href="https://aurelia.worldhub.me" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit Aurelia
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-header">
                <h3>WorldOS</h3>
                <p>Modular server framework for persistent digital worlds</p>
              </div>
              <div className="product-card-body">
                <p>
                  Flexible, scalable, and built to power your custom digital worlds.
                </p>
                <Link to="/worldos" className="btn btn-primary">
                  Discover WorldOS
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-header">
                <h3>WorldSync</h3>
                <p>Lightweight, modular protocol for real-time synchronization</p>
              </div>
              <div className="product-card-body">
                <p>
                  Integrates with WorldOS to synchronize entities and behaviors across your worlds.
                </p>
                <Link to="/worldsync" className="btn btn-primary">
                  Explore WorldSync
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="features">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What We Do</h2>
            <p>
              We design interoperable frameworks for digital worlds, immersive storytelling, and collaborative
              exploration. Our tools empower developers, artists, and ordinary people to build persistent 3D spaces
              using open standards and remixable architectures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
