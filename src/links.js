// The few addresses the copy points at, in one place.
//
// DEMO_WORLD_URL is a published world that needs no sign-in and stays up:
// the "walk into one" link on the home page and the client's site. The
// loft, published from Blender with Save and Publish on 2026-10-25. Set it
// to null and every page that uses it renders without the link rather
// than with a dead one.
// Republished 2026-11-13 at a new address with a door to the subway station
// (the October address belongs to the founder's pre-migration identity and
// cannot be updated; v4-monorepo #873). The old address still serves the
// old loft.
export const DEMO_WORLD_URL = 'https://worlds.worldhub.me/w/w_K1GfSfHUdMIv';

// The public client address: the publish host serves the client's own page
// at /webverse/, and a world served from anywhere opens as
// `${CLIENT_URL}#world-url=<its index.veml, URL-encoded>` (checked in real
// Chrome, 2026-10-22, with a world on GitHub Pages).
export const CLIENT_URL = 'https://worlds.worldhub.me/webverse/index.html';

// The add-on is downloaded from its GitHub repository's releases (founder,
// 2026-11-11: never from the sign-in site). The "latest" link always hands
// out the newest release's zip, so a new release needs no site change.
export const ADDON_REPO = 'https://github.com/Five-Squared-Interactive/WorldKit-VEML-Blender-Plugin';
export const ADDON_ZIP = `${ADDON_REPO}/releases/latest/download/veml-blender-addon.zip`;

// WorldHub's front page: the directory of published worlds at any address
// (live from S3 since 2026-11-02).
export const WORLDHUB_URL = 'https://www.worldhub.me/';

// The GitHub organisation. Founder (2026-10-24): the site never speaks of
// earlier or current generations; the link is simply GitHub.
export const GITHUB_ORG = 'https://github.com/Five-Squared-Interactive';
// The current VEML specification (4.0, with its schema and profiles), on
// GitHub since 2026-11-13. Founder: the site points at the current spec,
// never at "the earlier documents".
export const VEML_SPEC = 'https://github.com/Five-Squared-Interactive/VEML';
export const CONTACT_EMAIL = 'info@fivesquaredinteractive.com';
// Version 2.0, 12 November 2026, the founder's edit of the reviewed draft;
// 1.1 (June 2026) stays in docs/ so links already sent keep working.
export const WHITE_PAPER = '/docs/www_whitepaper_v2.0.pdf';

// A frame of the demo world opened in a browser, for the pages' imagery:
// the loft, shot headless at 1600 by 900 on the day it was published.
export const WORLD_HERO = '/images/world-loft-hero.webp';
// The loft's living room from inside, shot headless on 2026-11-12 with the
// page's own controls cropped off; the frame the home page's walk-in uses.
export const WORLD_ROOM = '/images/world-loft-room.webp';
// The same world with a second visitor standing in the entry hall, their
// name over their head: two headless visitors, shot from the first's eyes.
export const WORLD_TOGETHER = '/images/loft-two-visitors.webp';
export const WORLD_CARD = '/images/world-loft-card.webp';
// The first frame of the hero recording, the same 16:9 shape as the video,
// so the poster and the first frame are one picture.
export const HERO_POSTER = '/images/hero-poster.webp';
export const WORLD_HERO_ALT = 'A loft with a long window over sunlit hills, a sofa and bar stools: a world opened in a browser';
