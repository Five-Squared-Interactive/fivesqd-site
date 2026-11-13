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
  *link*, *client*. Never *app*, *platform*, *shell*, *metaverse*.
- No new product names. The names are VEML, StraightFour, WebVerse,
  MyWorlds, WorldSync, WorldOS, WorldKit, and the one service, WorldHub
  (with WorldHub ID, Search and MyWorlds as its features). Nothing else.
- A claim comes with a link that proves it, or it waits in `drafts/`.
- Placeholders in braces are filled at deploy: `{DEMO_WORLD_URL}` is a
  public world that needs no sign-in; `{ADDON_URL}` is the add-on download,
  the latest release of the WorldKit-VEML-Blender-Plugin repository on
  GitHub (founder, 2026-11-11: never the sign-in site).

## Brand (founder, 2026-10-24, brand interview)

Feel: plain, trustworthy, warm. Reference: Obsidian (product first, plain
words, ownership as the point). Light, with a dark mode. Type: Inter for
headlines (since 2026-11-11; Bricolage Grotesque's "f" looked odd to the
founder), Source Sans 3 for body and interface. Neutrals with a slight warm bias
(#fdfcfa / #f6f4ef, text #1f1d1a), not pure white and not cream. One
accent, from the Five Squared mark: indigo #4f46e5 (hover #4338ca; dark
mode #a5b4fc on text, buttons stay #4f46e5). Corners 8px; no pills. The
WebVerse site shares the type and accent on its dark palette.

## Say what it enables (founder, 2026-10-24)

"Talking about what you can't do doesn't belong. This should be about what
our tooling enables." No "not yet", "coming", "next" or "today … until"
on any page. What is unbuilt is simply absent; what is built is stated
exactly. The honesty rule stays: never claim what the code cannot do. The
list of held-back facts below is for us, not for the pages.

## Burning problems, three audiences (founder, 2026-10-24)

"We are showing cool technology instead of showing how we solve burning
problems." Three audiences: Blender modellers; architecture and real
estate; people who want to make multiplayer worlds. The home names the
pain they share (nobody can walk through the space you built without
installing something), shows the fix once, and sends each to a page in
their own words: architects.md, first-world.md, builders.md. Each page
leads with the pain, shows the fix, says what it costs, and lists what
works today and what does not yet. The idea ("a world is a web page") is
the reason to trust us, not the opener.

## Meet people where they are (founder, 2026-10-24)

"We need to meet people where they are at rather than making them care
about things they don't." Nobody wants a link, a format or a world; they
want to show someone the place they made and have them feel it, or to be
somewhere with a friend. Every headline names that motive; the mechanism
(a link, no app, plain files) is the reason it works and comes second.
A line that sells the mechanism ("a world is a web page", "a place you
can walk into, from a link") is a draft, not a headline.

## Audience (founder, 2026-10-24)

Agreed order, after the founder found the drafts "very difficult to
understand for a random person": (1) a Blender user or 3D artist with a
scene and someone to show it to; (2) a curious person who was sent a link
to a world and clicked through to find out what it was; then (3)
developers who might build on the open pieces; (4) press or a partner
trying to understand the company in two minutes. The page shows the thing
moving before it explains what it is; the thesis ("a world is a web
page") comes after the visitor has seen a world, not before. Every copy
round is judged first from a publicist's point of view (what a stranger
thinks in five seconds), then by the engineering review.

Brand assets live in the founder's OneDrive, `Five Squared Interactive/`
`Logos` and `Media` (wordmarks for WorldHub, WorldKit, WorldOS, the Five
Squared marks, the AWE press kit, the founder bio, the June 2026
pamphlet). There is no square WorldOS icon; `icon-worldos.png` in this
repo was a copy of the WorldKit icon and must not be used for WorldOS.

## Placeholders (2026-10-24)

The pages carry labelled placeholder slots (`src/components/Slot.jsx`,
`[slot]` in these files) for every picture or recording only the founder
can make, and `[ph]` spans for facts only he can supply (his name, photo,
the year, the place). They exist so he can judge the shape before the
assets exist. `npm run build` prints how many slots remain; a page with a
slot on it is never deployed.

Nav since 2026-11-11: WorldHub · How it works · About, plus a Make a world
button to the guide (a Get the add-on button that downloaded the zip
"doesn't seem right", founder). It is made of the product's parts; the
audience items (Architects, Blender artists, World builders) that stood
there for two weeks are gone, with their kickers and page titles, after
the founder: "overtly having architects, blender artists ... tells me that
you are not supplied with the correct skills to do this right." The three
pages are named by what they show. "What we make" is gone (/products
forwards to How it works, which lists the pieces by name); "Build on it"
stays a page linked from How it works and the footer but is out of the nav
until a spec, repo or protocol document is public (founder to confirm).

## Facts to confirm at deploy

- `{DEMO_WORLD_URL}`: a world published without sign-in, that stays up,
  and worth looking at. The demo-worlds living room on GitHub Pages opens
  through the client address (`CLIENT_URL`), but its textures are missing,
  so it is not the first thing a visitor should see.
- The directory at www.worldhub.me lists worlds at any address
  (v4-monorepo #662), live from S3 since 2026-11-02; the sign-in site
  followed on 2026-11-11. The home page's closing card and the "Explore
  worlds on WorldHub" buttons link to it; the WorldHub page itself no
  longer has a Search section, and its description says so.
- A relay forwards bytes where a network blocks a direct connection: live
  since 2026-10-25 (a visitor asking the rendezvous for a room is handed
  Cloudflare TURN credentials; checked from outside). How it works says
  so beside the introduction service; the relay cannot read what it
  forwards.
- The add-on's panel: the box is **Save as My World**, the button in it is
  **Save and Publish**, and the box has one tick, **Only People I Allow**,
  off by default; ticking it shows an **Allowed Viewers** field for email
  addresses. There is no "Everyone" control (checked 2026-11-11 in the
  shipped zip's `veml_scene_panel.py` and `veml_scene_properties.py`, and
  on the monorepo's main). The copy says exactly that.
- Signed-in visitors appear under their own names: the publish service's
  world page looks a verified visitor's display name up once at sign-in
  and hands it to the page as `visitor-name`
  (`services/worldhub-publish/src/server.ts`, `VisitorNameLookup`). The
  client alone shows no trace of this, so check the service before cutting
  the claim.
- Phone controls are two sticks (left moves, right looks), not a drag; the
  client's own hint is the source.
- "Phones, laptops and headsets": the page that opens a world has a VR
  entry (`apps/webverse/src/xr/`: enterVrButton, immersiveSession,
  vrLocomotion, vrPointer on main), so being in a world together on a
  headset is supportable. In a headset the chat is read-only
  (`messages/vrMessagesHud.ts`: "sending from a headset is not supported
  yet"), so the copy never says you can chat from a headset.
- "Models from SketchUp, Revit or Rhino come in through Blender's own
  importers": a claim about Blender's importers (glTF, FBX, OBJ and the
  rest), not about the publish path, which exports whatever the Blender
  scene holds. The copy stops there; it does not say "as glTF or FBX".
- The published world's page has a "What is this?" box with three links,
  live since 2026-10-25: **Open the document**, **Download this world**
  (the world's files as one zip) and **Make your own** (to /first-world).
  There is no "Edit"; the guide names the three and the Blender **Link**
  field, nothing more. The box can be closed; it returns on the next visit.
- Founder, 2026-10-24: the site never speaks of "earlier" or "current"
  generations; it confuses a stranger and serves no purpose. GitHub links
  say "GitHub". (The v4 code is not public yet; the GitHub organisation
  holds the open code that exists. We say "open source under MIT, on
  GitHub" and no more.) Founder, 2026-11-13: the CURRENT VEML specification
  (4.0 draft, schema, profiles) is on GitHub in the VEML repository, with
  3.0 under its own folder; the site links it (`VEML_SPEC`) and never says
  the earlier documents are there.
- The e-mail is `info@fivesquaredinteractive.com`, the one the live site uses.
- Pictures made on 2026-11-12 without the founder: the loft from inside
  and a second visitor with their name label, shot headless with two
  visitors in the world (the second takes about half a minute to appear;
  the phone view never finishes loading headless, so the phone picture
  needs a real phone); the six Blender panels, shot by a script that
  opened the loft scene in Blender 4.5, filtered the Properties editor to
  VEML, scrolled in steps and screenshotted the area, with tooltips off
  and nothing saved (Only People I Allow ticked and two example viewers
  for the shot only). Scripts: the session scratchpad's `loftshots.cjs`
  and `blendershots.py`. `loft-link-in-browser.webp` (Home, "Make it,
  send it") is the top 1400 by 780 of `loft-browser-tab.webp`, the loft
  in a Chrome guest window with its address showing, captured 2026-11-13.
- The white paper is version 2.0, 12 November 2026
  (`public/docs/www_whitepaper_v2.0.pdf`; `WHITE_PAPER` in `src/links.js`),
  the founder's edit of a reviewed draft; the source is in the company
  OneDrive's Papers folder. 1.1 stays in `docs/` so sent links keep
  working. The paper says in its abstract what is live and writes the
  rest as design; the site may cite it but never claims more than it does.
- Imagery: the hero and the WebVerse card are the loft, a textured scene
  the founder published from Blender with Save and Publish on 2026-10-25
  (`public/images/world-loft-*.webp`, shot headless the same day), and
  `DEMO_WORLD_URL` is its address, so "Walk into one now" and "Walk in"
  open it. The "world and document" pair on Home shows the loft beside
  the loft's own document (1,119 bytes, fetched from its address on
  2026-11-13: a title, the room, one sky, one entry point, one model, and
  a door whose link leads to the subway station), so the pair is one
  world. The loft was republished on 2026-11-13 at
  `w_K1GfSfHUdMIv` with its front door linked to the station
  (`w_cVo42GFe5Tm3`, the CC BY "Subway station" by Pasha, with a door
  back); the October address `w_jpR9xNJ0pb9q` belongs to the founder's
  pre-migration identity and cannot be updated, so it stays as it was.
  Today the door opens an empty world because the client fetches the
  station's page as its document (v4-monorepo #873); the door clip waits
  for that fix, and until then the copy says a door "names" or "shows
  where it leads", never that you step through (review of 2026-11-13).
- The subway station is the CC BY 4.0 "Subway station" by Pasha
  (https://skfb.ly/pByQU); every page that shows it carries the credit.
- A world served from your own host must allow cross-origin reads
  (`Access-Control-Allow-Origin: *`; GitHub Pages does, a bucket needs a
  CORS rule). True, and kept here for the developer guide; the founder
  took it off How it works on 2026-11-12 as a detail that page does not
  need.
- The client's host answers `X-Frame-Options: SAMEORIGIN`, so a world
  cannot be embedded in this site; the Walk-in frame opens the client in a
  new tab. An inline embed needs the publish service to send
  `frame-ancestors https://fivesqd.com` instead (v4-monorepo #739).
- The add-on's File > Export > Export VEML is the legacy (VEML 3)
  exporter (entities, VEML 3); the 4.0 publish path is Save and Publish
  only. So the copy never tells a Blender user to "export the folder" to
  their own host; it says that step waits on the published page's download. Every first-world step has its Blender
  screenshot (taken 2026-11-12 and 2026-11-13; the Add-ons list is cropped
  to the list itself, below Blender's own warning row). The social preview is
  `og-world-is-a-page.png`.
