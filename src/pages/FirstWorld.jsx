import React from 'react';
import Slot from '../components/Slot';
import { ADDON_ZIP, WORLD_CARD } from '../links';

// The first-world guide: from a Blender scene to a link anyone can walk into.
// The words are content/first-world.md; keep the two in step. The add-on zip
// is the latest release of its GitHub repository (ADDON_ZIP in links.js).
//
// Each step has room for a screenshot (`shot={{ src, alt }}`, or a `shotLabel`
// slot until one exists). The Blender ones were taken on 2026-11-12 from the
// loft scene with a script that switched the panels and scrolled; two slots
// remain, the browser tab with its address bar and the phone with both sticks.
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
    <h3 style={{ marginTop: 0, fontSize: '1.5rem' }}>{title}</h3>
    {shot ? <img className={shot.portrait ? 'step-shot step-shot-portrait' : 'step-shot'} src={shot.src} alt={shot.alt} loading="lazy" /> : shotLabel ? <Slot label={shotLabel} className="step-slot" /> : null}
    {children}
  </div>
);

const FirstWorld = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section hero-split">
        <div className="container media-row">
          <div className="media-text">
            <h1>A render flattens what you built.</h1>
            <p className="lead">
              Send the place instead. Press Save and Publish in Blender and your scene becomes a
              link. Anyone who opens it walks around inside, on a phone or a laptop, with whoever
              else is there. Nothing for them to install.
            </p>
            <div className="hero-actions-left">
              <a href={ADDON_ZIP} className="btn btn-primary btn-large">Get the add-on</a>
              <a href="#watch" className="btn btn-secondary btn-large">See it in action</a>
            </div>
            <p className="hero-note">Free and open source. Blender 4.5 or newer.</p>
          </div>
          <div className="media-figure" id="watch">
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={WORLD_CARD} aria-label="A phone standing in the loft as a second visitor walks in; then the one press in Blender that published it, and the browser opening the world">
              <source src="/video/hero.webm" type="video/webm" />
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section section-light" id="steps">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Three steps from your scene to a link</h2>
          </div>
          <div className="grid-3-steps">
            <div className="step-tile">
              <img className="tile-img" src="/images/blender-save-as-my-world.webp" alt="The Save as My World box in Blender with the Save and Publish button" width="1400" height="723" loading="lazy" />
              <h3><span className="step-n">1</span> Install the add-on</h3>
              <p>Blender 4.5 or newer. Sign in once with Google, GitHub or an emailed link.</p>
            </div>
            <div className="step-tile">
              <img className="tile-img" src="/images/blender-link-appears.webp" alt="The Save as My World box after Save and Publish, with the World Address filled in" width="1400" height="807" loading="lazy" />
              <h3><span className="step-n">2</span> Press Save and Publish</h3>
              <p>Your scene becomes a world at its own web address and opens in your browser.</p>
            </div>
            <div className="step-tile">
              <img className="tile-img" src="/images/loft-phone.webp" alt="The loft on a phone screen, with the two sticks" width="780" height="1688" loading="lazy" />
              <h3><span className="step-n">3</span> Send the link</h3>
              <p>Paste it in a message. Whoever taps it walks in.</p>
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
          <Step title="What you need">
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

          <Step title="Install the add-on" shot={{ src: '/images/blender-addons-list.webp', alt: "Blender's Preferences, Add-ons, filtered to VEML: the VEML Import/Export add-on, ticked" }}>
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

          <Step title="Sign in once" shot={{ src: '/images/blender-sign-in.webp', alt: "The add-on's preferences in Blender, with the Sign In and Sign Out buttons" }}>
            <p>
              In the add-on's preferences, press <strong>Sign In</strong>. Your browser opens WorldHub; sign in with
              Google, GitHub, or a link we email you, and Blender picks it up on its own. You stay signed in; there is
              a <strong>Sign Out</strong> beside it.
            </p>
          </Step>

          <Step title="Publish" shot={{ src: '/images/blender-save-as-my-world.webp', alt: 'The Save as My World box in the Scene tab, with the Save and Publish button' }}>
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
            <img className="step-shot" src="/images/blender-entry-point.webp" alt="An object's VEML Entity panel with VEML Entry Point ticked" loading="lazy" />
          </Step>

          <Step title="Who may enter" shot={{ src: '/images/blender-only-people-i-allow.webp', alt: 'The Save as My World box with Only People I Allow ticked and two addresses in Allowed Viewers' }}>
            <p>
              Leave <strong>Only People I Allow</strong> unticked and anyone with the link gets in. Tick it, and
              visitors are asked to sign in; the people on your <strong>Allowed Viewers</strong> list get in, nobody
              else. Visitors who are signed in appear under their own names.
            </p>
          </Step>

          <Step title="Share" shot={{ src: '/images/loft-browser-tab.webp', alt: 'The loft open in a Chrome tab, its address in the address bar' }}>
            <p>
              The address your world opened at is the one to share, for example{' '}
              <code>https://worlds.worldhub.me/w/…</code>. Anyone can open it in a browser; nothing to install. Press
              Save and Publish again and the same address shows the new version.
            </p>
          </Step>

          <Step title="Walking around" shot={{ src: '/images/loft-phone.webp', alt: 'The loft on a phone screen: the left stick, the right stick, and the Jump, Fly and Chat buttons', portrait: true }}>
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
                On a phone or tablet: the left stick moves, the right stick looks, <strong>Jump</strong> and{' '}
                <strong>Fly</strong> sit above the right stick, and <strong>Chat</strong> is at the top.
              </li>
            </ul>
          </Step>

          <Step title="Now look at what you made">
            <p>Your world is a web page.</p>
            <ul style={listStyle}>
              <li>
                <strong>Read it.</strong> In the corner of your world's page, <strong>What is this?</strong> opens to
                three links: <strong>Open the document</strong> shows the text behind the world (its title, where you
                start, the sky, the model; that is the whole world), <strong>Download this world</strong> hands you
                its files as one zip, and <strong>Make your own</strong> brings people here. Or add{' '}
                <code>/index.veml</code> to the address yourself.
              </li>
              <li>
                <strong>Link it to another world.</strong> Select an object in Blender, open its VEML Entity panel,
                and put another world's address in the <strong>Link</strong> field. In your world it lights up when
                you look at it; click it, or tap it on a phone, and you step into theirs. That is how one world
                becomes part of many.
                <img className="step-shot" src="/images/blender-link-field.webp" alt="An object's VEML Entity panel with the Portal section and its Link field" loading="lazy" />
              </li>
              <li>
                <strong>Change it.</strong> Change the scene in Blender and press Save and Publish again; the same
                address shows the new version.
              </li>
            </ul>
          </Step>
        </div>
      </section>
    </div>
  );
};

export default FirstWorld;
