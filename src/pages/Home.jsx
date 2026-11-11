import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import WorldDocument from '../components/WorldDocument';
import { ADDON_ZIP, DEMO_WORLD_URL, GITHUB_ORG, WORLD_CARD, WORLD_HERO, WORLD_HERO_ALT } from '../links';

// The words are content/home.md; keep the two in step. One home page in
// the shape of a product site: the thing moving, then one section for
// each thing you can do with a picture of it, the mechanism last, and a
// closing row of three cards. Nobody is labelled by who they are; the
// audiences choose the examples in the captions. Slots mark pictures and
// recordings only the founder can make.

const WalkIn = ({ className = '', children }) =>
  DEMO_WORLD_URL ? (
    <a
      className={`walkin walkin-poster ${className}`.trim()}
      style={{ backgroundImage: `url(${WORLD_HERO})` }}
      href={DEMO_WORLD_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Walk into ${WORLD_HERO_ALT}, in a new tab`}
    >
      <span>{children || 'Walk in'}</span>
    </a>
  ) : (
    <Slot label="A published world, walkable from this page." poster={WORLD_CARD} ratio="800 / 426" className={className} />
  );

const Feature = ({ id, flip, light, title, children, link, figure }) => (
  <section className={`section feature-row ${light ? 'section-light' : ''}`.trim()} id={id}>
    <div className={`container media-row ${flip ? 'flip' : ''}`.trim()}>
      <div className="media-text">
        <h2 className="feature-title">{title}</h2>
        <p className="lead">{children}</p>
        {link}
      </div>
      <div className="media-figure">{figure}</div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section hero-split">
        <div className="container media-row">
          <div className="media-text">
            <h1>Easy 3D. Instant. Shared. On any device.</h1>
            <p className="lead">
              Make a place, send the link, and people walk around in it with you.
            </p>
            <div className="hero-actions-left">
              {DEMO_WORLD_URL
                ? <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Walk into one now</a>
                : <a href="#watch" className="btn btn-primary btn-large">See it in action</a>}
              <Link to="/first-world" className="btn btn-secondary btn-large">Make one</Link>
            </div>
            <p className="hero-note">Free and open source.</p>
          </div>
          <div className="media-figure" id="watch">
            <Slot
              kind="video"
              label="Muted, looping. Open on the payoff: a phone opens a link and is standing in a room; a second person walks in; then, briefly, the Blender scene it came from and the Save and Publish press."
              poster={WORLD_CARD}
            />
          </div>
        </div>
      </section>

      <section className="section section-light" id="walk-in">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Open the link and you’re in the room.</h2>
            <p className="section-subtitle">
              On a phone or a laptop, in the browser you already have. Nothing to install for visitors.
            </p>
          </div>
          <figure className="world-wide">
            <WalkIn>Walk into the loft</WalkIn>
            <figcaption>The loft, published from Blender and opened in a browser. Click it and walk around.</figcaption>
          </figure>
        </div>
      </section>

      <Feature
        id="together"
        title="Everyone with the link is in there with you."
        figure={<Slot label="The loft with two visitors in it, their names over their heads: a frame from the recording." ratio="4 / 3" />}
      >
        You see each other move and you can type to each other. Walk them to the window and they come and look.
      </Feature>

      <Feature
        id="publish"
        flip
        light
        title="Press Save and Publish. Your scene is a link."
        link={<p><Link to="/first-world">Make a world from Blender &rarr;</Link></p>}
        figure={<Slot label="The Save as My World box in Blender with the Save and Publish button, cropped at 2x." ratio="4 / 3" />}
      >
        Install the add-on and sign in once. From then on, one press puts your scene at its own web address and opens it in your browser. Send the address.
      </Feature>

      <Feature
        id="who-may-enter"
        title="Choose who may enter."
        link={<p><Link to="/private-link">A private link for a client &rarr;</Link></p>}
        figure={<Slot label="The Only People I Allow tick with two viewers listed, and a kitchen walkthrough on a phone beside it." ratio="4 / 3" />}
      >
        Tick Only People I Allow and name them. They sign in once; nobody else gets in. A client can walk the kitchen on their phone before the slab is poured, and you’re in there with them.
      </Feature>

      <Feature
        id="doors"
        flip
        light
        title="Put a door in it."
        link={<p><Link to="/doors">A world your friends meet in &rarr;</Link></p>}
        figure={<Slot kind="video" label="Friends in a world; one taps a door and is in another world, and the address bar changes." ratio="4 / 3" />}
      >
        A door in your world opens onto another world at its own address, the way a page links to the next. It is the Link field on an object in Blender. Your people meet in your world and tap their way out of it.
      </Feature>

      <section className="section" id="document">
        <div className="container">
          <div className="text-center mb-4">
            <h2>It’s yours.</h2>
            <p className="section-subtitle">
              Here is everything in a published place: one small text file, one model, one sky. The format is open and the files are plain, so your world can live on any web host, and reading it never depends on us.
            </p>
          </div>
          <div className="world-pair">
            <figure className="world-frame">
              <WalkIn />
              <figcaption>The loft, opened in a browser. Walk in.</figcaption>
            </figure>
            <WorldDocument caption={'The loft’s whole document, 787 bytes. Add /index.veml to any published world’s address and read it.'} />
          </div>
          <p className="text-center" style={{ marginTop: '1.5rem' }}>
            <Link to="/technology">How it works &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section section-light" id="start">
        <div className="container">
          <div className="grid-3-steps closing-cards">
            <a href={ADDON_ZIP} className="card closing-card">
              <h3>Get the add-on</h3>
              <p>For Blender 4.5 or newer. Free.</p>
            </a>
            {DEMO_WORLD_URL && (
              <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="card closing-card">
                <h3>Walk into the loft</h3>
                <p>The world on this page, in a new tab.</p>
              </a>
            )}
            <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="card closing-card">
              <h3>GitHub</h3>
              <p>Open source under MIT.</p>
            </a>
          </div>
          <p className="founder-line text-center">
            The software is free and open source under MIT, and hosting on WorldHub, our service, costs nothing.
            Built by Five Squared Interactive since <span className="ph">[year]</span>, founded by <span className="ph">[name]</span>. <Link to="/about">About &rarr;</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
