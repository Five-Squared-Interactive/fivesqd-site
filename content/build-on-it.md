# Build on it

Everything that opens, moves or syncs a world is open source under MIT,
and the format is written down as a specification with a conformance
suite, both being prepared for publication.

## Make worlds

You have a scene and someone to show it to. Install the Blender add-on,
press Save and Publish, send the link. Then add `/index.veml` to the
address and see how little the world is; it is text you can read.
[Your first world](/first-world)

## Put your own things in a world

You have models, data, a game, a simulation. A world's document can load
your glTF, script behaviour in JavaScript inside the client's sandbox, and
link to anything at a URL. A world that keeps a score or listens to a
sensor can run on WorldOS, with plugins that talk to the systems you
already have.

## Build the pieces yourself

You want a different client, a different editor, a host, a sync service,
a connector. The format is open, the client and engine are open, the sync
layer is open and standalone, and a world at your own address names
nothing of ours. Build what fits and it works with everything else.

## Where to start

- The format: VEML. The 4.0 specification and its conformance suite are
  being prepared for publication; the earlier documents are on GitHub.
- The client: WebVerse, and StraightFour under it. Public release in
  preparation.
- Being together: WorldSync, designed so an engine you already use can
  adopt it. The protocol document is being prepared for publication.
- A world with its own logic: WorldOS.
- The code: [github.com/Five-Squared-Interactive](https://github.com/Five-Squared-Interactive).

Ask us anything: info@fivesquaredinteractive.com.
