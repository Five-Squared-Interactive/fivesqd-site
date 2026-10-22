import React from 'react';
import { Link } from 'react-router-dom';
import { GITHUB_ORG, CONTACT_EMAIL } from '../links';

// The words are content/about.md; keep the two in step.
const About = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section className="page-head">
        <div className="container">
          <h1>About Five Squared Interactive</h1>
          <p style={{ maxWidth: '680px', margin: '0 auto' }}>
            We build the pieces that let a 3D world be a web page: a document at an address, opened
            in a browser, linked to other worlds, and owned by whoever made it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>What we believe</h2>
              <p>
                A world should outlive the company that helped make it. So the format is open, the
                client is open, hosting is a convenience and never a requirement, and the design puts nothing of
                ours between a link and the world it points to. A thousand worlds on our servers would
                mean less to us than one person's world at their own address.
              </p>
            </div>
            <div>
              <h2>What we make</h2>
              <p>
                The open stack: VEML, WebVerse, StraightFour, WorldSync, WorldOS, and the authoring
                tools under the WorldKit name. One service, WorldHub, which hosts what people publish
                from Blender and signs them in.
              </p>
              <Link to="/products">What we make &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center">
          <h2>Who we are</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem' }}>
            Five Squared Interactive is an independent studio. Small, open-source first, building in
            public.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">Get in touch</a>
            <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Earlier generation on GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
