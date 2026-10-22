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
 * prerenderer and the client meta stay in sync automatically. The words on
 * each page are in content/*.md.
 */

const DEFAULT_TITLE = 'Five Squared Interactive';
const DEFAULT_DESCRIPTION =
  'A world is a web page. Press Save and Publish in Blender, get a link, and anyone walks in from a browser. Open format, open client, nothing to install.';

/** Content routes: prerendered to `<path>/index.html` with this metadata. */
export const ROUTES = [
  { path: '/', title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  {
    path: '/products',
    title: 'What we make — Five Squared Interactive',
    description: 'The open stack (VEML, WebVerse, StraightFour, WorldSync, WorldOS, WorldKit, MyWorlds) and the one service, WorldHub, each as it is today.',
  },
  {
    path: '/products/worldhub',
    title: 'WorldHub — Five Squared Interactive',
    description: 'WorldHub hosts the worlds you publish from Blender, signs you in, and lists worlds people want found. A convenience the design never requires.',
  },
  {
    path: '/first-world',
    title: 'Your first world — Five Squared Interactive',
    description: 'From a Blender scene to a link anyone can walk into: install the add-on, sign in, press Save as My World, share the link, then look at the page you made.',
  },
  {
    path: '/technology',
    title: 'How it works — Five Squared Interactive',
    description: 'A world is a document at a URL: the VEML file and its models, the WebVerse client that opens it, WorldSync for being there together, WorldOS when a world needs a runtime.',
  },
  {
    path: '/ecosystem',
    title: 'Build on it — Five Squared Interactive',
    description: 'Make worlds, put your own things in a world, or build the pieces yourself: everything that opens, moves or syncs a world is MIT-licensed.',
  },
  {
    path: '/about',
    title: 'About — Five Squared Interactive',
    description: 'Five Squared Interactive builds the pieces that let a 3D world be a web page, owned by whoever made it.',
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
  '/worldos': '/technology#worldos',
  '/worldsync': '/technology#worldsync',
  '/products/worldkit': '/products#worldkit',
  '/products/gitworlds': '/first-world',
};

export const ROUTE_TITLES = Object.fromEntries(ROUTES.map((r) => [r.path, r.title]));
export const ROUTE_DESCRIPTIONS = Object.fromEntries(
  ROUTES.map((r) => [r.path, r.description]),
);
export { DEFAULT_TITLE, DEFAULT_DESCRIPTION };
