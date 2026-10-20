import React from 'react';
import { Link } from 'react-router-dom';
import { WHITE_PAPER } from '../links';

// How it works. The words are content/how-it-works.md; keep the two in step.
const Technology = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>How it works</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto' }}>
            A world is a document at a URL, the way a web page is. The pieces below are what open
            it, move it and keep it in sync. Most worlds need the first two and nothing else.
          </p>
        </div>
      </section>

      <section className="section section-light" id="veml">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>The document</h2>
          <p>
            A world is a folder: one file in <strong>VEML</strong>, a small XML format that says what
            is in the world and where, plus the models it refers to, in glTF, the standard 3D file
            format. That is the whole world. A line of VEML names the sky; another names the model;
            another says where a visitor starts; another links to a different world. Anything a
            client does not understand it ignores, so a world written for next year's client still
            opens in this year's.
          </p>
          <p>
            Because the world is files, it has no server of its own. It is served the way a web page
            is served: by any web host, through the same URLs, the same DNS, the same caching. If you
            can put a folder on the web, you can host a world.
          </p>
        </div>
      </section>

      <section className="section" id="client">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>The client</h2>
          <p>
            <strong>WebVerse</strong> is the client: a web page that loads the engine and opens the
            world at the address in its URL. The browser supplies the rest: the back button, history,
            bookmarks, the address bar. It runs on a phone and a laptop alike, and it is what a
            published world's link opens.
          </p>
          <p>
            Under the client is <strong>StraightFour</strong>, the engine: rendering, loading,
            physics, the scripting sandbox. It is a library the client links against; you only meet
            it if you build a client of your own.
          </p>
        </div>
      </section>

      <section className="section section-light" id="worldsync">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Being there together</h2>
          <p>
            When two people open the same world, their clients find each other and exchange what
            moved, through <strong>WorldSync</strong>. For most worlds that needs no server: the
            clients talk to each other directly, with a small introduction service to find each other
            and, where a network stands in the way, a relay that forwards bytes and knows nothing
            else. The world itself is unchanged; the files are still the source of truth.
          </p>
          <p id="worldos">
            A world that needs an authority, one that runs its own logic, keeps state no visitor
            owns, or talks to systems outside, can run on <strong>WorldOS</strong>, the runtime for
            that case. Most worlds do not need it, and a world that does is still a document at a
            URL; WorldOS is one more thing the document names.
          </p>
        </div>
      </section>

      <section className="section" id="worldkit">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Making worlds</h2>
          <p>
            <strong>WorldKit</strong> is the name for the tools that produce the files: today the
            Blender add-on, which exports a scene as a world and can publish it in one press. The
            export is one way: Blender stays the editor of the scene, the world is what it exports.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What this adds up to</h2>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
            <li>Nothing to install to visit. The link opens in a browser.</li>
            <li>
              Nothing of ours in the path from a link to a world. A world at your own address opens
              whether or not Five Squared exists.
            </li>
            <li>Zero cost at rest. An unvisited world is a folder.</li>
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
