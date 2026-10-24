import React from 'react';
import { Link } from 'react-router-dom';
import Slot from '../components/Slot';
import { GITHUB_ORG, CONTACT_EMAIL, WHITE_PAPER } from '../links';

// The words are content/about.md; keep the two in step. The founder's
// name, photo, year and bio are placeholders until he supplies them.
const About = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="page-head">
        <div className="container">
          <h1>About Five Squared Interactive</h1>
          <p>
            An independent studio building the pieces that let a 3D world be a web page: a set of
            files at an address, opened in a browser, linked to other worlds, and owned by whoever
            made it.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container media-row">
          <div className="media-figure media-figure-narrow">
            <Slot label="The founder. A photograph, square, in daylight." ratio="1 / 1" />
          </div>
          <div className="media-text">
            <h2>Who we are</h2>
            <p>
              <strong><span className="ph">[Founder's name]</span></strong>, founder. <span className="ph">[One line in his own words: where he is, what he did before, why this.]</span>
            </p>
            <p>
              Five Squared Interactive is one person and the people who build with him. Small,
              open-source first, building in public since <span className="ph">[year]</span>.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2>What we believe</h2>
          <p>
            A world should outlive the company that helped make it. So the format is open, the page
            that opens worlds is open, hosting is a convenience the design never requires, and the
            design puts nothing of ours between a link and the world it points to. A thousand worlds
            on our servers would mean less to us than one person's world at their own address.
          </p>
          <h2 style={{ marginTop: '2.5rem' }}>How we got here</h2>
          <p>
            We have been building open 3D worlds for the web since <span className="ph">[year]</span>.
            The earlier WebVerse ran as a Windows program and a "Lite" viewer; the format went through
            three versions; the long form of the idea is the 2025 white paper,{' '}
            <a href={WHITE_PAPER} target="_blank" rel="noopener noreferrer">Web Wide Worlds</a>.
            The current generation, rebuilt for the browser, publishes from Blender in one press and
            is being readied for public release; the earlier generation's code is on{' '}
            <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
      </section>

      <section className="section section-light" id="press">
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2>Press</h2>
          <p>Everything here may be used to write about us. Questions and interview requests: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <div className="press-grid">
            <div className="card">
              <h3>In one sentence</h3>
              <p>Five Squared Interactive makes open tools that turn a 3D scene into a web page people walk into together, from a phone or a laptop, with nothing to install.</p>
            </div>
            <div className="card">
              <h3>In a paragraph</h3>
              <p>
                A world made with Five Squared's tools is a small text file and the 3D models it names,
                served from an ordinary web address. Anyone with the link walks in from a browser and
                meets whoever else is there; a door in one world can open onto another, the way pages
                link. Today a Blender user publishes a scene as a world in one press, hosted on the
                company's WorldHub service or on any web host. The format (VEML) and the page that
                opens worlds (WebVerse) are open source under MIT.
              </p>
            </div>
            <div className="card">
              <h3>Pictures</h3>
              <Slot label="Three to five high-resolution screenshots of a published world, on a laptop and a phone." ratio="16 / 9" />
              <p style={{ marginTop: '.75rem' }}>Logos: the Five Squared mark, the WebVerse mark and wordmark, the VEML mark. <span className="ph">[zip to come]</span></p>
            </div>
            <div className="card">
              <h3>Facts</h3>
              <ul className="live-list">
                <li>Founded <span className="ph">[year]</span>, <span className="ph">[place]</span></li>
                <li>Founder: <span className="ph">[name]</span></li>
                <li>Open source under MIT; earlier generation on GitHub</li>
                <li>White paper: Web Wide Worlds, 2025</li>
                <li>Current generation: publishing from Blender, October 2026</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            For the technical story, <Link to="/technology">How it works</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
