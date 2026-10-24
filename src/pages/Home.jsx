import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import WorldDocument from '../components/WorldDocument';
import DoorDiagram from '../components/DoorDiagram';
import { DEMO_WORLD_URL, WORLD_CARD, WORLD_HERO_ALT } from '../links';

// The words are content/home.md; keep the two in step. The shape (founder,
// 2026-10-24, "think about how Steve Jobs sold products"): one human image
// of the benefit, then show it, then one confident idea per screen, then
// how easy it is, then the twist. No arguing with sceptics on this page;
// their questions are answered on How it works. Slots mark the pictures
// and recordings only the founder can make.
const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section hero-split">
        <div className="container media-row">
          <div className="media-text">
            <h1>Send a place, not a picture.</h1>
            <p className="lead">
              You made a space in Blender. With one press it becomes a world your friends can stand
              in, from a phone or a laptop, by opening a link.
            </p>
            <div className="hero-actions-left">
              <Link to="/first-world" className="btn btn-primary btn-large">Make a world from Blender</Link>
              {DEMO_WORLD_URL
                ? <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">Walk into one</a>
                : <a href="#watch" className="btn btn-secondary btn-large">Watch it, 20 seconds</a>}
            </div>
            <p className="hero-note">Free and open source. Nothing to install.</p>
          </div>
          <div className="media-figure" id="watch">
            <Slot
              kind="video"
              label="20 seconds, muted, looping: a Blender scene, Save and Publish, the link appears, a phone opens it, a second person walks in, both step through a door into another world."
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
              No app. No account. No download. Anyone you send it to walks in, on a phone, a laptop
              or a headset, the moment they tap it.
            </p>
          </div>
          <div className="media-figure">
            <Slot label="A phone in a hand: a message thread with the link, and the world open under it." ratio="4 / 3" />
          </div>
        </div>
      </section>

      <section className="section big-row" id="together">
        <div className="container media-row flip">
          <div className="media-figure">
            <Slot label="Two visitors in one world with their name labels, a phone and a laptop side by side." />
          </div>
          <div className="media-text">
            <h2 className="big">You're there together.</h2>
            <p className="lead">
              Whoever opens the link is in the room with you. Show them around. Talk. Point at
              things. You choose who may come in.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light big-row" id="yours">
        <div className="container media-row">
          <div className="media-text">
            <h2 className="big">It's yours.</h2>
            <p className="lead">
              A world is a web page: a few files at an address. Host it anywhere. Change it with a
              text editor. Put a door in it that opens onto a friend's world.
            </p>
          </div>
          <div className="media-figure">
            <Slot label="Three seconds: walking through a door into a different world, with the address bar changing." kind="video" />
            <div className="slot-standin">
              <DoorDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="steps">
        <div className="container">
          <div className="text-center mb-4">
            <h2>How easy is it?</h2>
            <p className="section-subtitle">Three steps. The third one is sending a link.</p>
          </div>
          <div className="grid-3-steps">
            <div className="step-tile">
              <Slot label="The add-on panel in Blender, cropped at 2x, with Save and Publish visible." ratio="4 / 3" />
              <h3><span className="step-n">1</span> Install the add-on</h3>
              <p>Blender 4.5 or newer. Sign in once.</p>
            </div>
            <div className="step-tile">
              <Slot label="The link that appears after Save and Publish, as the add-on shows it." ratio="4 / 3" />
              <h3><span className="step-n">2</span> Press Save and Publish</h3>
              <p>Your scene becomes a world at its own web address and opens in your browser.</p>
            </div>
            <div className="step-tile">
              <Slot label="The same world on a phone, held in a hand, with the two sticks showing." ratio="4 / 3" />
              <h3><span className="step-n">3</span> Send the link</h3>
              <p>That's it. People walk in.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/first-world" className="btn btn-primary">The step-by-step guide</Link>
          </div>
        </div>
      </section>

      <section className="section section-light" id="document">
        <div className="container">
          <div className="text-center mb-4">
            <p className="kicker">One more thing</p>
            <h2>A world is a web page.</h2>
            <p className="section-subtitle">
              Not a figure of speech. This is the whole of a published world: one small text file, one model, one sky.
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
            Which means the world is not inside anyone's app, ours included. It links, it can be
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
