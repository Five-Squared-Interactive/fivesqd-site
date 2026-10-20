import React from 'react';
import { Link } from 'react-router-dom';
import WorldDocument from '../components/WorldDocument';
import { DEMO_WORLD_URL, GITHUB_ORG, WORLD_HERO, WORLD_CARD, WORLD_HERO_ALT } from '../links';

// The words are content/home.md; keep the two in step.
const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image hero-world" style={{ backgroundImage: `url(${WORLD_HERO})` }}>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>A world is a web page.</h1>
          <p style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '680px', margin: '0 auto 2rem' }}>
            A document at an address you own. Open it in a browser and walk around, with other
            people, on a phone, a laptop or a headset. Nothing to install. One way to make one:
            export a scene from Blender and press Save and Publish.
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
          <p className="hero-caption">The Overlook, a world opened in the client.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>The whole world, and the whole document</h2>
            <p className="section-subtitle">
              Everything the world on the left is made of is the text on the right.
            </p>
          </div>
          <div className="world-pair">
            <figure className="world-frame">
              <img src={WORLD_CARD} alt={WORLD_HERO_ALT} width="800" height="426" loading="lazy" />
              <figcaption>A world, opened in a browser.</figcaption>
            </figure>
            <WorldDocument caption="Its document: a title, a sky, where you start, the model it loads. The model is a standard glTF file. There is nothing else." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What makes it a page, not an upload</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-glyph" aria-hidden="true">&lt;/&gt;</div>
              <h3>You can read it.</h3>
              <p>
                Add <code>/index.veml</code> to any published world's address and the document opens
                as text. It is short, and every line means something you can see.
              </p>
            </div>
            <div className="card">
              <div className="card-glyph" aria-hidden="true">⇄</div>
              <h3>It links to other worlds.</h3>
              <p>
                A door, a sign or a frame in your scene can open onto another world's address, the
                way one page links to the next. In Blender, a link is a field on the object.
              </p>
            </div>
            <div className="card">
              <div className="card-glyph" aria-hidden="true">▤</div>
              <h3>It is files at an address.</h3>
              <p>
                A world is a folder of plain files served like any web page: no server of yours, no
                database, no account to visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
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
          <p className="text-center" style={{ marginTop: '1.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Worlds published this way are hosted by WorldHub; the world is a document, and you
            choose who may enter.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Who this is for</h2>
              <p>
                For anyone with a scene and someone to show it to: a room you modelled, a building, a
                place that no longer exists, a toy. For a group that wants a room of its own on the
                web. For developers who want an open 3D document format, an MIT-licensed client, and a
                sync layer that works with the engine they already have.
              </p>
            </div>
            <div>
              <h2>Open</h2>
              <p>
                The format (VEML), the client (WebVerse), the engine under it (StraightFour), the sync
                layer (WorldSync) and the runtime for worlds with their own logic (WorldOS) are
                MIT-licensed. The public release of the current generation is being prepared; the
                earlier generation is on GitHub. Hosting is a convenience we offer, never a
                requirement.
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
