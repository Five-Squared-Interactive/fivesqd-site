# Site copy, v4

Every page's words live here as plain text so they can be read and edited
without touching the React pages. `src/pages/*.jsx` is wired from these
files; `drafts/` holds pages for things that are built but not yet live, and
nothing in `drafts/` is routed or prerendered.

## Live pages (routed)

| file | route | replaces |
|---|---|---|
| `home.md` | `/` | the product carousel and the Git Worlds flow |
| `first-world.md` | `/first-world` | the same guide, with what to do once the world is up |
| `architects.md` | `/private-link` | nothing; `/architects` forwards here since 2026-11-11 |
| `builders.md` | `/doors` | nothing; `/builders` forwards here since 2026-11-11 |
| `how-it-works.md` | `/technology` | the Technology page (git-push diagram, MQTT) |
| `products.md` | `/products` | the five-card product list |
| `worldhub.md` | `/products/worldhub` | the hosting pitch and the pricing table |
| `build-on-it.md` | `/ecosystem` | the Ecosystem page |
| `about.md` | `/about` | About |

`/products/gitworlds` and `/products/worldkit` become forwarding pages
(`REDIRECTS` in `src/routes.js`): Git Worlds to `/first-world`, WorldKit to
`/products#worldkit`. Sent links keep working.

## Drafts (not routed)

| file | goes live when |
|---|---|
| `drafts/published-world-page.md` | the published-world page has Open the document, Download and Edit (v4-monorepo, publish service) |
| `drafts/planets.md` | a planet is published at a public address and a room links to it |
| `drafts/myworlds.md` | MyWorlds on the new stack is live (v4-monorepo #664) |
| `drafts/worldos.md` | the runtime's operator template and plugin guide are public |
| `drafts/worldsync.md` | the protocol document is published outside the private repo |
| `drafts/webverse-desktop.md` | a desktop build is downloadable |

## Rules the copy keeps

- One sentence, everywhere: **a world is a web page.** Say *page*, *world*,
  *link*, and WebVerse or "the page that opens a world" for the thing
  visitors use. Never *client*, *app*, *platform*, *shell*, *metaverse*.
- No new product names. The names are VEML, StraightFour, WebVerse,
  MyWorlds, WorldSync, WorldOS, WorldKit, and the one service, WorldHub
  (with WorldHub ID, Search and MyWorlds as its features). Nothing else.
- A claim comes with a link that proves it, or it waits in `drafts/`.
- Placeholders in braces are filled at deploy: `{DEMO_WORLD_URL}` is a
  public world that needs no sign-in; `{ADDON_URL}` is the add-on download,
  the latest release of the WorldKit-VEML-Blender-Plugin repository on
  GitHub, never the sign-in site.
- Every headline names what the reader wants to do; how it works comes
  second. The pages say what the tooling does and nothing about what it
  does not.
- Nobody is labelled by who they are: no audience names in the nav, page
  names, headings or kickers.

## Brand

Feel: plain, trustworthy, warm. Reference: Obsidian (product first, plain
words, ownership as the point). Light, with a dark mode. Type: Inter for
headlines, Source Sans 3 for body and interface. Neutrals with a slight
warm bias (#fdfcfa / #f6f4ef, text #1f1d1a), not pure white and not cream.
One accent, from the Five Squared mark: indigo #4f46e5 (hover #4338ca; dark
mode #a5b4fc on text, buttons stay #4f46e5). Corners 8px; no pills. The
WebVerse site shares the type and accent on its dark palette.

There is no square WorldOS icon; `icon-worldos.png` in this repo was a copy
of the WorldKit icon and must not be used for WorldOS.

## Placeholders

The pages carry labelled placeholder slots (`src/components/Slot.jsx`,
`[slot]` in these files) for pictures and recordings still to be made, and
`[ph]` spans for facts still to be supplied. `npm run build` prints how many
slots remain; a page with a slot on it is never deployed.

## Nav

WorldHub · How it works · About, plus a Make a world button to the guide.
It is made of the product's parts. The three pages under it are named by
what they show. `/products` forwards to How it works, which lists the
pieces by name; "Build on it" is linked from How it works and the footer.

## Facts the copy rests on

Exact names and claims, checked against the software and the live
services. Re-check them before changing a page; they change.

- `{DEMO_WORLD_URL}` is the loft, a textured scene published from Blender
  with Save and Publish. "Walk in" opens it; the hero's first button goes
  to the directory on WorldHub.
- The directory at www.worldhub.me lists worlds at any address. The home
  page's closing card and the "Explore worlds on WorldHub" buttons link to
  it.
- A relay forwards bytes where a network blocks a direct connection. How
  it works says so beside the introduction service; the relay cannot read
  what it forwards.
- The add-on's panel: the box is **Save as My World**, the button in it is
  **Save and Publish**, and the box has one tick, **Only People I Allow**,
  off by default; ticking it shows an **Allowed Viewers** field for email
  addresses. The copy says exactly that.
- Signed-in visitors appear under their own names.
- Phone controls are two sticks: left moves, right looks.
- "Phones, laptops and headsets": people can be in a world together on a
  headset, and the copy says that and no more about headsets.
- "Models from SketchUp, Revit or Rhino come in through Blender's own
  importers." The copy stops there.
- The published world's page has a "What is this?" box with three links:
  **Open the document**, **Download this world** (the world's files as one
  zip) and **Make your own** (to /first-world). The guide names the three
  and the Blender **Link** field, nothing more.
- A door opens into the world it names (checked live both ways between the
  loft and the subway station, 2026-11-15).
- The loft's own document is 1,119 bytes: a title, the room, one sky, one
  entry point, one model, and a door to the subway station.
- The subway station is the CC BY 4.0 "Subway station" by Pasha
  (https://skfb.ly/pByQU); every page that shows it carries the credit.
- "Open source under MIT, on GitHub", and GitHub links say "GitHub". The
  VEML specification is in the VEML repository as `VEML.md`, `VEML.xsd`
  and `profiles/`; the site links it (`VEML_SPEC` in `src/links.js`).
- The white paper is version 2.0, 12 November 2026
  (`public/docs/www_whitepaper_v2.0.pdf`; `WHITE_PAPER` in `src/links.js`).
  1.1 stays in `docs/` so sent links keep working. The site may cite the
  paper but never claims more than it does.
- The ecosystem page keeps its sections (the banner, The Ecosystem Is
  Yours, How to Get Involved, Where You Fit In, What's Already Here, Let's
  Build Together); see `build-on-it.md`.
- A world served from your own host must allow cross-origin reads
  (`Access-Control-Allow-Origin: *`; GitHub Pages does, a bucket needs a
  CORS rule). Kept for the developer guide.
- The e-mail is `info@fivesquaredinteractive.com`.
- The social preview is `og-world-is-a-page.png`.
