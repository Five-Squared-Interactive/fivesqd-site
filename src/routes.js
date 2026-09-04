/**
 * The single source of truth for the site's routes and their metadata.
 *
 * Consumed in two places:
 *  - PageTransition.jsx keeps title/canonical/OG in sync during client-side
 *    navigation;
 *  - scripts/prerender.mjs writes a REAL file per route at build time, so
 *    every URL returns HTTP 200 with the route's title, description, and
 *    fully rendered content. Crawlers, unfurlers, and link checkers read
 *    status codes and static HTML, not a hydrated SPA — a soft-404 that
 *    "looks fine" in a browser is still a dead link to them.
 *
 * Adding a page? Add its <Route> in App.jsx AND an entry here — the
 * prerenderer and the client meta stay in sync automatically.
 */

const DEFAULT_TITLE = 'Five Squared Interactive';
const DEFAULT_DESCRIPTION =
  'Open tools for building and exploring 3D worlds on the web. WebVerse, WorldHub, WorldOS, and more.';

/** Content routes: prerendered to `<path>/index.html` with this metadata. */
export const ROUTES = [
  { path: '/', title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  {
    path: '/products',
    title: 'Products — Five Squared Interactive',
    description: 'Explore Five Squared products: WebVerse, WorldHub, WorldOS, WorldKit, and Git Worlds.',
  },
  {
    path: '/products/worldhub',
    title: 'WorldHub — Five Squared Interactive',
    description: 'WorldHub — managed hosting for persistent digital worlds.',
  },
  {
    path: '/products/worldkit',
    title: 'WorldKit — Five Squared Interactive',
    description: 'WorldKit — developer tools for building worlds: WorldOS, WorldSync, editor, templates.',
  },
  {
    path: '/products/gitworlds',
    title: 'Git Worlds — Five Squared Interactive',
    description: 'Git Worlds — fork a template, edit VEML, push to deploy. Build 3D worlds with just Git.',
  },
  {
    path: '/technology',
    title: 'Technology — Five Squared Interactive',
    description: 'The architecture, standards, and components behind Web Wide Worlds.',
  },
  {
    path: '/ecosystem',
    title: 'Ecosystem — Five Squared Interactive',
    description: 'The Web Wide Worlds ecosystem: how the open pieces fit together.',
  },
  {
    path: '/about',
    title: 'About — Five Squared Interactive',
    description: 'About Five Squared Interactive — building open tools for 3D worlds on the web.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy — Five Squared Interactive',
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service — Five Squared Interactive',
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/isemv2025',
    title: 'ISEMV 2025 — Five Squared Interactive',
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/isemvdemo',
    title: 'ISEMV Demo — Five Squared Interactive',
    description: DEFAULT_DESCRIPTION,
  },
];

/**
 * Old URLs that were handed out and now live elsewhere. Each gets a REAL
 * 200 page that immediately forwards (meta refresh + JS + visible link) —
 * a sent link is never allowed to rot into a 404.
 */
export const REDIRECTS = {
  '/webwideworlds': '/technology',
  '/worldos': '/products/worldkit#worldos',
  '/worldsync': '/products/worldkit#worldsync',
};

export const ROUTE_TITLES = Object.fromEntries(ROUTES.map((r) => [r.path, r.title]));
export const ROUTE_DESCRIPTIONS = Object.fromEntries(
  ROUTES.map((r) => [r.path, r.description]),
);
export { DEFAULT_TITLE, DEFAULT_DESCRIPTION };
