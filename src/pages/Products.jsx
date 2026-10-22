import React from 'react';
import { Link } from 'react-router-dom';
import { GITHUB_ORG, WORLD_CARD, WORLD_HERO_ALT } from '../links';

// The words are content/products.md; keep the two in step.
const STACK = [
  {
    id: 'veml',
    name: 'VEML',
    tagline: 'The format',
    image: '/images/VEMLLogo.png',
    text: 'A world is a VEML document plus glTF models. The 4.0 specification and its conformance suite are being prepared for publication; the earlier documents are on GitHub.',
  },
  {
    id: 'webverse',
    name: 'WebVerse',
    tagline: 'The client',
    image: WORLD_CARD,
    imageAlt: WORLD_HERO_ALT,
    text: "A web page that opens any world by its address, on a phone, a laptop or a headset's browser. It is what a published link opens.",
  },
  {
    id: 'straightfour',
    name: 'StraightFour',
    tagline: 'The engine',
    image: '/images/StraightFourLogo.webp',
    text: 'Under the client: rendering, loading, physics, the scripting sandbox. You meet it only if you build a client.',
  },
  {
    id: 'worldsync',
    name: 'WorldSync',
    tagline: 'Being there together',
    image: '/images/WorldSyncLogo.webp',
    text: 'The clients in a world exchange what moved, directly for most worlds, through a server for worlds that want one. Designed so an engine you already use can adopt it.',
  },
  {
    id: 'worldos',
    name: 'WorldOS',
    tagline: 'A world with its own logic',
    image: '/images/WorldOSLogo.webp',
    text: 'The runtime for a world that keeps a score, runs a simulation, has terrain people reshape, or listens to a sensor. Most worlds do not need it.',
  },
];

const TOOLS = [
  {
    id: 'worldkit',
    name: 'WorldKit',
    tagline: 'The authoring tools',
    image: '/images/icon-worldkit.png',
    text: 'Today: the Blender add-on, which exports a scene as a world and publishes it in one press.',
    link: { label: 'Your first world', to: '/first-world' },
  },
  {
    id: 'myworlds',
    name: 'MyWorlds',
    tagline: 'Assembling a world in the browser',
    glyph: '▦',
    text: 'Putting a world together without Blender. Being rebuilt on the new client; not yet live.',
  },
];

const Piece = ({ p }) => (
  <div className="card logo-card" id={p.id}>
    {p.image && (
      <div className="logo-card-image">
        <img src={p.image} alt={p.imageAlt ?? ''} loading="lazy" />
      </div>
    )}
    {p.glyph && <div className="logo-card-image" aria-hidden="true"><span className="card-glyph" style={{ margin: 0, fontSize: '4.5rem', lineHeight: 1 }}>{p.glyph}</span></div>}
    <h3 style={{ marginBottom: '0.25rem' }}>{p.name}</h3>
    <p style={{ opacity: 0.75, marginBottom: '0.75rem' }}>{p.tagline}</p>
    <p>{p.text}</p>
    {p.link && <Link to={p.link.to}>{p.link.label} &rarr;</Link>}
  </div>
);

const Products = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="page-head">
        <div className="container">
          <h1>What we make</h1>
          <p>
            Open pieces that fit together, and one service. Each is listed with what it is today,
            not what it will be.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>The open stack</h2>
            <p className="section-subtitle">Five pieces. A world that is only visited needs the first two.</p>
          </div>
          <div className="grid-5">
            {STACK.map((p) => <Piece key={p.id} p={p} />)}
          </div>
          <p className="text-center" style={{ marginTop: '2rem', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
            All of it is MIT-licensed. The public release of the current generation is being
            prepared; the repositories on{' '}
            <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer">GitHub</a> today are the
            earlier generation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Making worlds</h2>
          </div>
          <div className="grid-2-narrow">
            {TOOLS.map((p) => <Piece key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className="section section-light" id="worldhub">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>The service</h2>
          <p>
            <strong>WorldHub</strong> is the one service we run. It hosts the worlds you publish from
            Blender and signs you in (WorldHub ID); a directory of worlds people choose to list is
            coming. A world does not need WorldHub to exist; today the client page that opens it is served
            from WorldHub.
          </p>
          <Link to="/products/worldhub" className="btn btn-primary">About WorldHub</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
