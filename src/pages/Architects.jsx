import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import { WORLD_CARD } from '../links';

// For architects, interior and landscape designers, and real estate. The
// words are content/architects.md; keep the two in step. Problem first,
// in their words; then the fix shown; then what it costs and what works
// today. Slots mark pictures only the founder can make.
const Architects = () => (
  <div style={{ paddingTop: '60px' }}>
    <section className="section hero-split">
      <div className="container media-row">
        <div className="media-text">
          <p className="kicker">Architects, designers, real estate</p>
          <h1>Clients can’t read plans.</h1>
          <p className="lead">
            They find out what they approved once it’s built. Send a private link instead. They
            walk the kitchen on their phone before the slab is poured, and you’re in there with
            them. There’s nothing for them to install.
          </p>
          <div className="hero-actions-left">
            <a href="#watch" className="btn btn-primary btn-large">Watch a client walkthrough</a>
            <Link to="/first-world" className="btn btn-secondary btn-large">Start from Blender</Link>
          </div>
        </div>
        <div className="media-figure" id="watch">
          <Slot kind="video" label="20 seconds: a client opens a link on a phone and walks through a kitchen; the designer's cursor points at the island; the client turns to the window." poster={WORLD_CARD} />
        </div>
      </div>
    </section>

    <section className="section section-light big-row">
      <div className="container media-row flip">
        <div className="media-figure">
          <Slot label="A phone showing a listing walkthrough, next to the same property's photo gallery." ratio="4 / 3" />
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
          <Slot label="The Only People I Allow box in the add-on, with two client email addresses." ratio="4 / 3" />
        </div>
      </div>
    </section>

    <section className="section section-light">
      <div className="container" style={{ maxWidth: '760px' }}>
        <h2>What you get</h2>
        <ul className="live-list">
          <li>From Blender: one press publishes a model as a walkable place at a link.</li>
          <li>Models from SketchUp, Revit or Rhino come in through Blender as glTF or FBX.</li>
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
