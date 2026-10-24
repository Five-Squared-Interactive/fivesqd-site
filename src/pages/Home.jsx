import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import WorldDocument from '../components/WorldDocument';
import DoorDiagram from '../components/DoorDiagram';
import { DEMO_WORLD_URL, WORLD_CARD, WORLD_HERO_ALT } from '../links';

// The words are content/home.md; keep the two in step. This is the
// company's page, written from the visitor's side (founder, 2026-10-24:
// the site is all of Five Squared; the add-on gets its own page). One
// human image of the benefit, show it, one idea per screen, how to make
// one, the twist. The five-second test of 2026-10-24 (content/reviews/)
// set the words: "a link", "walk into", "together", never "world" in the
// first screen. Slots mark pictures and recordings only the founder can
// make.
const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section hero-split">
        <div className="container media-row">
          <div className="media-text">
            <h1>A place you can walk into, from a link.</h1>
            <p className="lead">
              Open it on your phone or laptop and you are standing inside, together with whoever
              else is there. No app. And it belongs to whoever made it: plain files at a web
              address, like any page.
            </p>
            <div className="hero-actions-left">
              {DEMO_WORLD_URL
                ? <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Walk into one now</a>
                : <a href="#watch" className="btn btn-primary btn-large">Watch it, 20 seconds</a>}
              <Link to="/first-world" className="btn btn-secondary btn-large">Make one from Blender</Link>
            </div>
            <p className="hero-note">Free and open source. Nothing for visitors to install.</p>
          </div>
          <div className="media-figure" id="watch">
            <Slot
              kind="video"
              label="20 seconds, muted, looping. Open on the payoff: a phone opens a link and is standing in a place; a second person walks in; they step through a door into another place; then, briefly, the Blender scene it came from and the Publish press."
              poster={WORLD_CARD}
            />
          </div>
        </div>
      </section>

      <section className="section section-light big-row" id="link">
        <div className="container media-row">
          <div className="media-text">
            <h2 className="big">It's a link.</h2>
            <p className="lead">
              No app. No account. No download. Anyone who has it walks in, on a phone, a laptop or a
              headset, the moment they tap it.
            </p>
          </div>
          <div className="media-figure">
            <Slot label="A phone in a hand: a message thread with the link, and the place open under it." ratio="4 / 3" />
          </div>
        </div>
      </section>

      <section className="section big-row" id="together">
        <div className="container media-row flip">
          <div className="media-figure">
            <Slot label="Two visitors in one place with their name labels, a phone and a laptop side by side." />
          </div>
          <div className="media-text">
            <h2 className="big">You're there together.</h2>
            <p className="lead">
              Whoever opens the link is in the room with you. Show them around. Talk. Point at
              things. The maker chooses who may come in.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light big-row" id="yours">
        <div className="container media-row">
          <div className="media-text">
            <h2 className="big">It's yours.</h2>
            <p className="lead">
              A place you made is a web page: a few files at an address. Host it anywhere. Change
              it with a text editor. Put a door in it that opens onto a friend's place.
            </p>
          </div>
          <div className="media-figure">
            <Slot label="Three seconds: walking through a door into a different place, with the address bar changing." kind="video" />
            <div className="slot-standin">
              <DoorDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="section big-row" id="make">
        <div className="container media-row flip">
          <div className="media-figure">
            <Slot label="The add-on panel in Blender, cropped at 2x, with Save and Publish visible." ratio="4 / 3" />
          </div>
          <div className="media-text">
            <p className="kicker">Make one</p>
            <h2 className="big">Today, from Blender.</h2>
            <p className="lead">
              Install the add-on, press Save and Publish, and your scene is a link. Hosted for you
              on WorldHub, our service, or on any web host. Other ways in will follow; this one works
              now.
            </p>
            <div className="hero-actions-left">
              <Link to="/first-world" className="btn btn-primary btn-large">Make a world from Blender</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" id="document">
        <div className="container">
          <div className="text-center mb-4">
            <p className="kicker">One more thing</p>
            <h2>A world is a web page.</h2>
            <p className="section-subtitle">
              We call a place a world, and it is not a figure of speech. This is the whole of a published one: one small text file, one model, one sky.
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
          <p className="text-center" style={{ marginTop: '1.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Which means a world is not inside anyone's app, ours included. It links, it can be
            copied, it can be edited, and it will still open long after we are gone.{' '}
            <Link to="/technology">How it works &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section" id="proof">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Live today</h2>
              <ul className="live-list">
                <li>Publish a world from Blender in one press</li>
                <li>Hosted for you at its own address on WorldHub, our service</li>
                <li>People together in a world, on phones and laptops</li>
                <li>Doors between worlds</li>
                <li>Sign in once; choose who may enter</li>
              </ul>
              <h3 style={{ marginTop: '1.5rem' }}>Next</h3>
              <ul className="live-list next">
                <li>A public world to walk into from this page</li>
                <li>Download your world's folder and host it anywhere</li>
                <li>A directory of worlds people choose to list</li>
              </ul>
            </div>
            <div>
              <h2>Open</h2>
              <p>
                The format, the page that opens worlds (WebVerse) and everything under it are open
                source under MIT, on GitHub. Hosting is a convenience we offer; the design never
                requires it.
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
          <h2>Your scene. Their phone. Same room.</h2>
          <Link to="/first-world" className="btn btn-primary btn-large">Make a world from Blender</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
