import React from 'react';
import { Link } from 'react-router-dom';
import { GITHUB_ORG } from '../links';

// The words are content/products.md; keep the two in step.
const PIECES = [
  {
    id: 'veml',
    name: 'VEML',
    tagline: 'The format',
    text: 'A world is a VEML document plus glTF models. The 4.0 specification and its conformance suite are being prepared for publication; the earlier documents are on GitHub.',
    links: [{ label: 'GitHub', href: `${GITHUB_ORG}/VEML` }],
  },
  {
    id: 'webverse',
    name: 'WebVerse',
    tagline: 'The client',
    text: 'A web page that opens any world by its address. It is what a published link opens, on a phone or a laptop. A desktop version for offline and local-network use is in the works.',
    links: [{ label: 'webverse.fivesqd.com', href: 'https://webverse.fivesqd.com' }],
  },
  {
    id: 'straightfour',
    name: 'StraightFour',
    tagline: 'The engine',
    text: 'Under the client: rendering, loading, physics, the scripting sandbox. A library; clients link against it.',
    links: [],
  },
  {
    id: 'worldsync',
    name: 'WorldSync',
    tagline: 'Being there together',
    text: 'The sync layer that lets visitors be in a world together. Works without a server for most worlds, with a server for worlds that want one. Standalone: an engine you already use can adopt it.',
    links: [],
  },
  {
    id: 'worldos',
    name: 'WorldOS',
    tagline: 'The runtime, when a world needs one',
    text: 'For worlds that need an authority of their own: plugins, state no visitor owns, connections to outside systems. Most worlds do not need it.',
    links: [{ label: 'GitHub', href: `${GITHUB_ORG}/WorldOS` }],
  },
  {
    id: 'worldkit',
    name: 'WorldKit',
    tagline: 'The authoring tools',
    text: 'Today: the Blender add-on, which exports a scene as a world and publishes it in one press.',
    links: [{ label: 'Your first world', to: '/first-world' }],
  },
  {
    id: 'myworlds',
    name: 'MyWorlds',
    tagline: 'Assemble a world in the browser',
    text: 'The place to put a world together without Blender. Being rebuilt on the new client; not yet live.',
    links: [],
  },
];

const Piece = ({ p }) => (
  <div className="card" id={p.id}>
    <h3 style={{ marginBottom: '0.25rem' }}>{p.name}</h3>
    <p style={{ opacity: 0.75, marginBottom: '0.75rem' }}>{p.tagline}</p>
    <p>{p.text}</p>
    {p.links.length > 0 && (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {p.links.map((l) =>
          l.to ? (
            <Link key={l.label} to={l.to}>{l.label} &rarr;</Link>
          ) : (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} &rarr;</a>
          ),
        )}
      </div>
    )}
  </div>
);

const Products = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>What we make</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto' }}>
            Open pieces that fit together, and one service. Each is listed with what it is today.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>The open stack</h2>
            <p className="section-subtitle">MIT-licensed, on GitHub.</p>
          </div>
          <div className="grid grid-3">
            {PIECES.map((p) => <Piece key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className="section" id="worldhub">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>The service</h2>
          <p>
            <strong>WorldHub</strong> is the one service we run. It hosts the worlds you publish from
            Blender, signs you in (WorldHub ID), and lists worlds people want listed (Search). It is a
            convenience: a world does not need WorldHub to exist, to be opened, or to be moved
            somewhere else.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/products/worldhub" className="btn btn-primary">About WorldHub</Link>
            <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">All the code</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
