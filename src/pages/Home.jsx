import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import WorldDocument from '../components/WorldDocument';
import { DEMO_WORLD_URL, WORLDHUB_URL, WORLD_CARD, HERO_POSTER, WORLD_ROOM, WORLD_TOGETHER, WORLD_HERO_ALT } from '../links';

// The words are content/home.md; keep the two in step. The home page says
// one thing: making a good shared world is easy. Eight one-line sections,
// each with the picture it needs, and no button names, field names or
// mechanics anywhere on it (founder, 2026-11-12: "we are describing
// nitty gritty things that makes it sound complicated"). Nobody is
// labelled by who they are; Blender is one of the tools you already use,
// not the subject. The loft appears once, at the same size as the other
// pictures. Slots mark pictures and recordings only the founder can make.

const WalkIn = ({ children }) =>
  DEMO_WORLD_URL ? (
    <a
      className="walkin walkin-poster"
      style={{ backgroundImage: `url(${WORLD_ROOM})` }}
      href={DEMO_WORLD_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Walk into ${WORLD_HERO_ALT}, in a new tab`}
    >
      <span>{children || 'Walk in'}</span>
    </a>
  ) : (
    <Slot label="A published world, walkable from this page." poster={WORLD_CARD} ratio="800 / 426" />
  );

const Feature = ({ id, flip, light, title, children, figure, credit }) => (
  <section className={`section feature-row ${light ? 'section-light' : ''}`.trim()} id={id}>
    <div className={`container media-row ${flip ? 'flip' : ''}`.trim()}>
      <div className="media-text">
        <h2 className="feature-title">{title}</h2>
        <p className="lead">{children}</p>
      </div>
      <div className="media-figure">
        {figure}
        {credit && <p className="figure-credit">{credit}</p>}
      </div>
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
                : <a href={WORLDHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Explore worlds on WorldHub</a>}
              <Link to="/first-world" className="btn btn-secondary btn-large">Make one</Link>
            </div>
            <p className="hero-note">Free and open source.</p>
          </div>
          <div className="media-figure" id="watch">
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={HERO_POSTER} aria-label="A phone standing in the loft as a second visitor walks in; then the one press in Blender that published it, and the browser opening the world">
              <source src="/video/hero-2026-11-13d.webm" type="video/webm" />
              <source src="/video/hero-2026-11-13d.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <Feature
        id="your-worlds"
        light
        title="Share the worlds you already have."
        figure={<img className="feature-photo" src="/images/station-hall.webp" alt="A subway station hall, a model made elsewhere and published as a world without changing it" width="1600" height="780" loading="lazy" />}
        credit={<>“Subway station” by <a href="https://skfb.ly/pByQU" target="_blank" rel="noopener noreferrer">Pasha</a>, CC BY 4.0, published as a world unchanged.</>}
      >
        Bring a scene from the tools you already use. It comes in as it is.
      </Feature>

      <Feature
        id="walk-in"
        flip
        title="Open the link. You’re there."
        figure={<WalkIn>Walk into the loft</WalkIn>}
      >
        On a phone, a laptop or in VR, in the browser. Nothing for your visitors to install.
      </Feature>

      <Feature
        id="together"
        light
        title="Together, from the start."
        figure={<img className="feature-photo" src={WORLD_TOGETHER} alt="Inside the loft, a second visitor stands in the entry hall with a name over their head" width="1600" height="780" loading="lazy" />}
      >
        Whoever opens the link is in there with you.
      </Feature>

      <Feature
        id="publish"
        flip
        title="Make it, send it."
        figure={<img className="feature-photo" src="/images/loft-link-in-browser.webp" alt="The loft open in a browser tab, its address in the address bar: the link that one press made" width="1400" height="780" loading="lazy" />}
      >
        From a scene to a link in one press. Paste it anywhere people read.
      </Feature>

      <Feature
        id="private"
        light
        title="Private when you want."
        figure={<img className="feature-photo" src="/images/blender-only-people-i-allow.webp" alt="The Save as My World box with Only People I Allow ticked and two addresses in Allowed Viewers" width="1400" height="801" loading="lazy" />}
      >
        Only the people you name get in.
      </Feature>

      <Feature
        id="doors"
        flip
        title="Worlds lead to worlds."
        figure={<img className="feature-photo" src="/images/loft-door.webp" alt="The loft's front door at the end of its hall; its link names the subway station" width="1600" height="780" loading="lazy" />}
      >
        A door in your world names someone else’s, at its own address, the way pages link to pages.
      </Feature>

      <Feature
        id="yours"
        light
        title="It’s yours."
        figure={<WorldDocument caption={'A whole world, with a door in it: 1,119 bytes. Add /index.veml to any published world’s address and read it.'} />}
      >
        Plain files at your own address, in an open format, on any host you like. <Link to="/technology">How it works &rarr;</Link>
      </Feature>

      <section className="section" id="start">
        <div className="container">
          <div className="grid-3-steps closing-cards">
            {DEMO_WORLD_URL && (
              <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="card closing-card">
                <span className="closing-title">Walk into a world</span>
                <p>The loft, in a new tab.</p>
              </a>
            )}
            <a href={WORLDHUB_URL} target="_blank" rel="noopener noreferrer" className="card closing-card">
              <span className="closing-title">Find worlds on WorldHub</span>
              <p>Worlds people have published, at any address.</p>
            </a>
            <Link to="/first-world" className="card closing-card">
              <span className="closing-title">Make a world</span>
              <p>From your scene to a link, step by step.</p>
            </Link>
          </div>
          <p className="founder-line text-center">
            The software is free and open source under MIT, and hosting on WorldHub, our service, costs nothing. <Link to="/about">About &rarr;</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
