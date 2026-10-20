import React from 'react';
import { Link } from 'react-router-dom';

// The words are content/worldhub.md; keep the two in step.
const WorldHub = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>WorldHub</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '680px', margin: '0 auto' }}>
            The service that hosts what you publish, signs you in, and lists what you want found.
            Run by Five Squared Interactive.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What it does</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Hosts your published worlds</h3>
              <p>
                Press Save as My World in Blender and the world is served at{' '}
                <code>worlds.worldhub.me/w/…</code>, with nothing for you to set up. Publish again
                and the same link shows the new version.
              </p>
            </div>
            <div className="card">
              <h3>Signs you in</h3>
              <p>
                WorldHub ID is the sign-in the add-on and the sites use: Google, GitHub, or a link we
                email you. Visitors who are signed in appear in a world under their own names.
              </p>
            </div>
            <div className="card">
              <h3>Lists worlds</h3>
              <p>
                Search at <a href="https://www.worldhub.me" target="_blank" rel="noopener noreferrer">www.worldhub.me</a>{' '}
                is a directory of worlds people have chosen to list, at any address, ours or not. A
                listing is a link; the world stays where it is.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What it does not do</h2>
          <p>
            It does not hold your world. A published world is a folder you can download and put
            anywhere, and the link to a world at your own address goes straight to it; WorldHub is not
            in the way. It does not decide what a world may contain or do. It is not needed to visit,
            to make, or to share a world. It is the easy path, not the only one.
          </p>
          <h2 style={{ marginTop: '2.5rem' }}>Cost</h2>
          <p>
            Publishing from Blender and visiting are free. There is no paid tier to announce; when
            hosting at scale has a price, it will be here.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link to="/first-world" className="btn btn-primary">Publish your first world</Link>
            <a href="https://id.worldhub.me" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">WorldHub ID</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldHub;
