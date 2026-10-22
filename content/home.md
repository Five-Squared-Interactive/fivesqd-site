# Home

## Hero (over a frame of a real world; today The Overlook, a world opened in the client)

**A world is a web page.**

A document at an address you own. Open it in a browser and walk around,
with other people, on a phone, a laptop or a headset. Nothing to install.
One way to make one: export a scene from Blender and press Save and Publish.

[Walk into one]({DEMO_WORLD_URL}) · [Make your own](/first-world)

## The same machinery as the web

Not a metaphor. Each part of a world is the part of a web page it stands
in for. *(A two-column strip:)*

| A web page | A world | |
|---|---|---|
| An HTML file | A VEML file | says what is there and where |
| A web browser | WebVerse, a web page itself | opens it from its address |
| Any web host | Any web host | serves the files; nothing of ours in between |
| A link to another page | A door to another world | joins one address to the next |
| View source | Open the document | the whole thing, as text |

## The whole world, and the whole document

Everything the world on the left is made of is the text on the right. Five
lines do the work. *(The world's picture beside its complete `index.veml`,
923 bytes, with five numbered marks:)* 1 its name · 2 the backdrop colour ·
3 where you start, and which way you face · 4 the sky that lights it, and
how bright · 5 the model, a standard glTF file. There is nothing else.

## How a link works

A scene becomes a folder. The folder gets an address. The address opens
anywhere. *(A four-box diagram: a scene (Blender, today; Save and Publish)
→ a folder (index.veml, assets/model.glb; plain files) → an address
(https://…/w/…; any web host) → a browser, any device. Underneath:
"Nothing to install. Nothing of ours between the link and the world.")*

**You can read it.** Add `/index.veml` to any published world's address
and the document opens as text. It is short, and every line means
something you can see.

**It is files at an address.** A world is a folder of plain files served
like any web page: no server of yours, no database, no account to visit.
Put the folder on any host and open it there.

**It links to other worlds.** A door, a sign or a frame in your scene can
open onto another world's address, the way one page links to the next.
In Blender, a link is a field on the object.

## Worlds link to worlds

Your room can open onto a friend's. Each stays at its own address. *(Two
worlds drawn at two addresses, https://your.site/room/ and
https://a-friend.example/garden/, a door in each, an arrow both ways:
"a link, both ways". Underneath: "In Blender, a door is a field on the
object: the other world's address.")*

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
format, an MIT-licensed client, and a sync layer that works with the engine
they already have.

## Open

The format (VEML), the client (WebVerse), the engine under it
(StraightFour), the sync layer (WorldSync) and the runtime for worlds with
their own logic (WorldOS) are MIT-licensed. The public release of the
current generation is being prepared; the earlier generation is on GitHub.
Hosting is a convenience we offer, never a requirement.
[How it works](/technology) · [Build on it](/ecosystem)
