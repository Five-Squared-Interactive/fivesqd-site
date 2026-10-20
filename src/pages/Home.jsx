import React from 'react';
import { Link } from 'react-router-dom';
import { DEMO_WORLD_URL, GITHUB_ORG } from '../links';

// The words are content/home.md; keep the two in step.
const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>A world is a web page.</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '680px', margin: '0 auto 2rem' }}>
            Export a scene from Blender and get a link. Anyone opens it in a browser and walks
            around, with you, on a phone or a laptop. Nothing to install, no account to visit.
          </p>
          <div className="hero-actions">
            {DEMO_WORLD_URL && (
              <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                Walk into one
              </a>
            )}
            <Link to="/first-world" className={`btn ${DEMO_WORLD_URL ? 'btn-secondary' : 'btn-primary'} btn-large`}>
              Make your own
            </Link>
          </div>
          {DEMO_WORLD_URL && (
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', marginTop: '1rem' }}>
              The demo is a living room exported from a Blender file. The link is the world.
            </p>
          )}
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What makes it a page, not an upload</h2>
            <p className="section-subtitle">Three things you can check on any published world.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>It is text you can read and change.</h3>
              <p>
                Open the document behind a world and you will find a short file: a title, where you
                start, the light, the model it loads. Change a line and the world changes.
              </p>
            </div>
            <div className="card">
              <h3>It links to any other world.</h3>
              <p>
                A door in one world leads into another at a different address, the way one page links
                to the next. Your room can open onto a friend's room, or onto a planet.
              </p>
            </div>
            <div className="card">
              <h3>It runs anywhere you put the files.</h3>
              <p>
                The world is a folder. Download it and put it on any web host, and the link works from
                there. No server of ours is needed to open it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Make one in five minutes</h2>
          </div>
          <div className="gradient-steps">
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">1</div>
              <h3>Install</h3>
              <p>Install the add-on in Blender 4.5 or newer and sign in once.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">2</div>
              <h3>Publish</h3>
              <p>Press Save as My World. Your world opens in the browser.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">3</div>
              <h3>Share</h3>
              <p>Send the link. People walk in on a phone or a laptop; nothing to install.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/first-world" className="btn btn-primary">The first-world guide</Link>
          </div>
          <p className="text-center" style={{ marginTop: '1.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Worlds you publish this way are hosted for you by WorldHub, and remain yours to download
            and move.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Who this is for</h2>
              <p>
                For anyone with a scene and someone to show it to: a room you modelled, a building, a
                place that no longer exists, a toy. For a group that wants a room of its own on the
                web. For developers who want a 3D document format that is open, a client that is
                MIT-licensed, and a sync layer that works with the engine they already have.
              </p>
            </div>
            <div>
              <h2>Everything is open</h2>
              <p>
                The format (VEML), the client (WebVerse), the engine under it (StraightFour), the sync
                layer (WorldSync) and the runtime for worlds that need a server (WorldOS) are
                MIT-licensed. Hosting is a convenience we offer, never a requirement.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/technology" className="btn btn-secondary">How it works</Link>
                <Link to="/ecosystem" className="btn btn-secondary">Build on it</Link>
                <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
