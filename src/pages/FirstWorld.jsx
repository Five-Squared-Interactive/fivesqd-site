import React from 'react';

// The first-world guide: from a Blender scene to a link anyone can walk into.
// It lived on id.worldhub.me (the sign-in site) because that site's build
// makes the add-on zip; the guide belongs with the rest of the product here.
// The zip itself stays where it is built: it carries the sign-in service's
// publishable key, which is never committed, so it cannot be a file in this repo.
const ADDON_ZIP = 'https://id.worldhub.me/download/veml-blender-addon.zip';

// A step's title is a card heading, not a page section: the site's h2 is sized
// for sections. Lists match the paragraphs' size and indent.
const listStyle = { paddingLeft: '1.25rem', margin: '0 0 1rem', lineHeight: 1.7, fontSize: '1.125rem' }; // the site's paragraph size (App.css `p`)
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

const Step = ({ title, children }) => (
  <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
    <h3 style={{ marginTop: 0, fontSize: '1.35rem' }}>{title}</h3>
    {children}
  </div>
);

const FirstWorld = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="section">
        <div className="container text-center">
          <h1>Your First World</h1>
          <p className="section-subtitle">From a Blender scene to a link anyone can walk into.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '760px' }}>
          <Step title="1. Get Blender">
            <p>
              Blender 4.5 or newer, free from{' '}
              <a href="https://www.blender.org/download/" target="_blank" rel="noopener noreferrer">blender.org</a>.
              You also need{' '}
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> installed; the
              add-on uses it to build your world.
            </p>
          </Step>

          <Step title="2. Install the add-on">
            <p>
              <a className="btn btn-primary" href={ADDON_ZIP} download>
                Download the add-on
              </a>
            </p>
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

          <Step title="3. Sign in">
            <p>
              In the add-on's preferences, press <strong>Sign In</strong>. Your browser opens WorldHub; sign in with
              Google, GitHub, or a link we email you, and Blender picks it up on its own. You stay signed in; there is
              a <strong>Sign Out</strong> beside it.
            </p>
          </Step>

          <Step title="4. Save as My World">
            <p>
              Save your .blend file, then open the <strong>Scene</strong> tab of the Properties editor and find the{' '}
              <strong>VEML World</strong> panel. Press <strong>Save as My World</strong>.
            </p>
            <p>
              The first time takes a little longer. When it is done, your world opens in the browser. If you are not
              signed in, the panel offers <strong>Sign In</strong> right there, and the world publishes once you are.
            </p>
            <p>
              Where do people start? Select a camera, open its <strong>Object</strong> tab, and tick{' '}
              <strong>VEML Entry Point</strong> in the <strong>VEML Entity</strong> panel. Otherwise they start at the
              scene's camera.
            </p>
          </Step>

          <Step title="5. Share it">
            <p>
              The address your world opened at is the one to share, for example{' '}
              <code>https://worlds.worldhub.me/w/…</code>. Anyone can open it in a browser; nothing to install. Press
              Save as My World again and the same address shows the new version.
            </p>
          </Step>

          <Step title="Walking around">
            <ul style={listStyle}>
              <li>Click in the world to look around with the mouse; <K>Esc</K> gives the mouse back.</li>
              <li>
                <K>W</K> <K>A</K> <K>S</K> <K>D</K> to move, <K>Space</K> to jump.
              </li>
              <li>
                <K>F</K> to fly, where the world allows it: <K>Space</K> up, <K>Shift</K> down.
              </li>
              <li><K>H</K> shows these again.</li>
              <li>On a phone or tablet: drag to look, and use the on-screen stick to move.</li>
            </ul>
          </Step>
        </div>
      </section>
    </div>
  );
};

export default FirstWorld;
