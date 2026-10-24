import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import { WORLD_CARD } from '../links';

// For people who want to make a world of their own, with other people in
// it. The words are content/builders.md; keep the two in step. Problem
// first, in their words; the fix shown; what works today. Slots mark
// pictures only the founder can make.
const Builders = () => (
  <div style={{ paddingTop: '60px' }}>
    <section className="section hero-split">
      <div className="container media-row">
        <div className="media-text">
          <p className="kicker">World builders</p>
          <h1>Years of building, gone when someone else changes the rules.</h1>
          <p className="lead">
            Making your own world used to mean a game engine and a server to keep running. Here a
            world is a few plain files at its own web address, hosted on WorldHub, and your people
            walk in from a link. You don’t run a server.
          </p>
          <div className="hero-actions-left">
            <a href="#watch" className="btn btn-primary btn-large">Watch it, 20 seconds</a>
            <Link to="/first-world" className="btn btn-secondary btn-large">Build one from Blender</Link>
          </div>
        </div>
        <div className="media-figure" id="watch">
          <Slot kind="video" label="20 seconds: a built world with several visitors; one walks through a door into a different world; the address bar changes." poster={WORLD_CARD} />
        </div>
      </div>
    </section>

    <section className="section section-light big-row">
      <div className="container media-row flip">
        <div className="media-figure">
          <Slot label="A group of visitors in a built world, name labels showing, a door in the background." />
        </div>
        <div className="media-text">
          <h2 className="big">Your people, in your world, without running a server.</h2>
          <p className="lead">
            Whoever opens the link is in the world with everyone else there at that moment. You see
            each other move and you can chat. The visitors’ browsers connect to each other, so
            nothing of yours has to stay switched on.
          </p>
        </div>
      </div>
    </section>

    <section className="section big-row">
      <div className="container media-row">
        <div className="media-text">
          <h2 className="big">Put a door in your world that opens onto a friend’s.</h2>
          <p className="lead">
            A door can open onto a friend’s world at its own address, the way one page links to
            the next. Each world’s own file says where its doors lead.
          </p>
        </div>
        <div className="media-figure">
          <Slot label="Three seconds: walking through a door into a different world, with the address bar changing." kind="video" />
        </div>
      </div>
    </section>

    <section className="section section-light">
      <div className="container" style={{ maxWidth: '760px' }}>
        <h2>What you get</h2>
        <ul className="live-list">
          <li>Build in Blender, publish in one press, send the link.</li>
          <li>People together in the world, on phones, laptops and headsets.</li>
          <li>Doors between worlds; a door is a field on the object in Blender.</li>
          <li>Choose who may enter: everyone with the link, or only the people you name.</li>
        </ul>
        <p style={{ marginTop: '1.5rem' }}>
          <Link to="/first-world" className="btn btn-primary">The step-by-step guide</Link>
          {' '}
          <Link to="/technology" className="btn btn-secondary">How it works</Link>
        </p>
      </div>
    </section>
  </div>
);

export default Builders;
