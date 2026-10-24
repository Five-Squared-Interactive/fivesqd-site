import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import WorldDocument from '../components/WorldDocument';
import { DEMO_WORLD_URL, WORLD_CARD, WORLD_HERO_ALT } from '../links';

// The words are content/home.md; keep the two in step. Founder,
// 2026-10-24: not a sales pitch. The page shows what you can do and how
// you do it, without saying so: three things people do with it, then the
// three steps, then what a world is. Slots mark pictures and recordings
// only the founder can make.
const EXAMPLES = [
  {
    to: '/architects',
    does: 'Walk a client through the kitchen before it’s built.',
    how: 'Send a private link. They open it on their phone and you’re in there with them.',
    slot: 'A kitchen walkthrough on a phone, a plan on the desk behind it.',
  },
  {
    to: '/first-world',
    does: 'Send a friend the room you modelled, not a render of it.',
    how: 'Press Save and Publish in Blender. Your scene becomes a link people walk through.',
    slot: 'A Blender viewport and the same room open on a phone, side by side.',
  },
  {
    to: '/builders',
    does: 'Make a world your friends meet in, at its own address.',
    how: 'Put doors in it to other worlds. You don’t run a server.',
    slot: 'A group of visitors in a built world, name labels showing, a door in the background.',
  },
];

const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section hero-split">
        <div className="container media-row">
          <div className="media-text">
            <p className="kicker promise">Easy 3D &middot; Instant &middot; Shared &middot; On any device</p>
            <h1>Turn your 3D scene into a place people can walk through with you.</h1>
            <p className="lead">
              Press Save and Publish in Blender, then send the link. Friends, clients or players open
              it on a phone or laptop and walk around inside. They don{'’'}t install anything.
            </p>
            <div className="hero-actions-left">
              {DEMO_WORLD_URL
                ? <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Walk into one now</a>
                : <a href="#watch" className="btn btn-primary btn-large">Watch it, 20 seconds</a>}
              <Link to="/first-world" className="btn btn-secondary btn-large">Start in Blender</Link>
            </div>
            <p className="hero-note">Free and open source. Blender 4.5 or newer.</p>
          </div>
          <div className="media-figure" id="watch">
            <Slot
              kind="video"
              label="20 seconds, muted, looping. Open on the payoff: a phone opens a link and is standing in a room; a second person walks in; then, briefly, the Blender scene it came from and the Save and Publish press."
              poster={WORLD_CARD}
            />
          </div>
        </div>
      </section>

      <section className="section section-light" id="examples">
        <div className="container">
          <div className="grid-3-steps">
            {EXAMPLES.map((e) => (
              <Link to={e.to} className="card audience-card" key={e.to}>
                <Slot label={e.slot} ratio="4 / 3" />
                <h3>{e.does}</h3>
                <p>{e.how}</p>
                <span className="audience-more">How &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="steps">
        <div className="container">
          <div className="text-center mb-4">
            <h2>From a Blender scene to a link</h2>
          </div>
          <div className="grid-3-steps">
            <div className="step-tile">
              <Slot label="The add-on panel in Blender, cropped at 2x, with Save and Publish visible." ratio="4 / 3" />
              <h3><span className="step-n">1</span> Install the add-on</h3>
              <p>Blender 4.5 or newer. Sign in once with Google, GitHub or an emailed link.</p>
            </div>
            <div className="step-tile">
              <Slot label="The link that appears after Save and Publish, as the add-on shows it." ratio="4 / 3" />
              <h3><span className="step-n">2</span> Press Save and Publish</h3>
              <p>Your scene becomes a world at its own web address and opens in your browser.</p>
            </div>
            <div className="step-tile">
              <Slot label="The same world on a phone, held in a hand, with the two sticks showing." ratio="4 / 3" />
              <h3><span className="step-n">3</span> Send the link</h3>
              <p>Paste it in a message. Whoever taps it walks in. Let in everyone, or only the people you name.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/first-world" className="btn btn-primary">The full guide</Link>
          </div>
        </div>
      </section>

      <section className="section section-light" id="document">
        <div className="container">
          <div className="text-center mb-4">
            <h2>A world is a web page.</h2>
            <p className="section-subtitle">
              Here is everything in a published place: one small text file, one model, one sky. The format is open and the files are plain, so reading a world never depends on us.
            </p>
          </div>
          <div className="world-pair">
            <figure className="world-frame">
              {DEMO_WORLD_URL
                ? <a className="walkin walkin-poster" style={{ backgroundImage: `url(${WORLD_CARD})` }} href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" aria-label={`Walk into ${WORLD_HERO_ALT}, in a new tab`}><span>Walk in</span></a>
                : <Slot label="A published world, walkable from this page." poster={WORLD_CARD} ratio="800 / 426" />}
              <figcaption>A world, opened in a browser (The Overlook).</figcaption>
            </figure>
            <WorldDocument caption={'A different world’s whole document, 923 bytes. Add /index.veml to any published world’s address and read yours.'} />
          </div>
          <p className="text-center" style={{ marginTop: '1.5rem' }}>
            <Link to="/technology">How it works &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section" id="open">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>Free, and open</h2>
          <p>
            The software is free and open source under MIT. Publishing to WorldHub, our hosting
            service, costs nothing. Worlds are hosted at their own web address, people are in them
            together on phones and laptops, and doors lead between them.
          </p>
          <p className="founder-line">
            Built by Five Squared Interactive, an independent studio, since <span className="ph">[year]</span>.
            Founder: <span className="ph">[name, one line]</span>. <Link to="/about">About us &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container text-center">
          <h2>Have a scene in Blender? Publish it and send the link.</h2>
          <Link to="/first-world" className="btn btn-primary btn-large">Start in Blender</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
