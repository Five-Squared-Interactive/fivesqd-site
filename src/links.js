// The few addresses the copy points at, in one place.
//
// DEMO_WORLD_URL is a published world that needs no sign-in and stays up:
// the "walk into one" link on the home page and the client's site. The
// loft, published from Blender with Save and Publish on 2026-10-25. Set it
// to null and every page that uses it renders without the link rather
// than with a dead one.
export const DEMO_WORLD_URL = 'https://worlds.worldhub.me/w/w_jpR9xNJ0pb9q';

// The public client address: the publish host serves the client's own page
// at /webverse/, and a world served from anywhere opens as
// `${CLIENT_URL}#world-url=<its index.veml, URL-encoded>` (checked in real
// Chrome, 2026-10-22, with a world on GitHub Pages).
export const CLIENT_URL = 'https://worlds.worldhub.me/webverse/index.html';

// The add-on zip is built by the sign-in site because it carries that
// site's publishable key, which is never committed; it stays there.
export const ADDON_ZIP = 'https://id.worldhub.me/download/veml-blender-addon.zip';

// The GitHub organisation. Founder (2026-10-24): the site never speaks of
// earlier or current generations; the link is simply GitHub.
export const GITHUB_ORG = 'https://github.com/Five-Squared-Interactive';
export const CONTACT_EMAIL = 'info@fivesquaredinteractive.com';
export const WHITE_PAPER = '/docs/www_whitepaper_v1.1.pdf';

// A frame of the demo world opened in a browser, for the pages' imagery:
// the loft, shot headless at 1600 by 900 on the day it was published.
export const WORLD_HERO = '/images/world-loft-hero.webp';
export const WORLD_CARD = '/images/world-loft-card.webp';
export const WORLD_HERO_ALT = 'A loft with a long window over sunlit hills, a sofa and bar stools: a world opened in a browser';
