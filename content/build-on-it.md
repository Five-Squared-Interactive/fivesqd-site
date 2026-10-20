# Build on it

Everything that opens, moves or syncs a world is MIT-licensed, and the
format is written down as a specification with a conformance suite. There
are three ways in.

## Make worlds

You have a scene and someone to show it to. Install the Blender add-on,
press Save as My World, send the link. Then open the document behind the
world and see how little it is; a world is text you can read and change.
[Your first world](/first-world)

## Put your own things in a world

You have models, data, a game, a simulation. A world's document can load
your glTF, script behaviour in JavaScript inside the client's sandbox, and
link to anything at a URL. A world that needs a live authority can run on
WorldOS, with plugins that talk to the systems you already have.

## Build the pieces yourself

You want a different client, a different editor, a host, a sync service,
a connector. The format is open, the client and engine are open, the sync
layer is open and standalone, and nothing in a world's address points at
us. Build what fits and it works with everything else.

## Where to start

- The repositories: [github.com/Five-Squared-Interactive](https://github.com/Five-Squared-Interactive)
- The format: VEML (the 4.0 specification and its conformance suite are
  being prepared for publication; the earlier documents are on GitHub)
- The client: WebVerse, and StraightFour under it
- Sync: WorldSync; runtime: WorldOS

Ask us anything: info@fivesquaredinteractive.com.
