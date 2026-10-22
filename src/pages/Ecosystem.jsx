import React from 'react';
import { Link } from 'react-router-dom';
import { GITHUB_ORG, CONTACT_EMAIL } from '../links';

// Build on it. The words are content/build-on-it.md; keep the two in step.
const Ecosystem = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="page-head">
        <div className="container">
          <h1>Build on it</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Everything that opens, moves or syncs a world is open under MIT, with the current
            generation's public release being prepared, and the format is written down as a
            specification with a conformance suite.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Three ways in</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Make worlds</h3>
              <p>
                You have a scene and someone to show it to. Install the Blender add-on, press Save and
                Publish, send the link. Then add <code>/index.veml</code> to the address and see how
                little the world is; it is text you can read.
              </p>
              <Link to="/first-world">Your first world &rarr;</Link>
            </div>
            <div className="card">
              <h3>Put your own things in a world</h3>
              <p>
                You have models, data, a game, a simulation. A world's document can load your glTF,
                script behaviour in JavaScript inside the client's sandbox, and link to anything at a
                URL. A world that keeps a score or listens to a sensor can run on WorldOS, with plugins
                that talk to the systems you already have.
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
              <Link to="/technology">How it works &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Where to start</h2>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
            <li>
              The format: VEML. The 4.0 specification and its conformance suite are being prepared
              for publication; the earlier documents are on GitHub.
            </li>
            <li>The client: WebVerse, and StraightFour under it. Public release in preparation.</li>
            <li>
              Being together: WorldSync, designed so an engine you already use can adopt it. The
              protocol document is being prepared for publication.
            </li>
            <li>A world with its own logic: WorldOS.</li>
            <li>
              The earlier generation of all of it:{' '}
              <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer">github.com/Five-Squared-Interactive</a>
            </li>
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
