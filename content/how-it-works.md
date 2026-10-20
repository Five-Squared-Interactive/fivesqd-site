# How it works

A world is a document at a URL, the way a web page is. The pieces below
are what open it, move it and keep it in sync. Most worlds need the first
two and nothing else.

## The document

A world is a folder: one file in **VEML**, a small XML format that says what
is in the world and where, plus the models it refers to, in glTF, the
standard 3D file format. That is the whole world. A line of VEML names the
sky; another names the model; another says where a visitor starts; another
links to a different world. Anything a client does not understand it
ignores, so a world written for next year's client still opens in this
year's.

Because the world is files, it has no server of its own. It is served the
way a web page is served: by any web host, through the same URLs, the same
DNS, the same caching. If you can put a folder on the web, you can host a
world.

## The client

**WebVerse** is the client: a web page that loads the engine and opens the
world at the address in its URL. The browser supplies the rest: the back
button, history, bookmarks, the address bar. It runs on a phone, a laptop
and a headset browser alike, and it is what a published world's link
opens.

Under the client is **StraightFour**, the engine: rendering, loading,
physics, the scripting sandbox. It is a library the client links against;
you only meet it if you build a client of your own.

## Being there together

When two people open the same world, their clients find each other and
exchange what moved, through **WorldSync**. For most worlds that needs no
server: the clients talk to each other directly, with a small
introduction service to find each other and, where a network stands in
the way, a relay that forwards bytes and knows nothing else. The world
itself is unchanged; the files are still the source of truth.

A world that needs an authority, one that runs its own logic, keeps state
no visitor owns, or talks to systems outside, can run on **WorldOS**, the
runtime for that case. Most worlds do not need it, and a world that does is
still a document at a URL; WorldOS is one more thing the document names.

## Making worlds

**WorldKit** is the name for the tools that produce the files: today the
Blender add-on, which exports a scene as a world and can publish it in one
press. The export is one way: Blender stays the editor of the scene, the
world is what it exports.

## What this adds up to

- Nothing to install to visit. The link opens in a browser.
- Nothing of ours in the path from a link to a world. A world at your own
  address opens whether or not Five Squared exists.
- Zero cost at rest. An unvisited world is a folder.
- Worlds link to worlds. The web's graph, in 3D.

The long form is in the white paper (2025): [Web Wide Worlds](/docs/www_whitepaper_v1.1.pdf).
Some of its details predate the current client; the principles are the
same.
