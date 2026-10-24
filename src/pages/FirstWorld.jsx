import React from 'react';
import Slot from '../components/Slot';
import { ADDON_ZIP, WORLD_CARD } from '../links';

// The first-world guide: from a Blender scene to a link anyone can walk into.
// The words are content/first-world.md; keep the two in step. The add-on zip
// is built by the sign-in site (it carries that site's publishable key,
// never committed), so the link points there.
//
// Each step has room for a screenshot (the `shot` slot): the Add-ons list,
// the Sign In button, the Save as My World box, the Entry Point tick, the
// Link field, the world in a browser tab. They do not exist yet; when they
// do, pass `shot={{ src, alt }}` and nothing else changes.
const listStyle = { paddingLeft: '1.25rem', margin: '0 0 1rem', lineHeight: 1.7, fontSize: '1.125rem' };
const kbd = {
  display: 'inline-block',
  padding: '0 0.4em',
  border: '1px solid currentColor',
  borderRadius: '4px',
  fontFamily: 'inherit',
  fontSize: '0.85em',
  lineHeight: 1.5,
  opacity: 0.85,
};
const K = ({ children }) => <kbd style={kbd}>{children}</kbd>;

const Step = ({ title, shot, shotLabel, children }) => (
  <div className="card step-card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
    <h2 style={{ marginTop: 0, fontSize: '1.5rem' }}>{title}</h2>
    {shot ? <img className="step-shot" src={shot.src} alt={shot.alt} loading="lazy" /> : shotLabel ? <Slot label={shotLabel} className="step-slot" /> : null}
    {children}
  </div>
);

const FirstWorld = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section hero-split">
        <div className="container media-row">
          <div className="media-text">
            <p className="kicker">Blender artists</p>
            <h1>A render flattens what you built.</h1>
            <p className="lead">
              Send the place instead. Press Save and Publish in Blender and your scene becomes a
              link. Anyone who opens it walks around inside, on a phone or a laptop, with whoever
              else is there. Nothing for them to install.
            </p>
            <div className="hero-actions-left">
              <a href={ADDON_ZIP} className="btn btn-primary btn-large">Get the add-on</a>
              <a href="#watch" className="btn btn-secondary btn-large">Watch it, 20 seconds</a>
            </div>
            <p className="hero-note">Free and open source. Blender 4.5 or newer.</p>
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
        </div>
      </section>

      <section className="page-head" id="guide">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>The full guide</h2>
          <p>Every step, with what you will see on screen.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '760px' }}>
          <Step title="1. What you need">
            <ul style={listStyle}>
              <li>
                Blender 4.5 or newer, free from{' '}
                <a href="https://www.blender.org/download/" target="_blank" rel="noopener noreferrer">blender.org</a>.
              </li>
              <li>
                The add-on: <a href={ADDON_ZIP}>download</a>. It uses{' '}
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> to build your
                world; if Node.js is not installed, the panel offers <strong>Get Node.js</strong>.
              </li>
            </ul>
          </Step>

          <Step title="2. Install the add-on" shotLabel="Blender's Add-ons list with the VEML add-on ticked.">
            <ol style={listStyle}>
              <li>In Blender: <strong>Edit → Preferences → Add-ons</strong>.</li>
              <li>
                Open the menu at the top right and choose <strong>Install from Disk…</strong>, then pick the file you
                downloaded.
              </li>
              <li>Tick <strong>VEML Import/Export</strong> to turn it on.</li>
            </ol>
            <p>Already had an older version? Remove it first, then install this one.</p>
          </Step>

          <Step title="3. Sign in once" shotLabel="The add-on's Sign In button, and the browser tab it opens.">
            <p>
              In the add-on's preferences, press <strong>Sign In</strong>. Your browser opens WorldHub; sign in with
              Google, GitHub, or a link we email you, and Blender picks it up on its own. You stay signed in; there is
              a <strong>Sign Out</strong> beside it.
            </p>
          </Step>

          <Step title="4. Publish" shotLabel="The Save as My World box with Save and Publish, cropped at 2x.">
            <p>
              Save your .blend file, then open the <strong>Scene</strong> tab of the Properties editor and find the{' '}
              <strong>VEML World</strong> panel. In its <strong>Save as My World</strong> box, press{' '}
              <strong>Save and Publish</strong>. The first time takes a little longer. When it is done, your world
              opens in the browser. If you are not signed in, the box offers <strong>Sign In</strong> right there.
            </p>
            <p>
              Where do people start? Select a camera, open its <strong>Object</strong> tab, and tick{' '}
              <strong>VEML Entry Point</strong> in the <strong>VEML Entity</strong> panel. Otherwise they start at the
              scene's camera.
            </p>
          </Step>

          <Step title="5. Who may enter" shotLabel="The Everyone / Only People I Allow choice with a viewers list.">
            <p>
              In the same box, <strong>Everyone</strong> lets anyone with the link in. <strong>Only People I Allow</strong>{' '}
              asks visitors to sign in and admits the people on your list. Visitors who are signed in appear under
              their own names.
            </p>
          </Step>

          <Step title="6. Share" shotLabel="The world open in a browser tab, address bar visible.">
            <p>
              The address your world opened at is the one to share, for example{' '}
              <code>https://worlds.worldhub.me/w/…</code>. Anyone can open it in a browser; nothing to install. Press
              Save and Publish again and the same address shows the new version.
            </p>
          </Step>

          <Step title="Walking around" shotLabel="The world on a phone, held in a hand, both sticks showing.">
            <ul style={listStyle}>
              <li>Click in the world to look around with the mouse; <K>Esc</K> gives the mouse back.</li>
              <li>
                <K>W</K> <K>A</K> <K>S</K> <K>D</K> to move, <K>Space</K> to jump.
              </li>
              <li>
                <K>F</K> to fly, where the world allows it: <K>Space</K> up, <K>Shift</K> down.
              </li>
              <li><K>H</K> shows these again.</li>
              <li>
                On a phone or tablet: the left stick moves, the right stick looks, and the Jump, Chat and Fly buttons
                sit above them.
              </li>
            </ul>
          </Step>

          <Step title="Now look at what you made">
            <p>Your world is a web page.</p>
            <ul style={listStyle}>
              <li>
                <strong>Read it.</strong> Add <code>/index.veml</code> to your world's address and the document opens
                as text: the title, the starting point, the sky, the model. That is the whole world.
              </li>
              <li>
                <strong>Link it to another world.</strong> Select an object in Blender, open its VEML Entity panel,
                and put another world's address in the <strong>Link</strong> field. Walk up to it in your world and
                you step into theirs. That is how one world becomes part of many.
              </li>
              <li>
                <strong>Change it.</strong> Change the scene in Blender and press Save and Publish again; the same
                address shows the new version. (Editing the document on the page itself, and downloading the folder
                to host it elsewhere, are coming.)
              </li>
            </ul>
          </Step>
        </div>
      </section>
    </div>
  );
};

export default FirstWorld;
