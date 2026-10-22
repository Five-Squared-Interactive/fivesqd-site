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

- `{DEMO_WORLD_URL}`: a world published without sign-in, that stays up,
  and worth looking at. The demo-worlds living room on GitHub Pages opens
  through the client address (`CLIENT_URL`), but its textures are missing,
  so it is not the first thing a visitor should see.
- `worldhub.md` says Search lists worlds at any address: that is the new
  directory (v4-monorepo #662), live once the sites deploy from CI (#667).
  Until then www.worldhub.me is the earlier site.
- `how-it-works.md` says a relay forwards bytes where a network stands in
  the way: merged, live once the TURN key is on the box (#683).
- The add-on's panel: the box is **Save as My World**, the button in it is
  **Save and Publish**, and the box offers **Everyone** or **Only People I
  Allow** with a viewers list (checked in the shipped zip's
  `veml_scene_panel.py`). The copy says exactly that.
- Phone controls are two sticks (left moves, right looks), not a drag; the
  client's own hint is the source.
- "Open the document", "Download this world" and "Edit" do not exist on
  the published-world page yet; the copy claims only `/index.veml`, which
  is served today, and the Blender **Link** field.
- The current generation's code is not on GitHub yet; every GitHub link is
  labelled "earlier generation" until the public release exists.
- The e-mail is `info@fivesquaredinteractive.com`, the one the live site uses.
- Imagery: the hero and the WebVerse card are The Overlook, a world opened
  in the client (`public/images/world-overlook-*.webp`, shot 2026-10-20).
  The living room, the Blender demo scene, renders magenta in the corpus
  copy (missing textures) and cannot be shown until a textured scene is
  published. So the "world and document" pair on Home and How it works
  shows The Overlook beside the LIVING ROOM's document, and the captions
  say they are two worlds. The single most valuable deploy task is one
  textured scene published from Blender, with a door in it: it becomes the
  hero, the pair (its own document, link line included) and the demo link.
- The add-on's File > Export > Export VEML is the earlier generation's
  exporter (entities, VEML 3); the 4.0 publish path is Save and Publish
  only. So the copy never tells a Blender user to "export the folder" to
  their own host; it says that step waits on the published page's download. The first-world steps have `shot` slots for Blender
  screenshots nobody has taken yet. The social preview is
  `og-world-is-a-page.png`.
