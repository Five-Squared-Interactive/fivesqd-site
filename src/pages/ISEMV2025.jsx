import React from 'react';

function ISEMV2025() {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="fade-in-up" style={{ marginBottom: '1.5rem' }}>
            Thank you for your interest in Web Wide Worlds
          </div>
          <p className="fade-in-up">
            We're excited to work with you in building an open metaverse
            <br />
            <b>One shaped by creators, powered by modular tools, & driven by shared standards</b>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'left', display: 'grid', gap: '1.5rem' }}>
              <div className="action-item">
                <h3>Explore the Sample World</h3>
                <p>Jump into the world we built together during the session.</p>
                <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                  <img 
                    src="/images/isemvdemoworld.png" 
                    alt="ISEMV Demo World" 
                    style={{
                      maxWidth: '75%',
                      height: 'auto',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                <a href="/isemvdemo" className="action-link"><strong>Launch Sample World →</strong></a>
              </div>

              <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />

              <div className="action-item">
                <h3>Share Your Thoughts</h3>
                <p>Do you have ideas? Let's get in touch!</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNPzvIPQJlYUNCf9jREntSnDTWyE3EOegf1Yz0yGOD_HTosQ/viewform?usp=header" className="action-link"><strong>Take the Survey →</strong></a>
              </div>

              <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />

              <div className="action-item">
                <h3>Check Out More Worlds</h3>
                <p>Browse other sample environments built with Web Wide Worlds.</p>
                <a href="https://webverse.info/webverseapp.html" className="action-link"><strong>Explore Sample Worlds →</strong></a>
              </div>

              <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />

              <div className="action-item">
                <h3>Visit Aurelia</h3>
                <p>A planet-scale world with deformable terrain, custom building blocks, and limitless scripted behaviors.</p>
                <a href="https://aurelia.worldhub.me" target="_blank" rel="noopener noreferrer" className="action-link">
                  <strong>Explore Aurelia →</strong>
                </a>
              </div>

              <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />

              <div className="action-item">
                <h3>Learn About Web Wide Worlds</h3>
                <p>Dive into the architecture, philosophy, and tools behind the ecosystem.</p>
                <a href="/webwideworlds" className="action-link"><strong>Web Wide Worlds Overview →</strong></a>
              </div>

              <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />

              <div className="action-item">
                <h3>Stay Connected</h3>
                <p>Want updates, collaboration invites, or early access to new tools?</p>
                <a href="https://discord.gg/6VZYdjHvSF" className="action-link"><strong>Join the Web Wide Worlds Discord →</strong></a>
                <br />
                <span>Or reach out directly: </span>
                <a href="mailto:dylan@fivesqd.com" className="action-link"><strong>Contact Dylan →</strong></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ISEMV2025;