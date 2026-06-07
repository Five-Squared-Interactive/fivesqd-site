import React from 'react';

const WorldHub = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Hero */}
      <section className="section-hero">
        <div className="container text-center">
          <img src="/images/icon-worldhub.png" alt="WorldHub" style={{ width: '80px', height: '80px', marginBottom: '1rem' }} />
          <h1 style={{ color: 'white' }}>WorldHub</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
            Managed hosting for persistent digital worlds. Built and operated by Five Squared Interactive.
          </p>
        </div>
      </section>

      {/* What is WorldHub */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>What is WorldHub?</h2>
              <p>
                WorldHub is the hosted way to run Web Wide Worlds. It runs on the same open WorldOS
                you can self-host — but with zero infrastructure to manage.
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Persistent world storage and hosting</li>
                <li>User management and authentication</li>
                <li>World discovery and sharing</li>
                <li>MyWorlds — your managed world dashboard</li>
              </ul>
            </div>
            <div>
              <div style={{
                width: '100%',
                height: '300px',
                background: 'var(--color-bg-alt)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                border: '2px dashed var(--color-border)',
                fontSize: '0.9rem'
              }}>
                WorldHub dashboard preview coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section-light" id="pricing">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Pricing</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Start free. Scale when you need to.</p>
          </div>

          <div className="grid grid-3">
            {/* Free tier */}
            <div className="card text-center">
              <h3>Free</h3>
              <div className="pricing-amount">$0<span className="pricing-period">/mo</span></div>
              <ul className="pricing-features">
                <li>1 world</li>
                <li>100 MB storage</li>
                <li>Community support</li>
              </ul>
              <button className="btn btn-secondary" disabled aria-disabled="true">Get Started</button>
              <p className="visually-hidden">This plan is coming soon.</p>
            </div>

            {/* Pro tier */}
            <div className="card text-center" style={{ border: '2px solid var(--color-primary)' }}>
              <h3>Pro</h3>
              <div className="pricing-amount">TBD<span className="pricing-period">/mo</span></div>
              <ul className="pricing-features">
                <li>Unlimited worlds</li>
                <li>10 GB storage</li>
                <li>Priority support</li>
              </ul>
              <button className="btn btn-primary" disabled aria-disabled="true">Get Started</button>
              <p className="visually-hidden">This plan is coming soon.</p>
            </div>

            {/* Ultra tier */}
            <div className="card text-center">
              <h3>Ultra</h3>
              <div className="pricing-amount">TBD<span className="pricing-period">/mo</span></div>
              <ul className="pricing-features">
                <li>Unlimited worlds</li>
                <li>100 GB storage</li>
                <li>Dedicated support</li>
              </ul>
              <button className="btn btn-secondary" disabled aria-disabled="true">Get Started</button>
              <p className="visually-hidden">This plan is coming soon.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Planet add-ons available. Pricing details coming soon.
            </p>
            <span className="coming-soon-badge" style={{ marginTop: '0.5rem', display: 'inline-block' }}>Coming soon</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldHub;
