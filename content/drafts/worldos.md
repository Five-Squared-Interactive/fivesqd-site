# WorldOS (draft)

*Goes live when the operator template and the plugin guide are public.*

## Most worlds do not need a server

A world is files. Visitors open it from any web host, and when they are in
it together their clients keep each other up to date directly. Nothing has
to run anywhere for that. Read this page only if your world needs more.

## When a world needs an authority

Some worlds keep state no single visitor owns: a game's score, a planet's
terrain as people reshape it, a room whose furniture should be where the
last person left it. Some worlds talk to systems outside: a sensor feed, a
database, a robot. For those, the world's document names a runtime, and
**WorldOS** is that runtime.

## What it is

A small host that runs plugins. Each plugin owns part of the world's state
and answers the clients' requests through one API, the same API whether
the runtime is on your laptop, on a server you rent, or one we run.
Plugins talk to each other over an internal bus, never through new web
APIs, so a world's runtime can be split across machines without the world
noticing.

## What it is not

It is not where worlds live, not a platform you join, and not required by
the client. A world that uses WorldOS is still a document at a URL; the
runtime is one more thing it names, and the document is still what a
visitor fetches first.

## Running one

*(fill at deploy: the container template, the one command, what to put in
`.env`, and how a document names the runtime)*
