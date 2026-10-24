import React from 'react';
import { Link } from 'react-router-dom';
import WorldDocument from '../components/WorldDocument';
import WebPageAnalogy from '../components/WebPageAnalogy';
import LinkFlow from '../components/LinkFlow';
import { WHITE_PAPER, WORLD_CARD, WORLD_HERO_ALT, CLIENT_URL, GITHUB_ORG } from '../links';

// How it works, and what the pieces are. The words are
// content/how-it-works.md; keep the two in step. This page absorbed the
// former "What we make" page (2026-10-24): a visitor meets each piece
// where it does its job, and the product names are labels, not a grid.
const PIECES = [
  { id: 'veml', name: 'VEML', job: 'The format: the file that says what is in a world and where.', image: '/images/VEMLLogo.png' },
  { id: 'webverse', name: 'WebVerse', job: 'The page that opens a world. It is what every published link opens.', image: WORLD_CARD, imageAlt: WORLD_HERO_ALT },
  { id: 'straightfour', name: 'StraightFour', job: 'The engine under that page: rendering, physics, the script sandbox.', image: '/images/StraightFourLogo.webp' },
  { id: 'worldsync', name: 'WorldSync', job: "Being there together: the visitors' pages exchange what moved.", image: '/images/WorldSyncLogo.webp' },
  { id: 'worldos', name: 'WorldOS', job: 'For the few worlds with their own logic: a score, a simulation, live terrain.', image: '/images/WorldOSLogo.webp' },
  { id: 'worldkit', name: 'WorldKit', job: 'The authoring tools. Today: the Blender add-on.', image: '/images/icon-worldkit.png' },
];

const Technology = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="page-head">
        <div className="container">
          <h1>How it works</h1>
          <p>
            A world is a set of files at a web address, the way a web page is. A page opens it; the
            visitors' pages talk to each other; a door leads to the next world.
          </p>
        </div>
      </section>

      <section className="section section-light" id="pieces">
        <div className="container">
          <div className="text-center mb-4">
            <h2>The same parts as the web</h2>
            <p className="section-subtitle">Each part of a world is the part of a web page it stands in for.</p>
          </div>
          <WebPageAnalogy />
        </div>
      </section>

      <section className="section" id="veml">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>The file</h2>
              <p>
                A world is a folder: one small text file in <strong>VEML</strong> (to a world what HTML
                is to a page) that says what is in the world and where, plus the 3D models it refers to
                in glTF, the standard model file Blender already exports. That is the whole world. One
                line names the sky, one the model, one says where a visitor starts, and a door to
                another world is one more line.
              </p>
              <p>
                Because the world is files, it has no server of its own. It is served the way a web
                page is served, through the same addresses and the same hosts. A world written for next
                year's WebVerse still opens in this year's, because anything the page does not
                understand it leaves alone.
              </p>
            </div>
            <WorldDocument caption="A published world's whole file, as Blender wrote it: 923 bytes, plus the two files it names." />
          </div>
        </div>
      </section>

      <section className="section section-light" id="link">
        <div className="container">
          <div className="text-center mb-4">
            <h2>How a link works</h2>
            <p className="section-subtitle">A scene becomes a folder. The folder gets an address. The address opens anywhere.</p>
          </div>
          <LinkFlow />
        </div>
      </section>

      <section className="section" id="client">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>The page that opens it</h2>
          <p>
            <strong>WebVerse</strong> is a web page that loads a 3D engine and opens the world at the
            address in its link. The browser supplies the rest: the back button, history, bookmarks,
            the address bar. It runs on a phone, a laptop and a headset's browser, and it is what a
            published world's link opens. Under it is <strong>StraightFour</strong>, the engine:
            rendering, loading, physics, and a sandbox that keeps a world's scripts away from your
            device and your data. You meet the engine only if you build a page of your own.
          </p>
        </div>
      </section>

      <section className="section section-light" id="worldsync">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Being there together</h2>
          <p>
            When two people open the same world, their pages find each other and exchange what
            moved, through <strong>WorldSync</strong>. They talk to each other directly; a small
            introduction service, ours by default, only helps them find each other and keeps nothing
            afterwards. The world's files are untouched.
          </p>
        </div>
      </section>

      <section className="section" id="worldos">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Worlds with their own logic</h2>
          <p>
            A few worlds keep a score, run a simulation, reshape their terrain, or listen to a sensor:
            things no single visitor owns. Those run on <strong>WorldOS</strong>, a small runtime of
            plugins that the world's file names. Most worlds do not need it, and a world that does is
            still files at an address.
          </p>
        </div>
      </section>

      <section className="section section-light" id="worldkit">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Making worlds</h2>
          <p>
            <strong>WorldKit</strong> is the name for the tools that produce the files: today the
            Blender add-on, which exports a scene as a world and publishes it in one press. The
            export is one way: Blender stays the editor of the scene, the world is what it exports.
            Worlds published this way are hosted on <strong>WorldHub</strong>, the one service we
            run; it also signs you in and lets you choose who may enter.{' '}
            <Link to="/products/worldhub">About WorldHub &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section" id="stack">
        <div className="container">
          <div className="text-center mb-4">
            <h2>The pieces, by name</h2>
            <p className="section-subtitle">Open source under MIT. The earlier generation is on GitHub; the current one is being readied for release.</p>
          </div>
          <div className="grid-5 pieces-grid">
            {PIECES.map((p) => (
              <div className="card logo-card" id={`piece-${p.id}`} key={p.id}>
                <div className="logo-card-image"><img src={p.image} alt={p.imageAlt ?? ''} loading="lazy" /></div>
                <h3 style={{ marginBottom: '0.25rem' }}>{p.name}</h3>
                <p>{p.job}</p>
              </div>
            ))}
          </div>
          <p className="text-center" style={{ marginTop: '1.5rem' }}>
            <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer">The earlier generation on GitHub &rarr;</a>
          </p>
        </div>
      </section>

      <section className="section section-light" id="own-address">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>For developers: a world at your own address</h2>
          <p>
            Because a world is files, it can live anywhere a web page can: your own domain, GitHub
            Pages, a bucket. Put the folder there and open it with WebVerse pointed at it:
          </p>
          <pre className="code-example"><code>{`${CLIENT_URL}#world-url=`}<em>your world's index.veml address, URL-encoded</em></code></pre>
          <p>
            Your host serves the world, the page's host serves the page, and the two never need to
            be the same. Because the page reads the world from another origin, your host must allow
            cross-origin reads (<code>Access-Control-Allow-Origin: *</code>): GitHub Pages does; a
            bucket needs a CORS rule.
          </p>
          <p>
            Getting the folder out of Blender and onto your own host is the step still being
            finished: a download of the published folder is built and waits on deployment. Until
            then, this recipe is for worlds you assemble by hand.
          </p>
          <p>
            Want to build on the pieces, or put your own things in a world?{' '}
            <Link to="/ecosystem">Build on it &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What this adds up to</h2>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, fontSize: '1.125rem' }}>
            <li>Nothing to install to visit. The link opens in a browser.</li>
            <li>Built to outlive us: the format is open, the page is open, and a world at its own address names nothing of ours. Today that page is served from WorldHub; the public release removes that last dependency.</li>
            <li>An unvisited world costs nothing: it is a folder.</li>
            <li>Worlds link to worlds. The web's graph, in 3D.</li>
          </ul>
          <p>
            The long form is in the white paper (2025):{' '}
            <a href={WHITE_PAPER} target="_blank" rel="noopener noreferrer">Web Wide Worlds</a>. Some
            of its details predate the current page; the principles are the same.
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
