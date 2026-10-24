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
            They find out what they approved after it’s built. Send a private link instead: they
            walk the kitchen on their phone before the slab is poured, with you on the call pointing
            at the island. Nothing to install, no viewer licence, no file to open.
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
          <h2 className="big">A listing is photos. A buyer still has to drive out.</h2>
          <p className="lead">
            Put a walkthrough link on the listing. They go through every room on the train, and
            the ones who book a viewing already want it. The link is private if you want it to be:
            only the people you name may enter.
          </p>
        </div>
      </div>
    </section>

    <section className="section big-row">
      <div className="container media-row">
        <div className="media-text">
          <h2 className="big">No viewer to buy, no seat to license.</h2>
          <p className="lead">
            The software is free and open source. Hosting is included on our service, or put the
            files on your own domain so the link carries your name. There is no app for the client
            to install and no account for them to make.
          </p>
        </div>
        <div className="media-figure">
          <Slot label="The Only People I Allow box in the add-on, with two client email addresses." ratio="4 / 3" />
        </div>
      </div>
    </section>

    <section className="section section-light">
      <div className="container" style={{ maxWidth: '760px' }}>
        <h2>What works today, and what does not yet</h2>
        <ul className="live-list">
          <li>From Blender: one press publishes a model as a walkable place at a link.</li>
          <li>Models from SketchUp, Revit or Rhino: bring them into Blender as glTF or FBX first. A direct SketchUp path is next.</li>
          <li>Private links: name who may enter; everyone else sees a sign-in.</li>
          <li>Phones, laptops and headsets, in the browser.</li>
        </ul>
        <ul className="live-list next" style={{ marginTop: '1rem' }}>
          <li>Measurements and annotations inside the walkthrough</li>
          <li>Downloading the folder to host on your own domain without our service</li>
        </ul>
        <p style={{ marginTop: '1.5rem' }}>
          <Link to="/first-world" className="btn btn-primary">The step-by-step guide</Link>
        </p>
      </div>
    </section>
  </div>
);

export default Architects;
