import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_POSTER, WORLDHUB_URL } from '../links';

// For people who want to make a world of their own, with other people in
// it. The words are content/builders.md; keep the two in step. Problem
// first, in their words; the fix shown; what works today. Slots mark
// pictures only the founder can make.
const Builders = () => (
  <div style={{ paddingTop: '60px' }}>
    <section className="section hero-split">
      <div className="container media-row">
        <div className="media-text">
          <h1>A world of your own, with your friends in it.</h1>
          <p className="lead">
            Your world is a few plain files at its own web address. Your people walk in from a
            link, and a door in it points to other worlds. You don’t run a server.
          </p>
          <div className="hero-actions-left">
            <a href={WORLDHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Explore worlds on WorldHub</a>
            <Link to="/first-world" className="btn btn-secondary btn-large">Build one from Blender</Link>
          </div>
        </div>
        <div className="media-figure" id="watch">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={HERO_POSTER} aria-label="A phone standing in the loft as a second visitor walks in; then the one press in Blender that published it, and the browser opening the world">
            <source src="/video/hero-2026-11-13d.webm" type="video/webm" />
            <source src="/video/hero-2026-11-13d.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

    <section className="section section-light big-row">
      <div className="container media-row flip">
        <div className="media-figure">
          <img className="feature-photo" src="/images/loft-two-visitors.webp" alt="Inside the loft, a second visitor stands in the entry hall with a name over their head" width="1600" height="780" loading="lazy" />
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
          <h2 className="big">Put a door in your world that points to a friend’s.</h2>
          <p className="lead">
            A door in your world names a friend’s world at its own address, the way one page links to
            the next. Each world’s own file says where its doors lead.
          </p>
        </div>
        <div className="media-figure">
          <img className="feature-photo" src="/images/loft-door.webp" alt="The loft's front door at the end of its hall; its link names the subway station" width="1600" height="780" loading="lazy" />
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
