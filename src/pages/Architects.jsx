import React from 'react';
import { Link } from 'react-router-dom';
import { WORLD_CARD, WORLDHUB_URL } from '../links';

// For architects, interior and landscape designers, and real estate. The
// words are content/architects.md; keep the two in step. Problem first,
// in their words; then the fix shown; then what it costs and what works
// today. Slots mark pictures only the founder can make.
const Architects = () => (
  <div style={{ paddingTop: '60px' }}>
    <section className="section hero-split">
      <div className="container media-row">
        <div className="media-text">
          <h1>Clients can’t read plans.</h1>
          <p className="lead">
            They find out what they approved once it’s built. Send a private link instead. They
            walk the kitchen on their phone before the slab is poured, and you’re in there with
            them. There’s nothing for them to install.
          </p>
          <div className="hero-actions-left">
            <a href={WORLDHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Explore worlds on WorldHub</a>
            <Link to="/first-world" className="btn btn-secondary btn-large">Start from Blender</Link>
          </div>
        </div>
        <div className="media-figure" id="watch">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={WORLD_CARD} aria-label="A phone standing in the loft as a second visitor walks in; then the one press in Blender that published it, and the browser opening the world">
            <source src="/video/hero-2026-11-13d.webm" type="video/webm" />
            <source src="/video/hero-2026-11-13d.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

    <section className="section section-light big-row">
      <div className="container media-row flip">
        <div className="media-figure">
          <img className="feature-photo feature-photo-phone" src="/images/loft-phone-kitchen.webp" alt="The loft's kitchen on a phone screen: the island, the sink and the pendant lights, with the two sticks" width="780" height="1688" loading="lazy" />
        </div>
        <div className="media-text">
          <h2 className="big">Buyers walk every room before they book the viewing.</h2>
          <p className="lead">
            Put a walkthrough link on a new-build or off-plan listing. Buyers go through every room
            on the train, so the ones who book a viewing already know the layout. Make the link
            private and only the people you name get in.
          </p>
        </div>
      </div>
    </section>

    <section className="section big-row">
      <div className="container media-row">
        <div className="media-text">
          <h2 className="big">Free to use, and your client just opens a link.</h2>
          <p className="lead">
            The software is free and open source, and hosting on WorldHub, our service, costs
            nothing. Your client opens the link in their phone’s browser. For a private link they
            sign in once, and only the people you named get in.
          </p>
        </div>
        <div className="media-figure">
          <img className="feature-photo" src="/images/blender-only-people-i-allow.webp" alt="The Save as My World box with Only People I Allow ticked and two addresses in Allowed Viewers" width="1400" height="801" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="section section-light">
      <div className="container" style={{ maxWidth: '760px' }}>
        <h2>What you get</h2>
        <ul className="live-list">
          <li>From Blender: one press publishes a model as a walkable place at a link.</li>
          <li>Models from SketchUp, Revit or Rhino come in as the files those tools export, such as FBX or OBJ, opened in Blender.</li>
          <li>Private links: visitors sign in, and only the people you name get in.</li>
          <li>Phones, laptops and headsets, in the browser.</li>
        </ul>
        <p style={{ marginTop: '1.5rem' }}>
          <Link to="/first-world" className="btn btn-primary">The step-by-step guide</Link>
        </p>
      </div>
    </section>
  </div>
);

export default Architects;
