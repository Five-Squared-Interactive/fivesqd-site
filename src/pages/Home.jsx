import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const HERO_PRODUCTS = [
  {
    id: 'webverse', name: 'WebVerse', tagline: 'The world browser',
    description: 'A desktop and web client for exploring digital worlds. Load any world via URL — like a web browser, but for 3D spaces.',
    cta: 'Get WebVerse', link: 'https://webverse.fivesqd.com', external: true,
    image: '/images/webverse-hero.webp',
    gradient: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)',
  },
  {
    id: 'worldhub', name: 'WorldHub', tagline: 'Build your own worlds',
    description: 'Host, manage, and share your worlds with zero infrastructure. Persistent storage, user management, and discovery built in.',
    cta: 'Learn More', link: '/products/worldhub',
    image: '/images/worldhub-hero.png',
    bgPosition: 'center top',
    gradient: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)',
  },
  {
    id: 'worldos', name: 'WorldOS', tagline: 'Server framework',
    description: 'A modular runtime that manages execution and coordination between applications inside and across worlds.',
    cta: 'View on GitHub', link: 'https://github.com/Five-Squared-Interactive/WorldOS', external: true,
    image: '/images/worldos-hero.webp',
    bgPosition: 'center top',
    gradient: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)',
  },
  {
    id: 'worldkit', name: 'WorldKit', tagline: 'Developer tooling',
    description: 'The developer toolchain for building worlds. World Builder, WorldOS, WorldSync, and starter templates.',
    cta: 'Learn More', link: '/products/worldkit',
    image: '/images/worldkit-hero.webp',
    bgPosition: 'center top',
    gradient: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)',
  },
  {
    id: 'gitworlds', name: 'Git Worlds', tagline: 'Forkable starter worlds',
    description: 'Template worlds you can fork, remix, and deploy. Version-controlled, collaborative, open.',
    cta: 'Get Started', link: '/products/gitworlds',
    image: '/images/gitworlds-hero.webp',
    bgPosition: 'center top',
    gradient: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)',
  },
];

const DWELL_TIME = 5000;

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % HERO_PRODUCTS.length);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(advance, DWELL_TIME);
    return () => clearInterval(timer);
  }, [paused, advance, reducedMotion]);

  const shouldLoad = (i) => {
    if (i === active) return true;
    if (i === (active + 1) % HERO_PRODUCTS.length) return true;
    if (i === (active - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length) return true;
    return false;
  };

  return (
    <div
      className="hero-showcase"
      aria-roledescription="carousel"
      aria-label="Featured products"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Background layers — only load active + adjacent */}
      {HERO_PRODUCTS.map((p, i) => (
        <div
          key={p.id}
          className={`hero-showcase-bg ${i === active ? 'active' : ''}`}
          style={shouldLoad(i) ? { backgroundImage: `url(${p.image})`, ...(p.bgPosition && { backgroundPosition: p.bgPosition }) } : undefined}
        />
      ))}

      {/* Gradient overlay for active product */}
      {HERO_PRODUCTS.map((p, i) => (
        <div
          key={`grad-${p.id}`}
          className={`hero-showcase-gradient ${i === active ? 'active' : ''}`}
          style={{ background: p.gradient }}
        />
      ))}

      {/* Content overlay */}
      <div className="hero-showcase-content">
        <div className="hero-showcase-inner">
          {HERO_PRODUCTS.map((p, i) => {
            const Tag = p.external ? 'a' : Link;
            const props = p.external
              ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: p.link };

            return (
              <div
                key={p.id}
                className={`hero-showcase-slide ${i === active ? 'active' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${HERO_PRODUCTS.length}: ${p.name}`}
                aria-hidden={i !== active}
              >
                <div className="hero-showcase-badge">
                  <img src={`/images/icon-${p.id}.png`} alt="" width="32" height="32" />
                  <span>{p.name}</span>
                </div>
                <p className="hero-showcase-tagline">{p.tagline}</p>
                <p className="hero-showcase-desc">{p.description}</p>
                {p.comingSoon ? (
                  <span className="hero-showcase-cta coming-soon">Coming soon</span>
                ) : (
                  <Tag className="hero-showcase-cta" tabIndex={i === active ? 0 : -1} {...props}>{p.cta} &rarr;</Tag>
                )}
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="hero-showcase-dots" role="tablist" aria-label="Slide controls">
          {HERO_PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              className={`hero-showcase-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${p.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Full-bleed product showcase */}
      <HeroCarousel />

      {/* Title band */}
      <section className="hero-title-band">
        <div className="container">
          <h1 className="fade-in-up">Web Wide Worlds</h1>
          <p className="fade-in-up">
            An open framework for building and exploring persistent 3D worlds.
          </p>
          <div className="hero-actions fade-in-up">
            <Link to="/products" className="btn btn-primary btn-large">Explore Products</Link>
            <Link to="/technology" className="btn btn-secondary btn-large">See How It Works</Link>
          </div>
        </div>
      </section>

      {/* Git Worlds workflow */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>From Template to Live World</h2>
            <p className="section-subtitle">
              Git Worlds are template worlds you can fork and make your own — in five steps.
            </p>
          </div>

          <div className="gradient-steps">
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">🌍</div>
              <h3>Browse</h3>
              <p>Pick a starter world from the Git Worlds gallery.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">🔀</div>
              <h3>Fork</h3>
              <p>One click to copy it to your own GitHub repo.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">✏️</div>
              <h3>Edit</h3>
              <p>Change the markup, add scripts, drop in 3D models — it's your world now.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">🚀</div>
              <h3>Push</h3>
              <p>Commit and push. Your world goes live on GitHub Pages automatically.</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-icon" aria-hidden="true">🔗</div>
              <h3>Share</h3>
              <p>Send anyone the link. They open it in WebVerse — no install needed.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/products/gitworlds" className="btn btn-primary">Start from a Template</Link>
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>An Open Ecosystem</h2>
          </div>

          <div className="grid grid-3">
            <div className="card text-center">
              <h3>Bridges, Not Walls</h3>
              <p>Web Wide Worlds connects the tools you already use. It's not another closed platform. It's the open layer between them.</p>
              <Link to="/technology">
                See the Architecture
              </Link>
            </div>
            <div className="card text-center">
              <h3>Plug In Anything</h3>
              <p>Every layer is swappable. Bring your own renderer, your own server, your own sync protocol.</p>
              <a href="https://github.com/Five-Squared-Interactive" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
            <div className="card text-center">
              <h3>Yours to Keep</h3>
              <p>You own your worlds — the code, the data, the hosting. No one can pull the rug.</p>
              <a href="/docs/www_whitepaper_v1.1.pdf" target="_blank" rel="noopener noreferrer">
                Read the White Paper
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem invitation */}
      <section className="section">
        <div className="container text-center">
          <h2>Built for Everyone</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Web Wide Worlds is open — create worlds, bring in what you've built, or build something entirely new. The whole stack is MIT-licensed and yours to extend.
          </p>
          <Link to="/ecosystem" className="btn btn-primary">Join the Ecosystem</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
