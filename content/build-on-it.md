# Ecosystem (/ecosystem)

Founder, 2026-11-14: "why dont we have the lets build together and banner
image from the original website on the ecosystem page? in fact, most of
the old ecosystem page looks like stuff we want to keep". So the page is
the live site's ecosystem page in shape and words, with today's facts and
links: no Git Worlds, no MyWorlds claim (not live), the white paper at 2.0,
WorldSync described as it is, WorldKit as the Blender add-on, and the VEML
line pointing at the public specification. The 2026-11-12 "Build on it"
page (three ways in, where to start) is replaced. This file is the words
twin of `src/pages/Ecosystem.jsx`; keep them in step.

## Hero (the banner, `public/images/webwideworlds.webp`, darkened)

**The Ecosystem Is Yours**
Web Wide Worlds is open to everyone. Create worlds, bring in what you've
already built, or build something entirely new. Every layer is MIT-licensed
and designed to be extended, replaced, or reimagined. No permission required.

## How to Get Involved

Three ways in. Pick the one that fits where you are.

- **Create Worlds.** For creators, educators, and anyone with an idea.
  Build a world and share it with a link. Start from a scene in Blender and
  press Save and Publish, or write the world yourself: define it in VEML,
  script it in JavaScript, and put the folder at any web address. No server
  to run. Links: Make a world from Blender (/first-world) · Find worlds on
  WorldHub (worldhub.me) · Learn VEML (/technology#veml).
- **Integrate What You've Built.** For developers who already have games,
  simulations, or tools. Bring your existing work into the ecosystem. Load
  your own glTF, script behaviour with the JavaScript World API, write
  WorldOS plugins for a world with shared state of its own, or build
  connectors to the systems you already run. Open APIs make integration
  straightforward. Links: WorldOS & Plugins (/technology#worldos) ·
  JavaScript World API (/technology#veml) · View All Repos (GitHub).
- **Build on the Stack.** For engineers, studios, and anyone who wants to
  build something new. The entire stack is MIT-licensed. Build a new world
  browser, an editor, a hosting service, a connector, a plugin, or something
  nobody has thought of yet. Every layer is designed to be swapped,
  extended, or replaced. No permission needed. Links: Architecture Overview
  (/technology) · Read the White Paper (2.0) · Source on GitHub.

## Where You Fit In

The ecosystem is a five-layer stack. You can plug in at any level, or
across all of them.

5. Publishing: host and distribute worlds: your own address, or WorldHub.
4. Tooling & APIs: the Blender add-on, WorldOS plugins, the World API.
3. Networking: real-time sync, presence, people together in a world.
2. World Definition: VEML markup, JavaScript scripting, glTF assets.
1. Scene Viewer: world browsers: render and interact with worlds.

## What's Already Here

You're not starting from scratch. These pieces are shipped and open source.

- WebVerse: open world browser: desktop, web, and VR.
- StraightFour: the engine under WebVerse.
- WorldKit: the Blender add-on: Save and Publish.
- WorldOS: plugin-based runtime for worlds with shared state of their own.
- WorldSync: real-time sync between visitors' browsers, with a relay only
  when needed.
- VEML: declarative markup for 3D worlds, a written specification (the
  public repository).
- World API: JavaScript scripting inside worlds.
- WorldHub: publishing from Blender, and a directory of worlds.

## Let's Build Together

Whether you want to create your first world, connect something you've
already built, or build the next great tool for the ecosystem, we'd love
to hear from you.
[Get in Touch](mailto:info@fivesquaredinteractive.com) · [View on GitHub] ·
[Read the White Paper]

## What this replaced (2026-11-14)

The 2026-11-12 page: "Build on it" (a plain head, no banner), "Three ways
in" (Make worlds / Put your own things in a world / Build the pieces
yourself) and "Where to start" (five lines and the e-mail). The old page's
em dashes became commas and colons (brand: none in copy), "Git Worlds
Tutorial" became "Make a world from Blender", "Create in MyWorlds" became
"Find worlds on WorldHub" (MyWorlds on the new stack is not live), "Real-time
multiplayer sync over MQTT" became the browsers connecting directly, and
"Visual world editor and developer toolchain" became the Blender add-on (no
general 3D editor is an anti-goal).
