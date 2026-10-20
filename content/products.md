# What we make

Open pieces that fit together, and one service. Each is listed with what
it is today, not what it will be.

## The open stack (MIT)

**VEML** — the format. A world is a VEML document plus glTF models. The 4.0
specification and its conformance suite are being prepared for publication;
the earlier documents are on GitHub.

**WebVerse** — the client. A web page that opens any world by its address.
It is what a published link opens, on phone, laptop or headset browser.
A desktop version for offline and local-network use is in the works.

**StraightFour** — the engine under the client: rendering, loading,
physics, the scripting sandbox. A library; clients link against it.

**WorldSync** — the sync layer that lets visitors be in a world together.
Works without a server for most worlds, with a server for worlds that
want one. Standalone: it does not need the rest of the stack, and an
engine you already use can adopt it.

**WorldOS** — the runtime for worlds that need an authority of their own:
plugins, state no visitor owns, connections to outside systems. Most worlds
do not need it.

**WorldKit** — the authoring tools. Today: the Blender add-on, which
exports a scene as a world and publishes it in one press.

**MyWorlds** — the place to assemble a world in the browser, without
Blender. Being rebuilt on the new client; not yet live.

## The service

**WorldHub** is the one service we run. It hosts the worlds you publish
from Blender, signs you in (WorldHub ID), and lists worlds people want
listed (Search). It is a convenience: a world does not need WorldHub to
exist, to be opened, or to be moved somewhere else. [About WorldHub](/products/worldhub)

## Where the code is

Everything in the open stack is on [GitHub](https://github.com/Five-Squared-Interactive).
