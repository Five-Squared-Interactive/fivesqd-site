import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Hero */}
      <section className="section-hero-image">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>About Five Squared Interactive</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '650px', margin: '0 auto' }}>
            Building core, MIT-licensed products for an open ecosystem of 3D worlds on the open web.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>The Mission</h2>
              <p>
                Five Squared Interactive builds the infrastructure for Web Wide Worlds — an open ecosystem
                where 3D worlds work like websites. Defined in markup, hosted at URLs, opened from a headset,
                phone, PC, or browser.
              </p>
              <p>
                We don't gatekeep the ecosystem. Everything is open-source and standards-based.
                Anyone can build worlds, tools, or their own infrastructure and take part on equal footing.
                No permission required.
              </p>
            </div>
            <div>
              <h2>What We Build</h2>
              <p>
                The ecosystem has tools for creators at every skill level. <strong>WebVerse</strong> is
                an open world browser that shares any world with a click. <strong>WorldHub</strong> lets
                non-technical creators build and share worlds without writing code. <strong>WorldKit</strong> gives
                developers full control of their own infrastructure.
              </p>
              <p>
                Every layer is open-source and MIT-licensed. WorldHub provides managed hosting
                so you don't have to run your own servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="section section-light">
        <div className="container text-center">
          <h2>Open Source First</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem' }}>
            Everything is open and standards-based. Anyone can build worlds, tools, or their own
            infrastructure. The entire stack is MIT-licensed and designed to be extended, replaced,
            or reimagined.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/Five-Squared-Interactive" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GitHub
            </a>
            <Link to="/products" className="btn btn-secondary">
              See Products
            </Link>
            <a href="mailto:info@fivesquaredinteractive.com" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
