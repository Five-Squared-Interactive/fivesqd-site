# What we make

Open pieces that fit together, and one service. Each is listed with what
it is today, not what it will be.

## The open stack

*(Cards with the logos the site already has: VEML, StraightFour, WorldSync,
WorldOS; a frame of a world for WebVerse.)*

**VEML** — the format. A world is a VEML document plus glTF models. The 4.0
specification and its conformance suite are being prepared for publication;
the earlier documents are on GitHub.

**WebVerse** — the client. A web page that opens any world by its address,
on a phone, a laptop or a headset's browser. It is what a published link
opens. A desktop version for offline and local-network use is in the works.

**StraightFour** — the engine under the client: rendering, loading,
physics, the scripting sandbox. You meet it only if you build a client.

**WorldSync** — being there together. The clients in a world exchange what
moved, directly for most worlds, through a server for worlds that want one.
It stands alone: an engine you already use can adopt it to put its users
in the same room.

**WorldOS** — the runtime for a world with its own logic: a score, a
simulation, terrain people reshape, a sensor feed. Most worlds do not need
it.

**WorldKit** — the authoring tools. Today: the Blender add-on, which
exports a scene as a world and publishes it in one press.

**MyWorlds** — assembling a world in the browser, without Blender. Being
rebuilt on the new client; not yet live.

All of it is MIT-licensed. The public release of the current generation is
being prepared; the repositories on GitHub today are the earlier
generation.

## The service

**WorldHub** is the one service we run. It hosts the worlds you publish
from Blender and signs you in (WorldHub ID); a directory of worlds people
choose to list is coming. A world does not need WorldHub to exist or to be
opened. [About WorldHub](/products/worldhub)
