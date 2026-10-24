import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import WorldDocument from '../components/WorldDocument';
import DoorDiagram from '../components/DoorDiagram';
import { DEMO_WORLD_URL, WORLD_CARD, WORLD_HERO_ALT } from '../links';

// The words are content/home.md; keep the two in step. The order follows
// the publicist review of 2026-10-24 (content/reviews/): show the thing,
// then say what it is. Slots mark the pictures and recordings only the
// founder can make.
const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section hero-split">
        <div className="container media-row">
          <div className="media-text">
            <h1>From a Blender scene to a place your friends can walk into.</h1>
            <p className="lead">
              Press Save and Publish, send the link, and people open your world on a phone or a
              laptop and meet you there. Nothing to install. And because a world is a web page, it
              is yours: read it, change it, link it to other worlds.
            </p>
            <div className="hero-actions-left">
              <Link to="/first-world" className="btn btn-primary btn-large">Make a world from Blender</Link>
              {DEMO_WORLD_URL
                ? <a href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">Walk into one</a>
                : <a href="#watch" className="btn btn-secondary btn-large">Watch it in 20 seconds</a>}
            </div>
            <p className="hero-note">Free and open source. Hosted for you on WorldHub, our service, or on any web host.</p>
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

      <section className="section section-light" id="steps">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Three steps</h2>
            <p className="section-subtitle">From a scene on your screen to a place your friends are standing in.</p>
          </div>
          <div className="grid-3-steps">
            <div className="step-tile">
              <Slot label="The add-on panel in Blender, cropped at 2x, with Save and Publish visible." ratio="4 / 3" />
              <h3><span className="step-n">1</span> Install the add-on</h3>
              <p>Blender 4.5 or newer. Sign in once with a WorldHub ID.</p>
            </div>
            <div className="step-tile">
              <Slot label="The link that appears after Save and Publish, as the add-on shows it." ratio="4 / 3" />
              <h3><span className="step-n">2</span> Press Save and Publish</h3>
              <p>Your scene becomes a world at its own web address and opens in your browser.</p>
            </div>
            <div className="step-tile">
              <Slot label="The same world on a phone, held in a hand, with the two sticks showing." ratio="4 / 3" />
              <h3><span className="step-n">3</span> Send the link</h3>
              <p>People walk in from a phone or a laptop. Nothing to install.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/first-world" className="btn btn-primary">The step-by-step guide</Link>
          </div>
        </div>
      </section>

      <section className="section" id="together">
        <div className="container media-row flip">
          <div className="media-figure">
            <Slot label="Two visitors in one world with their name labels, on a phone and a laptop side by side." />
          </div>
          <div className="media-text">
            <h2>Walk in together</h2>
            <p>
              Whoever opens the link is there with you. You see each other move and you can talk.
              On a phone, the left stick walks and the right one looks; on a laptop, the usual keys.
            </p>
            <p>
              You choose who may enter when you publish: everyone with the link, or only the people
              you name.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light" id="doors">
        <div className="container media-row">
          <div className="media-text">
            <h2>Worlds link to worlds</h2>
            <p>
              A door, a sign or a frame in your scene can open onto a friend's world, the way one web
              page links to the next. In Blender, a door is a field on the object: the other world's
              address.
            </p>
            <p>Each world stays at its own address. Nobody owns the map.</p>
          </div>
          <div className="media-figure">
            <Slot label="Three seconds: walking through a door into a different world, with the address bar changing." kind="video" />
            <div className="slot-standin">
              <DoorDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="document">
        <div className="container">
          <div className="text-center mb-4">
            <h2>A world is a web page</h2>
            <p className="section-subtitle">
              That is not a figure of speech. A world is a small text file and the models it names, at a web address, like any page.
            </p>
          </div>
          <div className="world-pair">
            <figure className="world-frame">
              {DEMO_WORLD_URL
                ? <a className="walkin walkin-poster" style={{ backgroundImage: `url(${WORLD_CARD})` }} href={DEMO_WORLD_URL} target="_blank" rel="noopener noreferrer" aria-label={`Walk into ${WORLD_HERO_ALT}, in a new tab`}><span>Walk in</span></a>
                : <Slot label="The published demo world, the same one whose document is shown beside it." poster={WORLD_CARD} ratio="800 / 426" />}
              <figcaption>A world, opened in a browser.</figcaption>
            </figure>
            <WorldDocument caption="Its whole document: 923 bytes, plus one model and one sky image. Add /index.veml to any published world's address and read yours." />
          </div>
          <div className="analogy-mini">
            <div><span>An HTML file</span><span aria-hidden="true">⇄</span><strong>A VEML file</strong></div>
            <div><span>A link to another page</span><span aria-hidden="true">⇄</span><strong>A door to another world</strong></div>
            <div><span>View source</span><span aria-hidden="true">⇄</span><strong>Add /index.veml</strong></div>
          </div>
          <p className="text-center" style={{ marginTop: '1.25rem' }}>
            <Link to="/technology">How it works, in full &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section section-light" id="proof">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Live today</h2>
              <ul className="live-list">
                <li>Publish a world from Blender in one press</li>
                <li>Hosted for you at its own address on WorldHub</li>
                <li>People together in a world, on phones and laptops</li>
                <li>Doors between worlds</li>
                <li>Sign in with a WorldHub ID; choose who may enter</li>
              </ul>
              <h3 style={{ marginTop: '1.5rem' }}>Next</h3>
              <ul className="live-list next">
                <li>A public world to walk into from this page</li>
                <li>Download your world's folder and host it anywhere</li>
                <li>A directory of worlds people choose to list</li>
                <li>The VEML 4.0 specification, published</li>
              </ul>
            </div>
            <div>
              <h2>Open</h2>
              <p>
                The format, the page that opens worlds (WebVerse) and everything under it are open
                source under MIT, on GitHub. Hosting is a convenience we offer; the design never requires it.
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
          <h2>Your scene, as a place people can visit.</h2>
          <Link to="/first-world" className="btn btn-primary btn-large">Make a world from Blender</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
