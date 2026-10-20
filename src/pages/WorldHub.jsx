import React from 'react';
import { Link } from 'react-router-dom';
import { WORLD_HERO } from '../links';

// The words are content/worldhub.md; keep the two in step.
const WorldHub = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image hero-world hero-inner" style={{ backgroundImage: `url(${WORLD_HERO})` }}>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>WorldHub</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '680px', margin: '0 auto' }}>
            The service that hosts what you publish and signs you in. Run by Five Squared
            Interactive.
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
                Press Save and Publish in Blender and the world is served at{' '}
                <code>worlds.worldhub.me/w/…</code>, with nothing for you to set up. Publish again
                and the same link shows the new version.
              </p>
            </div>
            <div className="card">
              <h3>Signs you in</h3>
              <p>
                WorldHub ID is the sign-in the add-on and the sites use: Google, GitHub, or a link we
                email you. A world you publish can be open to everyone or only to the people you
                allow; visitors who are signed in appear in a world under their own names.
              </p>
            </div>
            <div className="card">
              <h3>Will list worlds</h3>
              <p>
                A directory of worlds people choose to list, at any address, ours or not, is coming
                to www.worldhub.me. A listing is a link; the world stays where it is.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What it is not</h2>
          <p>
            It is not needed to visit a world, and a world at any other address opens without it. It
            does not decide what a world may contain or do. It is the easy path, not the only one.
          </p>
          <h2 style={{ marginTop: '2.5rem' }}>Cost</h2>
          <p>Publishing from Blender and visiting are free.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/first-world" className="btn btn-primary">Publish your first world</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldHub;
