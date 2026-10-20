import React from 'react';
import { Link } from 'react-router-dom';
import { GITHUB_ORG, CONTACT_EMAIL } from '../links';

// Build on it. The words are content/build-on-it.md; keep the two in step.
const Ecosystem = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>Build on it</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto' }}>
            Everything that opens, moves or syncs a world is MIT-licensed, and the format is written
            down as a specification with a conformance suite. There are three ways in.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <h3>Make worlds</h3>
              <p>
                You have a scene and someone to show it to. Install the Blender add-on, press Save as
                My World, send the link. Then open the document behind the world and see how little it
                is; a world is text you can read and change.
              </p>
              <Link to="/first-world">Your first world &rarr;</Link>
            </div>
            <div className="card">
              <h3>Put your own things in a world</h3>
              <p>
                You have models, data, a game, a simulation. A world's document can load your glTF,
                script behaviour in JavaScript inside the client's sandbox, and link to anything at a
                URL. A world that needs a live authority can run on WorldOS, with plugins that talk to
                the systems you already have.
              </p>
              <Link to="/technology#worldos">WorldOS, in brief &rarr;</Link>
            </div>
            <div className="card">
              <h3>Build the pieces yourself</h3>
              <p>
                You want a different client, a different editor, a host, a sync service, a connector.
                The format is open, the client and engine are open, the sync layer is open and
                standalone, and nothing in a world's address points at us. Build what fits and it
                works with everything else.
              </p>
              <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer">The repositories &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Where to start</h2>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
            <li>
              The repositories:{' '}
              <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer">github.com/Five-Squared-Interactive</a>
            </li>
            <li>
              The format: VEML (the 4.0 specification and its conformance suite are being prepared
              for publication; the earlier documents are on GitHub)
            </li>
            <li>The client: WebVerse, and StraightFour under it</li>
            <li>Sync: WorldSync; runtime: WorldOS</li>
          </ul>
          <p>
            Ask us anything: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
