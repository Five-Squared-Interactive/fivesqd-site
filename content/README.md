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
  public world that needs no sign-in; `{ADDON_URL}` is the add-on download.

## Facts to confirm at deploy

- `{DEMO_WORLD_URL}`: a world published without sign-in, that stays up.
  Today's only public static world is the demo-worlds living room on
  GitHub Pages, and the client address its README gives (`/app/`) is a 404.
- `worldhub.md` says Search lists worlds at any address: that is the new
  directory (v4-monorepo #662), live once the sites deploy from CI (#667).
  Until then www.worldhub.me is the earlier site.
- `how-it-works.md` says a relay forwards bytes where a network stands in
  the way: merged, live once the TURN key is on the box (#683).
- Requiring sign-in for a world with an allow-list exists but is set by
  the operator, not by the author, so the copy does not offer it.
- The e-mail is `info@fivesquaredinteractive.com`, the one the live site uses.
