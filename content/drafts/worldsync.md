# WorldSync (draft)

*Goes live when the protocol document is published outside the private
repository.*

## Being in a world together, without a server

WorldSync is how two clients in the same world agree on what moved. It is
a thin layer over the world's files: the files are the truth, WorldSync
carries the differences. For most worlds it needs no server at all.

## Three ways to run it

- **Peer to peer.** Visitors' browsers connect directly. A small
  introduction service helps them find each other and, when a network
  stands in the way, a relay forwards bytes and knows nothing else. The
  first visitor in a room holds it; when they leave, another takes over.
- **With a server you run.** A WorldSync instance holds the room instead
  of a visitor's browser: steadier for busy rooms, and the room persists
  when everyone leaves.
- **Inside WorldOS.** A world with a runtime of its own syncs through it.

The world's document says which; the client does the rest.

## Use it without the rest

WorldSync does not need our client or our engine. The protocol is written
to be implemented, and an engine you already use can adopt it to put its
users in the same room.

## The protocol

*(fill at deploy: link to the published protocol, the message grammar in
one screen, and the reference client)*
