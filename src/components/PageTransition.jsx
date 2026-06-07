import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_TITLES = {
  '/': 'Five Squared Interactive',
  '/products': 'Products — Five Squared Interactive',
  '/products/worldhub': 'WorldHub — Five Squared Interactive',
  '/products/worldkit': 'WorldKit — Five Squared Interactive',
  '/products/gitworlds': 'Git Worlds — Five Squared Interactive',
  '/technology': 'Technology — Five Squared Interactive',
  '/about': 'About — Five Squared Interactive',
  '/privacy-policy': 'Privacy Policy — Five Squared Interactive',
  '/terms-of-service': 'Terms of Service — Five Squared Interactive',
  '/isemv2025': 'ISEMV 2025 — Five Squared Interactive',
  '/isemvdemo': 'ISEMV Demo — Five Squared Interactive',
};

const ROUTE_DESCRIPTIONS = {
  '/': 'Open tools for building and exploring 3D worlds on the web. WebVerse, WorldHub, WorldOS, and more.',
  '/products': 'Explore Five Squared products: WebVerse, WorldHub, WorldOS, WorldKit, and Git Worlds.',
  '/products/worldhub': 'WorldHub — managed hosting for persistent digital worlds.',
  '/products/worldkit': 'WorldKit — developer tools for building worlds: WorldOS, WorldSync, editor, templates.',
  '/products/gitworlds': 'Git Worlds — fork a template, edit VEML, push to deploy. Build 3D worlds with just Git.',
  '/technology': 'The architecture, standards, and components behind Web Wide Worlds.',
  '/about': 'About Five Squared Interactive — building open tools for 3D worlds on the web.',
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  const wrapperRef = useRef(null);

  // Handle hash fragment scrolling
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is rendered after route change
      const timer = setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const pathname = location.pathname;

    // Update document title
    document.title = ROUTE_TITLES[pathname] || 'Five Squared Interactive';

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `https://fivesqd.com${pathname === '/' ? '' : pathname}`;

    // Update OG meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');

    const title = ROUTE_TITLES[pathname] || 'Five Squared Interactive';
    const desc = ROUTE_DESCRIPTIONS[pathname] || ROUTE_DESCRIPTIONS['/'];

    if (ogTitle) ogTitle.content = title;
    if (ogDesc) ogDesc.content = desc;
    if (ogUrl) ogUrl.content = `https://fivesqd.com${pathname === '/' ? '' : pathname}`;
    if (twTitle) twTitle.content = title;
    if (twDesc) twDesc.content = desc;

    // Focus main content for screen readers / keyboard users
    const main = document.getElementById('main-content');
    if (main) {
      main.tabIndex = -1;
      main.focus({ preventScroll: false });
    }

    // Page transition animation via ref (avoids re-render)
    const el = wrapperRef.current;
    if (el) {
      el.classList.add('page-transition');
      const t = setTimeout(() => el.classList.remove('page-transition'), 300);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
};

export default PageTransition;
