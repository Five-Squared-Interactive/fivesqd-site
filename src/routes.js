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
  'Easy 3D. Instant. Shared. On any device. Make a place, send the link, and people walk around in it with you, on a phone or laptop. Free and open source.';

/** Content routes: prerendered to `<path>/index.html` with this metadata. */
export const ROUTES = [
  { path: '/', title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  {
    path: '/private-link',
    title: 'A private link for a client - Five Squared Interactive',
    description: 'Clients cannot read plans. Send a private link instead: they walk the space on their phone before it is built, with you in there with them. Nothing for them to install.',
  },
  {
    path: '/doors',
    title: 'A world your friends meet in - Five Squared Interactive',
    description: 'A world of your own at its own web address. Your people walk in from a link, doors point to other worlds, and you do not run a server.',
  },
  {
    path: '/products/worldhub',
    title: 'WorldHub - Five Squared Interactive',
    description: 'WorldHub hosts the worlds you publish from Blender and signs you in. A convenience the design never requires: a world can live at any address.',
  },
  {
    path: '/first-world',
    title: 'Make a world from Blender - Five Squared Interactive',
    description: 'Your Blender scene, as a link friends can walk into. Install the add-on, press Save and Publish, send the link; anyone walks around inside, together, on a phone or a laptop.',
  },
  {
    path: '/technology',
    title: 'How it works - Five Squared Interactive',
    description: 'A world is files at a web address: the VEML file and its models, the WebVerse page that opens it, WorldSync for being there together, WorldOS for worlds with shared state of their own.',
  },
  {
    path: '/ecosystem',
    title: 'Ecosystem - Five Squared Interactive',
    description: 'The ecosystem is yours: create worlds, bring in what you have already built, or build something new. Every layer is MIT-licensed and designed to be extended, replaced, or reimagined.',
  },
  {
    path: '/about',
    title: 'About - Five Squared Interactive',
    description: 'Five Squared Interactive builds the pieces that let a 3D world be a web page, owned by whoever made it.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - Five Squared Interactive',
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service - Five Squared Interactive',
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/isemv2025',
    title: 'ISEMV 2025 - Five Squared Interactive',
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/isemvdemo',
    title: 'ISEMV Demo - Five Squared Interactive',
    description: DEFAULT_DESCRIPTION,
  },
];

/**
 * Old URLs that were handed out and now live elsewhere. Each gets a REAL
 * 200 page that immediately forwards (meta refresh + JS + visible link) —
 * a sent link is never allowed to rot into a 404.
 */
export const REDIRECTS = {
  '/architects': '/private-link',
  '/builders': '/doors',
  '/webwideworlds': '/technology',
  '/worldos': '/technology#worldos',
  '/worldsync': '/technology#worldsync',
  '/products': '/technology#stack',
  '/products/worldkit': '/first-world',
  '/products/gitworlds': '/first-world',
};

export const ROUTE_TITLES = Object.fromEntries(ROUTES.map((r) => [r.path, r.title]));
export const ROUTE_DESCRIPTIONS = Object.fromEntries(
  ROUTES.map((r) => [r.path, r.description]),
);
export { DEFAULT_TITLE, DEFAULT_DESCRIPTION };
