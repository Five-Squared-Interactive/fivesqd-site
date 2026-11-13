# How it works (/technology)

This file is the words twin of `src/pages/Technology.jsx`; keep them in
step. The page absorbed the former "What we make" page (2026-10-24): a
visitor meets each piece where it does its job, and the product names
are labels, not a grid. Founder, 2026-11-12: this page is about the
technology, not Blender; nothing on it implies leaving your editor or
your existing worlds behind, and WorldOS is described as what it is.

## Head

**How it works.** A world is a set of files at a web address, the way a
web page is. A page opens it; the visitors' pages talk to each other; a
door leads to the next world. It is built so you can share the worlds you
already have and make new ones with the tools you already use.

## The same parts as the web

Each part of a world is the part of a web page it stands in for. *(The
table: an HTML file / a VEML file; a browser / a browser running WebVerse,
itself a page; a web server / the same web server; a link / a door; view
source / add /index.veml to the address.)*

## The file

A world is a folder: one small text file in **VEML** (to a world what HTML
is to a page) that says what is in the world and where, plus the 3D
models it refers to in glTF, the standard model file that 3D tools already
export. That is the whole world. One line names the sky, one the model,
one says where a visitor starts, and a door to another world is one more
line.

Because the world is files, it has no server of its own. It is served the
way a web page is served, through the same addresses and the same hosts.
A world written for next year's WebVerse still opens in this year's,
because anything the page does not understand it leaves alone.

*(Beside this: the loft's whole document, door included, 1,119 bytes, plus
the three files it names.)*

## How a link works

A scene becomes a folder. The folder gets an address. The address opens
anywhere. *(The drawing: A scene, in the tool you already use, exported
one way → A folder, index.veml and assets/model.glb, plain files → An
address, worlds.worldhub.me/w/…, hosted for you today → a browser, any
device, drawn as a laptop and a phone. Foot: no account and no install to
visit; the files are served like any page, and any host can serve them.)*

## The page that opens it

**WebVerse** is a web page that loads a 3D engine and opens the world at
the address in its link. The browser supplies the rest: the back button,
history, bookmarks, the address bar. It runs on a phone, a laptop and a
headset's browser, and it is what a published world's link opens. Under
it is **StraightFour**, the engine: rendering, loading, physics, and a
sandbox that keeps a world's scripts away from your device and your data.
You meet the engine only if you build a page of your own.

## Being there together

When two people open the same world, their pages find each other and
share what moved, through **WorldSync**. Nothing passes through us but
the introduction, and the world's files are untouched. WorldSync is the
default, not a requirement: a world can name a different sync protocol in
its file. *(Founder, 2026-11-12: the longer version was "too clunky".
Source: the VEML schema's synchronization-service element, with its
required `type`; declarations sharing an id form a fallback group.)*

## Worlds with state of their own

Some worlds have shared state that has to live somewhere: things people
place that stay placed, a world edited while others are in it, a world
fed by other systems. **WorldOS** is the runtime that holds it, with
plugins for what the world does. A world with WorldOS is still files at
an address. *(Founder, 2026-11-12: "most worlds do not need it" is not
needed. Source:
docs/design/worldos-design.md §1 in the monorepo. Founder, 2026-11-12:
"a score, a simulation, live terrain" was wrong for WorldOS, and the
first rewrite was "too wordy".)*

## Making worlds with the tools you already use

Keep your editor and the worlds you have. **WorldKit** is the set of
exporters that turn a scene into a world from the tool you already work
in. The first is the Blender add-on; models from other tools come in
through Blender. Published worlds are hosted on **WorldHub**, our one
service, which also signs you in and lets you choose who may enter.
[About WorldHub](/products/worldhub) *(Founder, 2026-11-12: the first
rewrite was "too wordy".)*

## The pieces, by name

Open source under MIT. *(Six tiles with the marks:)*
VEML, the format: the file that says what is in a world and where ·
WebVerse, the page that opens a world; what every published link opens ·
StraightFour, the engine under that page: rendering, physics, the script
sandbox · WorldSync, being there together: the visitors' pages exchange
what moved · WorldOS, the runtime for worlds with live, shared state that
something must own · WorldKit, the exporters: worlds from the tools you
already use, starting with Blender.
[On GitHub]({GITHUB_ORG})

## For developers: a world at your own address

Because a world is files, it can live anywhere a web page can: your own
domain, GitHub Pages, a bucket. Put the folder there and open it with
WebVerse pointed at it:

`https://worlds.worldhub.me/webverse/index.html#world-url=` followed by
your world's `index.veml` address, URL-encoded. Your host serves the
world, the page's host serves the page, and the two never need to be the
same. *(The cross-origin header a host must send is a fact for the
developer guide, not this page; it is in content/README.md.)*
Want to build on the pieces, or put your own things in a world?
[Build on it](/ecosystem)

## Questions people ask

- **Hasn't 3D on the web been tried?** Yes, in the nineties, when it
  needed a plugin and a computer that could not keep up. Today a phone
  renders a world in the browser with nothing installed, and a world is
  one export away from a scene in a tool you already use. The technology
  stopped being the problem; the plain path from a scene to a link was
  what was missing.
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

The long form is in the white paper, version 2.0 (November 2026):
[Web Wide Worlds](/docs/www_whitepaper_v2.0.pdf). *(1.1 stays in docs/ so
sent links keep working; the "predates the current page" caveat went with
it.)* [Make a world](/first-world) · [Build on it](/ecosystem)
