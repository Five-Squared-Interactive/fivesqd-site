import React from 'react';
import { Link } from 'react-router-dom';
import { GITHUB_ORG, CONTACT_EMAIL, VEML_SPEC, WHITE_PAPER, WORLDHUB_URL } from '../links';

// The ecosystem page, in the shape the live site had (founder, 2026-11-14:
// "most of the old ecosystem page looks like stuff we want to keep"): the
// banner, three ways in, the five layers, what is already here, and Let's
// Build Together. The facts and links are today's. The words are
// content/build-on-it.md; keep the two in step.
const PATHS = [
  {
    title: 'Create Worlds',
    audience: 'For creators, educators, and anyone with an idea.',
    description:
      'Build a world and share it with a link. Start from a scene in Blender and press Save and Publish, or write the world yourself: define it in VEML, script it in JavaScript, and put the folder at any web address. No server to run.',
    actions: [
      { label: 'Make a world from Blender', to: '/first-world' },
      { label: 'Find worlds on WorldHub', href: WORLDHUB_URL, external: true },
      { label: 'Learn VEML', to: '/technology#veml' },
    ],
  },
  {
    title: "Integrate What You've Built",
    audience: 'For developers who already have games, simulations, or tools.',
    description:
      'Bring your existing work into the ecosystem. Load your own glTF, script behaviour with the JavaScript World API, write WorldOS plugins for a world with shared state of its own, or build connectors to the systems you already run. Open APIs make integration straightforward.',
    actions: [
      { label: 'WorldOS & Plugins', to: '/technology#worldos' },
      { label: 'JavaScript World API', to: '/technology#veml' },
      { label: 'View All Repos', href: GITHUB_ORG, external: true },
    ],
  },
  {
    title: 'Build on the Stack',
    audience: 'For engineers, studios, and anyone who wants to build something new.',
    description:
      'The entire stack is MIT-licensed. Build a new world browser, an editor, a hosting service, a connector, a plugin, or something nobody has thought of yet. Every layer is designed to be swapped, extended, or replaced. No permission needed.',
    actions: [
      { label: 'Architecture Overview', to: '/technology' },
      { label: 'Read the White Paper', href: WHITE_PAPER, external: true },
      { label: 'Source on GitHub', href: GITHUB_ORG, external: true },
    ],
  },
];

const COMPONENTS = [
  { name: 'WebVerse', desc: 'Open world browser: desktop, web, and VR', to: '/technology#client' },
  { name: 'StraightFour', desc: 'The engine under WebVerse', to: '/technology#pieces' },
  { name: 'WorldKit', desc: 'The Blender add-on: Save and Publish', to: '/first-world' },
  { name: 'WorldOS', desc: 'Plugin-based runtime for worlds with shared state of their own', to: '/technology#worldos' },
  { name: 'WorldSync', desc: "Real-time sync between visitors' browsers, with a relay only when needed", to: '/technology#worldsync' },
  { name: 'VEML', desc: 'Declarative markup for 3D worlds, a written specification', href: VEML_SPEC },
  { name: 'World API', desc: 'JavaScript scripting inside worlds', to: '/technology#veml' },
  { name: 'WorldHub', desc: 'Publishing from Blender, and a directory of worlds', to: '/products/worldhub' },
];

const LAYERS = [
  { number: '5', name: 'Publishing', desc: 'Host and distribute worlds: your own address, or WorldHub', to: '/products/worldhub' },
  { number: '4', name: 'Tooling & APIs', desc: 'The Blender add-on, WorldOS plugins, the World API', to: '/technology#worldkit' },
  { number: '3', name: 'Networking', desc: 'Real-time sync, presence, people together in a world', to: '/technology#worldsync' },
  { number: '2', name: 'World Definition', desc: 'VEML markup, JavaScript scripting, glTF assets', to: '/technology#veml' },
  { number: '1', name: 'Scene Viewer', desc: 'World browsers: render and interact with worlds', to: '/technology#client' },
];

const rowStyle = {
  display: 'flex',
  alignItems: 'baseline',
  padding: '0.75rem 0',
  borderBottom: '1px solid var(--color-border)',
  textDecoration: 'none',
  color: 'inherit',
};

const Ecosystem = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section-hero-image">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: 'white' }}>The Ecosystem Is Yours</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto' }}>
            Web Wide Worlds is open to everyone. Create worlds, bring in what you've already built,
            or build something entirely new. Every layer is MIT-licensed and designed to be
            extended, replaced, or reimagined. No permission required.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>How to Get Involved</h2>
            <p className="section-subtitle">Three ways in. Pick the one that fits where you are.</p>
          </div>

          <div className="grid grid-3">
            {PATHS.map((path) => (
              <div className="card" key={path.title}>
                <h3>{path.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  {path.audience}
                </p>
                <p>{path.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                  {path.actions.map((action) =>
                    action.external ? (
                      <a key={action.label} href={action.href} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                        {action.label} &rarr;
                      </a>
                    ) : (
                      <Link key={action.label} to={action.to} style={{ fontWeight: 600 }}>
                        {action.label} &rarr;
                      </Link>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Where You Fit In</h2>
            <p className="section-subtitle">
              The ecosystem is a five-layer stack. You can plug in at any level, or across all of them.
            </p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {LAYERS.map((layer) => (
              <Link
                key={layer.number}
                to={layer.to}
                className="ecosystem-layer-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1rem 1.25rem',
                  borderBottom: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background 0.15s',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {layer.number}
                </div>
                <div style={{ flex: 1 }}>
                  <strong>{layer.name}</strong>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{layer.desc}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" opacity="0.4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3l5 5-5 5" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What's Already Here</h2>
            <p className="section-subtitle">You're not starting from scratch. These pieces are shipped and open source.</p>
          </div>

          <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {COMPONENTS.map((c) =>
              c.href ? (
                <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" style={rowStyle}>
                  <div>
                    <strong>{c.name}</strong>
                    <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{c.desc}</p>
                  </div>
                </a>
              ) : (
                <Link key={c.name} to={c.to} style={rowStyle}>
                  <div>
                    <strong>{c.name}</strong>
                    <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{c.desc}</p>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center">
          <h2>Let's Build Together</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Whether you want to create your first world, connect something you've already built, or
            build the next great tool for the ecosystem, we'd love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">Get in Touch</a>
            <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View on GitHub</a>
            <a href={WHITE_PAPER} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Read the White Paper</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
