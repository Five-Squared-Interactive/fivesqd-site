# Make a world from Blender (/first-world)

The add-on's own page (founder, 2026-10-24): the maker's pitch on top,
the full guide below. No audience label or kicker (founder, 2026-11-11).
This file is the words twin of `src/pages/FirstWorld.jsx`; keep them in
step. Every button name below was checked against the add-on's source
and the shipped zip on 2026-11-11 (see content/README.md, facts).

## Hero (text left, recording right)

**A render flattens what you built.**

Send the place instead. Press Save and Publish in Blender and your scene
becomes a link. Anyone who opens it walks around inside, on a phone or a
laptop, with whoever else is there. Nothing for them to install.

[Get the add-on]({ADDON_URL}) · [See it in action](#watch)
Free and open source. Blender 4.5 or newer.

[slot, recording: muted, looping: a Blender scene, Save and Publish, the
link appears, a phone opens it, a second person walks in, one taps a door
and both are in another world]

## Three steps from your scene to a link

Three tiles, each with a picture slot:
1. **Install the add-on.** Blender 4.5 or newer. Sign in once with Google,
   GitHub or an emailed link. [slot: the add-on panel in Blender, cropped
   at 2x, with Save and Publish visible]
2. **Press Save and Publish.** Your scene becomes a world at its own web
   address and opens in your browser. [slot: the link that appears after
   Save and Publish, as the add-on shows it]
3. **Send the link.** Paste it in a message. Whoever taps it walks in.
   [slot: the same world on a phone, held in a hand, with the two sticks
   showing]

## The full guide

Every step, with what you will see on screen. The steps carry no numbers
of their own; the three tiles above are the numbering. Each step wants a
screenshot (`shot` slots); none exist yet, and the founder's machine is
where they come from.

### What you need

- Blender 4.5 or newer, free from blender.org.
- The add-on: [download]({ADDON_URL}). It uses Node.js to build your world;
  if Node.js is not installed, the panel offers **Get Node.js**.

### Install the add-on

[slot: Blender's Add-ons list with the VEML add-on ticked]
1. In Blender: **Edit → Preferences → Add-ons**.
2. Open the menu at the top right and choose **Install from Disk…**, then
   pick the file you downloaded.
3. Tick **VEML Import/Export** to turn it on.

Already had an older version? Remove it first, then install this one.

### Sign in once

[slot: the add-on's Sign In button, and the browser tab it opens]
In the add-on's preferences, press **Sign In**. Your browser opens
WorldHub; sign in with Google, GitHub, or a link we email you, and Blender
picks it up on its own. You stay signed in; there is a **Sign Out** beside
it.

### Publish

[slot: the Save as My World box with Save and Publish, cropped at 2x]
Save your .blend file, then open the **Scene** tab of the Properties
editor and find the **VEML World** panel. In its **Save as My World** box,
press **Save and Publish**. The first time takes a little longer. When it
is done, your world opens in the browser. If you are not signed in, the
box offers **Sign In** right there.

Where do people start? Select a camera, open its **Object** tab, and tick
**VEML Entry Point** in the **VEML Entity** panel. Otherwise they start at
the scene's camera.

### Who may enter

[slot: the Only People I Allow tick, with the Allowed Viewers field it
reveals]
Leave **Only People I Allow** unticked and anyone with the link gets in.
Tick it, and visitors are asked to sign in; the people on your **Allowed
Viewers** list get in, nobody else. Visitors who are signed in appear
under their own names.

### Share

[slot: the world open in a browser tab, address bar visible]
The address your world opened at is the one to share, for example
`https://worlds.worldhub.me/w/…`. Anyone can open it in a browser; nothing
to install. Press Save and Publish again and the same address shows the
new version.

### Walking around

[slot: the world on a phone, held in a hand, both sticks showing]
- Click in the world to look around with the mouse; Esc gives the mouse
  back.
- W A S D to move, Space to jump.
- F to fly, where the world allows it: Space up, Shift down.
- H shows these again.
- On a phone or tablet: the left stick moves, the right stick looks,
  **Jump** and **Fly** sit above the right stick, and **Chat** is at the
  top.

### Now look at what you made

Your world is a web page.

- **Read it.** In the corner of your world's page, **What is this?** opens
  to three links: **Open the document** shows the text behind the world
  (its title, where you start, the sky, the model; that is the whole
  world), **Download this world** hands you its files as one zip, and
  **Make your own** brings people here. Or add `/index.veml` to the
  address yourself.
- **Link it to another world.** Select an object in Blender, open its VEML
  Entity panel, and put another world's address in the **Link** field. In
  your world it lights up when you look at it; click it, or tap it on a
  phone, and you step into theirs. That is how one world becomes part of
  many.
- **Change it.** Change the scene in Blender and press Save and Publish
  again; the same address shows the new version.
