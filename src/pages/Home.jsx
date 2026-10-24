import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import WorldDocument from '../components/WorldDocument';
import { DEMO_WORLD_URL, WORLD_CARD, WORLD_HERO_ALT } from '../links';

// The words are content/home.md; keep the two in step. Founder,
// 2026-10-24: "we are showing cool technology instead of showing how we
// solve burning problems", and there are three audiences. So: the pain
// they share, the fix shown once, three doors written in each audience's
// words, then why a link, then the idea as the reason to trust us. Slots
// mark pictures and recordings only the founder can make.
const AUDIENCES = [
  {
    to: '/architects',
    who: 'Architects, designers, real estate',
    pain: 'Clients cannot read plans. They find out what they approved after it is built.',
    fix: 'Send a private link. They walk the space on their phone before it exists, with you on the call.',
    slot: 'A kitchen walkthrough on a phone, a plan on the desk behind it.',
  },
  {
    to: '/first-world',
    who: 'Blender artists',
    pain: 'A render flattens the room you built. A game build is a download nobody opens.',
    fix: 'Press Save and Publish. Your scene is a link; people walk around it on their phones.',
    slot: 'A Blender viewport and the same room open on a phone, side by side.',
  },
  {
    to: '/builders',
    who: 'World builders',
    pain: 'Your world lives on someone else’s terms. To make your own you need an engine and a server.',
    fix: 'A world at your own address, people in it together, doors to other worlds. No server to run.',
    slot: 'A group of visitors in a built world, name labels showing, a door in the background.',
  },
];

const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section hero-split">
        <div className="container media-row">
          <div className="media-text">
            <h1>You built a space. Nobody can walk through it without installing something.</h1>
            <p className="lead">
              Send a link instead. They open it on a phone or a laptop and walk around, with you.
              Nothing for them to install. Works from Blender today. Free and open source.
            </p>
            <div className="hero-actions-left">
              {DEMO_WORLD_URL
                ? <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Walk into one now</a>
                : <a href="#watch" className="btn btn-primary btn-large">Watch it, 20 seconds</a>}
              <a href="#for" className="btn btn-secondary btn-large">Is it for me?</a>
            </div>
          </div>
          <div className="media-figure" id="watch">
            <Slot
              kind="video"
              label="20 seconds, muted, looping. Open on the payoff: a phone opens a link and is standing in a room; a second person walks in; then, briefly, the Blender scene it came from and the Publish press."
              poster={WORLD_CARD}
            />
          </div>
        </div>
      </section>

      <section className="section section-light" id="for">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Who it is for</h2>
            <p className="section-subtitle">Three kinds of people have this problem. Pick yours.</p>
          </div>
          <div className="grid-3-steps">
            {AUDIENCES.map((a) => (
              <Link to={a.to} className="card audience-card" key={a.to}>
                <Slot label={a.slot} ratio="4 / 3" />
                <p className="kicker">{a.who}</p>
                <h3>{a.pain}</h3>
                <p>{a.fix}</p>
                <span className="audience-more">Read more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Why a link</h2>
            <p className="section-subtitle">Three things the other ways of showing a space cannot do.</p>
          </div>
          <div className="why-grid three">
            <div className="card">
              <h3>They open it like any link.</h3>
              <p>Group chat, email, a listing page. Whoever taps it is inside, on a phone, a laptop or a headset. No app, no account, no download.</p>
            </div>
            <div className="card">
              <h3>You are in there with them.</h3>
              <p>A picture of a room is not the room. They feel the scale and the light, and you stand next to them and point. You choose who may come in.</p>
            </div>
            <div className="card">
              <h3>Nobody owns it but you.</h3>
              <p>A place is a few files at a web address. Host it with us or anywhere else. Change it. Put a door in it to another place. No platform can take it down.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" id="document">
        <div className="container">
          <div className="text-center mb-4">
            <p className="kicker">Why you can trust it</p>
            <h2>A world is a web page.</h2>
            <p className="section-subtitle">
              Not a figure of speech. This is the whole of a published place: one small text file, one model, one sky. It will open long after we are gone.
            </p>
          </div>
          <div className="world-pair">
            <figure className="world-frame">
              {DEMO_WORLD_URL
                ? <a className="walkin walkin-poster" style={{ backgroundImage: `url(${WORLD_CARD})` }} href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" aria-label={`Walk into ${WORLD_HERO_ALT}, in a new tab`}><span>Walk in</span></a>
                : <Slot label="The published demo world, the same one whose document is shown beside it." poster={WORLD_CARD} ratio="800 / 426" />}
              <figcaption>A world, opened in a browser.</figcaption>
            </figure>
            <WorldDocument caption="Its whole document, 923 bytes. Add /index.veml to any published world's address and read yours." />
          </div>
          <p className="text-center" style={{ marginTop: '1.5rem' }}>
            <Link to="/technology">How it works &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section" id="proof">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Works today</h2>
              <ul className="live-list">
                <li>Publish from Blender in one press</li>
                <li>Hosted at its own address on WorldHub, our service, or on your host</li>
                <li>People together in a place, on phones and laptops</li>
                <li>Doors between places</li>
                <li>Private places: only the people you name may enter</li>
              </ul>
              <h3 style={{ marginTop: '1.5rem' }}>Next</h3>
              <ul className="live-list next">
                <li>A public place to walk into from this page</li>
                <li>Download your place's folder and host it anywhere</li>
                <li>SketchUp in</li>
              </ul>
            </div>
            <div>
              <h2>Free, and open</h2>
              <p>
                The software is free and open source under MIT. No per-seat licence, no app store.
                Hosting is included on WorldHub, or use your own domain.
              </p>
              <p className="founder-line">
                Built by Five Squared Interactive, an independent studio, since <span className="ph">[year]</span>.
                Founder: <span className="ph">[name, one line]</span>. <Link to="/about">About us &rarr;</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container text-center">
          <h2>Send a link, not a render.</h2>
          <Link to="/first-world" className="btn btn-primary btn-large">Start in Blender</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
