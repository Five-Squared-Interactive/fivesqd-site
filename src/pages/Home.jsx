import React from 'react';
import { Link } from 'react-router-dom';
import WorldDocument from '../components/WorldDocument';
import WebPageAnalogy from '../components/WebPageAnalogy';
import LinkFlow from '../components/LinkFlow';
import DoorDiagram from '../components/DoorDiagram';
import { DEMO_WORLD_URL, GITHUB_ORG, WORLD_HERO, WORLD_CARD, WORLD_HERO_ALT } from '../links';

// A frame of a world that opens the world itself on a click, in a new tab.
// Not an iframe: the client's host refuses to be framed from another
// origin (X-Frame-Options: SAMEORIGIN), so an inline embed waits on that
// header changing. Rendered only when a public demo world exists.
const WalkIn = ({ url, poster, alt }) => (
  <a className="walkin walkin-poster" style={{ backgroundImage: `url(${poster})` }} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Walk into ${alt}, in a new tab`}>
    <span>Walk in</span>
  </a>
);

// The words are content/home.md; keep the two in step.
const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image hero-world" style={{ backgroundImage: `url(${WORLD_HERO})` }}>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>A world is a web page.</h1>
          <p className="hero-lead">
            A document at an address you own, opened in a browser. Walk around in it with other
            people, on a phone, a laptop or a headset. Nothing to install.
          </p>
          <div className="hero-actions">
            {DEMO_WORLD_URL && (
              <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                Walk into one
              </a>
            )}
            <Link to="/first-world" className={`btn ${DEMO_WORLD_URL ? 'btn-secondary' : 'btn-primary'} btn-large`}>
              Make your own from Blender
            </Link>
            {!DEMO_WORLD_URL && <a href="#document" className="hero-scroll">See what a world is made of</a>}
          </div>
          <p className="hero-caption">The Overlook, a world opened in the client.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>The same parts as the web</h2>
            <p className="section-subtitle">Each part of a world is the part of a web page it stands in for.</p>
          </div>
          <WebPageAnalogy />
        </div>
      </section>

      <section className="section" id="document">
        <div className="container">
          <div className="text-center mb-4">
            <h2>A world, and a world's whole document</h2>
            <p className="section-subtitle">
              Every published world is a document like this one. It fits on a screen, and five parts do the work.
            </p>
          </div>
          <div className="world-pair">
            <figure className="world-frame">
              {DEMO_WORLD_URL
                ? <WalkIn url={DEMO_WORLD_URL} poster={WORLD_CARD} alt={WORLD_HERO_ALT} />
                : <img src={WORLD_CARD} alt={WORLD_HERO_ALT} width="800" height="426" loading="lazy" />}
              <figcaption>The Overlook, a world opened in a browser.</figcaption>
            </figure>
            <WorldDocument caption="The document of another world, a living room, exactly as Blender published it: 923 bytes, plus the two files it names, one model and one sky image." />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>How a link works</h2>
            <p className="section-subtitle">A scene becomes a folder. The folder gets an address. The address opens anywhere.</p>
          </div>
          <LinkFlow />
          <div className="text-center mb-4" style={{ marginTop: '3rem' }}>
            <h3>And worlds link to worlds</h3>
            <p className="section-subtitle">Your room can open onto a friend's. Each stays at its own address.</p>
          </div>
          <DoorDiagram />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Make one</h2>
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
              <p>In the Save as My World box, press Save and Publish. Your world opens in the browser.</p>
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
          <p className="section-pair-note">
            Worlds published this way are hosted by WorldHub; the world is a document, and you
            choose who may enter.
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
                web. For developers who want an open 3D document format, an open client, and a sync
                layer designed so the engine they already have can adopt it.
              </p>
            </div>
            <div>
              <h2>Open</h2>
              <p>
                The format (VEML), the client (WebVerse), the engine under it (StraightFour), the sync
                layer (WorldSync) and the runtime for worlds with their own logic (WorldOS) are
                MIT-licensed. The public release of the current generation is being prepared; the
                earlier generation is on GitHub. Hosting is a convenience we
                offer; the design never requires it.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/technology" className="btn btn-secondary">How it works</Link>
                <Link to="/ecosystem" className="btn btn-secondary">Build on it</Link>
                <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Earlier generation on GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
