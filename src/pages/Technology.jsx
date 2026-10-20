import React from 'react';
import { Link } from 'react-router-dom';
import WorldDocument from '../components/WorldDocument';
import { WHITE_PAPER, WORLD_HERO } from '../links';

// How it works. The words are content/how-it-works.md; keep the two in step.
const Technology = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image hero-world hero-inner" style={{ backgroundImage: `url(${WORLD_HERO})` }}>
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>How it works</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto' }}>
            A world is a document at a URL, the way a web page is. Four pieces open it, move it, and
            let people be in it together. A world that is only visited needs the first two.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="gradient-steps">
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">&lt;/&gt;</div>
              <h3>The document</h3>
              <p>A VEML file and its glTF models, in a folder, at an address.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">▣</div>
              <h3>The client</h3>
              <p>WebVerse, a web page that opens the document at the address in its URL.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">⇄</div>
              <h3>Together</h3>
              <p>WorldSync: the clients in a world exchange what moved.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">⚙</div>
              <h3>Its own logic</h3>
              <p>WorldOS, only for worlds that keep state no visitor owns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="veml">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>The document</h2>
              <p>
                A world is a folder: one file in <strong>VEML</strong>, a small XML format that says
                what is in the world and where, plus the models it refers to, in glTF, the standard
                3D file format. That is the whole world. A line of VEML names the sky; another names
                the model; another says where a visitor starts; another links to a different world.
                Anything a client does not understand it ignores, so a world written for next year's
                client still opens in this year's.
              </p>
              <p>
                Because the world is files, it has no server of its own. It is served the way a web
                page is served, through the same URLs, the same DNS, the same caching.
              </p>
            </div>
            <WorldDocument caption="A published world's whole document." />
          </div>
        </div>
      </section>

      <section className="section section-light" id="client">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>The client</h2>
          <p>
            <strong>WebVerse</strong> is the client: a web page that loads the engine and opens the
            world at the address in its URL. The browser supplies the rest: the back button, history,
            bookmarks, the address bar. It runs on a phone, a laptop and a headset's browser, and it
            is what a published world's link opens.
          </p>
          <p>
            Under the client is <strong>StraightFour</strong>, the engine: rendering, loading,
            physics, the scripting sandbox. You meet it only if you build a client of your own.
          </p>
        </div>
      </section>

      <section className="section" id="worldsync">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Being there together</h2>
          <p>
            When two people open the same world, their clients find each other and exchange what
            moved, through <strong>WorldSync</strong>. The clients talk to each other directly; a
            small introduction service, ours by default, only helps them find each other and holds
            nothing afterwards. The world itself is unchanged; the files are still the source of
            truth.
          </p>
        </div>
      </section>

      <section className="section section-light" id="worldos">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>A world with its own logic</h2>
          <p>
            Some worlds keep a score, run a simulation, reshape their terrain, or listen to a sensor:
            things no single visitor owns. Those run on <strong>WorldOS</strong>, a small runtime of
            plugins that the world's document names. Most worlds do not need it, and a world that
            does is still a document at a URL.
          </p>
        </div>
      </section>

      <section className="section" id="worldkit">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Making worlds</h2>
          <p>
            <strong>WorldKit</strong> is the name for the tools that produce the files: today the
            Blender add-on, which exports a scene as a world and publishes it in one press. The
            export is one way: Blender stays the editor of the scene, the world is what it exports.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What this adds up to</h2>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
            <li>Nothing to install to visit. The link opens in a browser.</li>
            <li>A world at its own address opens even if we disappear.</li>
            <li>An unvisited world costs nothing: it is a folder.</li>
            <li>Worlds link to worlds. The web's graph, in 3D.</li>
          </ul>
          <p>
            The long form is in the white paper (2025):{' '}
            <a href={WHITE_PAPER} target="_blank" rel="noopener noreferrer">Web Wide Worlds</a>. Some
            of its details predate the current client; the principles are the same.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link to="/first-world" className="btn btn-primary">Make a world</Link>
            <Link to="/ecosystem" className="btn btn-secondary">Build on it</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
