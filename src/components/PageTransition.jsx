import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Route metadata lives in src/routes.js — the same map the build-time
// prerenderer uses, so client-side navigation and the static HTML agree.
import { ROUTE_TITLES, ROUTE_DESCRIPTIONS } from '../routes.js';

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
    // Normalize: prerendered routes are directories, so GitHub Pages serves
    // them at /path/ (trailing slash) — the metadata maps key on /path.
    const pathname = location.pathname.replace(/\/+$/, '') || '/';

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
