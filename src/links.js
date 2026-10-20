// The few addresses the copy points at, in one place.
//
// DEMO_WORLD_URL is a published world that needs no sign-in and stays up:
// the "walk into one" link on the home page and the client's site. Null
// until there is one; every page that uses it renders without the link
// rather than with a dead one (content/README.md, "Facts to confirm").
export const DEMO_WORLD_URL = null;

// A public client address, so a world served from anywhere opens as
// `${CLIENT_URL}#world-url=<its index.veml>`. Null until one is deployed;
// the own-address page (content/drafts/own-address.md) waits on it.
export const CLIENT_URL = null;

// The add-on zip is built by the sign-in site because it carries that
// site's publishable key, which is never committed; it stays there.
export const ADDON_ZIP = 'https://id.worldhub.me/download/veml-blender-addon.zip';

// The earlier generation's code. The current generation's public release
// is being prepared; until it exists this link is labelled as what it is.
export const GITHUB_ORG = 'https://github.com/Five-Squared-Interactive';
export const CONTACT_EMAIL = 'info@fivesquaredinteractive.com';
export const WHITE_PAPER = '/docs/www_whitepaper_v1.1.pdf';

// A frame of a real world opened in the client, for the pages' imagery.
export const WORLD_HERO = '/images/world-overlook-hero.webp';
export const WORLD_CARD = '/images/world-overlook-card.webp';
export const WORLD_HERO_ALT = 'A cabin at sunset with a campfire and trees: The Overlook, a world opened in the client';
