# Home

## Hero (over a frame of a real world; today The Overlook, a world opened in the client)

**A world is a web page.**

A document at an address you own, opened in a browser. Walk around in it
with other people, on a phone, a laptop or a headset. Nothing to install.

[Walk into one]({DEMO_WORLD_URL}) · [Make your own from Blender](/first-world)
· (until a demo world exists: "See what a world is made of", a link down
the page)

## The same parts as the web

Each part of a world is the part of a web page it stands in for. *(A
table:)*

| A web page | A world | |
|---|---|---|
| An HTML file | A VEML file | says what is there and where |
| A browser | A browser, running WebVerse (itself a page) | opens it from its address |
| A web server | The same web server | serves the files, nothing added |
| A link to another page | A door to another world | joins one address to the next |
| View source | Add /index.veml to the address | the whole thing, as text |

## A world, and a world's whole document

Every published world is a document like this one. It fits on a screen,
and five parts do the work. *(Left: The Overlook, a world opened in a
browser; once a public demo world exists, a frame that becomes the world
itself on a click. Right: the document of another world, a living room,
exactly as Blender published it, 923 bytes, with five numbered marks in the
gutter that light up with their legend entry:)* 1 its name · 2 the backdrop
colour · 3 where you start, and which way you face · 4 the sky that lights
it, and how bright · 5 the model, a standard glTF file. Plus the two files
it names, one model and one sky image.

The two are different worlds, and the captions say so, until a textured
scene published from Blender can stand beside its own document.

## How a link works

A scene becomes a folder. The folder gets an address. The address opens
anywhere. *(A four-box diagram: a scene (Blender, today; Save and Publish)
→ a folder (index.veml, assets/model.glb; plain files) → an address
(https://your.site/room/; WorldHub today, or any web host) → a browser, any
device. Underneath: "No account and no install to visit. The files are
served like any page.")*

### And worlds link to worlds

Your room can open onto a friend's. Each stays at its own address. *(Two
worlds drawn at two addresses, https://your.site/room/ and
https://a-friend.example/garden/, a door in the first only, a one-way arrow
labelled "the door holds the other address". Underneath: "In Blender, a
door is a field on the object. They link back only if they add a door of
their own.")*

## Make one

1. Install the add-on in Blender 4.5 or newer and sign in once.
2. In the Save as My World box, press **Save and Publish**.
3. Send the link.

[The first-world guide](/first-world). Worlds published this way are
hosted by WorldHub; the world is a document, and you choose who may enter.

## Who this is for

For anyone with a scene and someone to show it to: a room you modelled, a
building, a place that no longer exists, a toy. For a group that wants a
room of its own on the web. For developers who want an open 3D document
format, an open client, and a sync layer designed so the engine they
already have can adopt it.

## Open

The format (VEML), the client (WebVerse), the engine under it
(StraightFour), the sync layer (WorldSync) and the runtime for worlds with
their own logic (WorldOS) are MIT-licensed. The public release of the
current generation is being prepared; the earlier generation is on GitHub.
Hosting is a convenience we offer, never a requirement.
[How it works](/technology) · [Build on it](/ecosystem)
