# How it works

A world is a document at a URL, the way a web page is. Four pieces open
it, move it, and let people be in it together. A world that is only
visited needs the first two.

*(A row of four steps with icons: Document → Client → Together → Runtime,
the last marked "only some worlds".)*

## The document

A world is a folder: one file in **VEML**, a small XML format that says what
is in the world and where, plus the models it refers to, in glTF, the
standard 3D file format. That is the whole world. A line of VEML names the
sky; another names the model; another says where a visitor starts; a door to
another world is one more line. Anything a client does not understand it
ignores, so a world written for next year's client still opens in this
year's.

Because the world is files, it has no server of its own. It is served the
way a web page is served, through the same URLs, the same DNS, the same
caching.

*(Beside this: the living room's whole document, as text.)*

## For developers: a world at your own address

Because a world is files, it can live anywhere a web page can: your own
domain, GitHub Pages, a bucket. Put the folder there and open it with the
client's page pointed at it:

`https://worlds.worldhub.me/webverse/index.html#world-url=` followed by
your world's `index.veml` address, URL-encoded. Your host serves the
world, the client's host serves the client, and the two never need to be
the same. Because the client reads the world from another origin, your
host must allow cross-origin reads (`Access-Control-Allow-Origin: *`):
GitHub Pages does; a bucket needs a CORS rule. A world published through
WorldHub is the same thing with the
hosting done for you.

## The client

**WebVerse** is the client: a web page that loads the engine and opens the
world at the address in its URL. The browser supplies the rest: the back
button, history, bookmarks, the address bar. It runs on a phone, a laptop
and a headset's browser, and it is what a published world's link opens.

Under the client is **StraightFour**, the engine: rendering, loading,
physics, the scripting sandbox. You meet it only if you build a client of
your own.

## Being there together

When two people open the same world, their clients find each other and
exchange what moved, through **WorldSync**. The clients talk to each other
directly; a small introduction service, ours by default, only helps them
find each other and holds nothing afterwards. The world itself is
unchanged; the files are still the source of truth. *(When a network keeps
two visitors apart, a relay forwards their bytes; it is built and goes live
with its key.)*

## A world with its own logic

Some worlds keep a score, run a simulation, reshape their terrain, or
listen to a sensor: things no single visitor owns. Those run on
**WorldOS**, a small runtime of plugins that the world's document names.
Most worlds do not need it, and a world that does is still a document at a
URL.

## Making worlds

**WorldKit** is the name for the tools that produce the files: today the
Blender add-on, which exports a scene as a world and publishes it in one
press. The export is one way: Blender stays the editor of the scene, the
world is what it exports.

## The pieces, by name

Open source under MIT. *(Six tiles with the marks:)*
VEML, the format: the file that says what is in a world and where ·
WebVerse, the page that opens a world; what every published link opens ·
StraightFour, the engine under that page: rendering, physics, the script
sandbox · WorldSync, being there together: the visitors' pages exchange
what moved · WorldOS, for the few worlds with their own logic · WorldKit,
the authoring tools; today the Blender add-on.

## Questions people ask

- **Hasn't 3D on the web been tried?** Yes, in the nineties, when it
  needed a plugin and a computer that could not keep up. Today a phone
  renders a world in the browser with nothing installed, and a world is
  one press away from a Blender scene. The technology stopped being the
  problem; the plain path from a scene to a link was what was missing.
- **Is this the metaverse?** No. The metaverse pitch wanted everyone to
  move in somewhere. We want a place to be as easy to make and share as a
  web page: you send it, people visit, they leave. No shared substrate, no
  land, no company that every world must pass through, including ours.
- **Why not a render, a spinning model, or a game build?** A render is a
  picture. A model viewer spins an object; nobody stands in it. A game
  build is a download that runs on one kind of computer and cannot link
  to anything. A world is the place itself, at an address, with the people
  you sent it to inside it.
- **What happens to my world if Five Squared disappears?** It is plain
  files at an address, in an open format, and the page that opens them is
  open source under MIT.

## What this adds up to

- Nothing to install to visit. The link opens in a browser.
- Built to outlive us: the format is open, the page is open, and a world
  is plain files at an address.
- An unvisited world costs nothing: it is a folder.
- Worlds link to worlds. The web's graph, in 3D.

The long form is in the white paper (2025): [Web Wide Worlds](/docs/www_whitepaper_v1.1.pdf).
Some of its details predate the current client; the principles are the
same.
