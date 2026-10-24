# Make a world from Blender (/first-world)

The add-on's own page (founder, 2026-10-24): the maker's pitch on top,
the full guide below.

## Hero (text left, recording right)

Kicker: Blender artists.
**A render flattens the room you built.**

Send the room instead. Press Save and Publish in Blender and your scene
is a link; anyone who opens it walks around inside, on a phone or a
laptop, together with whoever else is there. Nothing for them to
install.

[Get the add-on](ADDON_ZIP) · [Watch it, 20 seconds](#watch)
Free and open source. Blender 4.5 or newer.

[slot: the 20-second recording]

## How easy is it?

Three steps. The third one is sending a link.
1. Install the add-on. Blender 4.5 or newer. Sign in once. [slot]
2. Press Save and Publish. Your scene becomes a world at its own web
   address and opens in your browser. [slot]
3. Send the link. That's it. People walk in. [slot]

# The full guide

From a Blender scene to a link anyone can walk into.

*(Each step wants a screenshot: the Add-ons list with VEML Import/Export
ticked; the Sign In button; the Save as My World box with Save and Publish;
the VEML Entry Point tick on a camera; the Link field; the world open in a
browser with its address bar. None exist yet; the founder's machine is
where they come from.)*

## What you need

- Blender 4.5 or newer, free from blender.org.
- The add-on: [download]({ADDON_URL}). It uses Node.js to build your world;
  if Node.js is not installed, the panel offers **Get Node.js**.

## Install the add-on

In Blender: Edit → Preferences → Add-ons. Open the menu at the top right
and choose Install from Disk…, then pick the file you downloaded. Tick
**VEML Import/Export** to turn it on. Already had an older version? Remove
it first, then install this one.

## Sign in once

In the add-on's preferences, press **Sign In**. Your browser opens
WorldHub; sign in with Google, GitHub, or a link we email you, and Blender
picks it up on its own. You stay signed in; there is a Sign Out beside it.

## Publish

Save your .blend file, then open the Scene tab of the Properties editor and
find the **VEML World** panel. In its **Save as My World** box, press
**Save and Publish**. The first time takes a little longer. When it is
done, your world opens in the browser. If you are not signed in, the box
offers Sign In right there.

Where do people start? Select a camera, open its Object tab, and tick
**VEML Entry Point** in the VEML Entity panel. Otherwise they start at the
scene's camera.

## Who may enter

In the same box, **Everyone** lets anyone with the link in. **Only People
I Allow** asks visitors to sign in and admits the people on your list.
Visitors who are signed in appear under their own names.

## Share

The address your world opened at is the one to share, for example
`https://worlds.worldhub.me/w/…`. Anyone can open it in a browser; nothing
to install. Press Save and Publish again and the same address shows the
new version.

## Walk

Click in the world to look around with the mouse; Esc gives the mouse back.
W A S D to move, Space to jump. F to fly, where the world allows it: Space
up, Shift down. H shows these again. On a phone or tablet: the left stick
moves, the right stick looks, and the Jump, Chat and Fly buttons sit above
them.

## Now look at what you made

Your world is a web page.

- **Read it.** Add `/index.veml` to your world's address and the document
  opens as text: the title, the starting point, the sky, the model. That is
  the whole world.
- **Link it to another world.** Select an object in Blender, open its VEML
  Entity panel, and put another world's address in the **Link** field. Walk
  up to it in your world and you step into theirs. That is how one world
  becomes part of many.
- **Change it.** Change the scene in Blender and press Save and Publish
  again; the same address shows the new version. *(Editing the document on
  the page itself, and downloading the folder to host it elsewhere, are
  coming.)*
