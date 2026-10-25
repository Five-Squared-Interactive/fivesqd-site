# Product Marketing Context

**Document version:** v1 (auto-drafted from the site, the company thesis and the founder's words on 2026-10-24; the founder corrects and fills the `[NEED: …]` gaps)
**Last updated:** 2026-10-24

This is the document the copywriting, copy-editing and CRO skills read before touching a page (coreyhaines31/marketingskills). Anything a page says must be supportable from here or from the code; nothing here may claim more than the code does today (see content/README.md "Facts to confirm").

## Product Overview
**One-liner:** Turn a 3D scene into a place people can walk through, from a link.
**What it does:** A Blender user presses Save and Publish and their scene becomes a walkable 3D world at a web address. Anyone with the link opens it in a browser on a phone, laptop or headset, with nothing to install, and is in it together with whoever else is there. A world is plain files (one small VEML text file plus glTF models) at an address, so the maker owns it, can host it anywhere, edit it, and put doors in it to other worlds.
**Product category:** The shelf people would look on: "share a 3D scene / interactive walkthrough / virtual tour". Not "metaverse", not "game engine".
**Product type:** Open-source software (MIT) plus one hosted service (WorldHub: hosting, sign-in, who may enter).
**Business model and pricing:** Software free. Hosting on WorldHub free today. No consumer subscription hosting as a revenue line (company anti-goal). `[NEED: what, if anything, is ever paid for, so "free" is stated exactly]`

## Target Audience
Three audiences, agreed 2026-10-24, in this order:
1. **Blender artists and modellers** (hobbyists who post renders; freelancers). Jobs: show the work the way it deserves; let a friend or client stand in it; get a reaction.
2. **Architecture, interior and landscape design, real estate.** Jobs: get a client to understand a space before it is built; approve without surprises; let a buyer walk a listing without a visit.
3. **People who want to make multiplayer worlds** (Minecraft/Roblox/VRChat builders, indie level makers, communities). Jobs: a world of their own that no platform can take down; their people in it; no server to run.
Secondary: developers who might build on the open pieces; press and partners.
**Primary use case:** send someone a place you made and have them walk through it with you.
**Anti-personas:** people wanting a "metaverse" to live in; studios needing photoreal AAA pipelines today; anyone needing measurement/annotation tooling in the walkthrough today (not built).

## Personas (B2B, architecture and real estate)
| Persona | Cares about | Challenge | Value we promise |
|---|---|---|---|
| Designer / architect (user, champion) | approvals without surprises, time | clients cannot read plans or renders; change orders after the build | a private link the client walks on their phone before the slab is poured |
| Client / buyer | understanding the space | drawings mean nothing to them; viewing means a trip | open a link, walk the rooms, feel the scale, from the sofa |
| Agent / developer (decision maker) | more qualified viewings | photos do not sell a layout | a walkthrough link on the listing; buyers who book already want it |
`[NEED: which of these the founder has actually spoken to, and what they said]`

## Problems & Pain Points
**Core problem:** showing someone a space you built still means a render (flat), a video (not explorable), a spinning model viewer (an object, not a place), or a game build (a download that runs on one kind of computer). None lets someone stand in the space with you.
**Why alternatives fall short:** install, account, licence, file size, one device, no "together", and the work ends up inside someone else's platform.
**What it costs them:** approval rounds and change orders (pros); a build nobody opens (makers); years of building lost when a platform changes its rules (world builders).
**Emotional tension:** the work is better than the picture of it; nobody sees it properly. For builders: fear of losing the world; wanting a place that is theirs.

## Competitive Landscape
- **Direct (same solution, same problem):** Sketchfab / Fab embeds (object viewer, no walking, no together, platform-owned); Matterport, Enscape, Twinmotion cloud (walkthroughs, paid per seat, viewer app or expiring links); Mozilla Hubs successors, Spatial, Frame (rooms in the browser, platform-hosted, account-bound).
- **Secondary (different solution):** Unity/Unreal WebGL or pixel-streamed builds (big, slow, one-off, not linkable); video walkthroughs; renders.
- **Indirect:** Roblox, VRChat, Minecraft realms (worlds live on their terms; apps and accounts; nothing links out).
`[NEED: the two or three the founder actually hears people name]`

## Differentiation
**Key differentiators:** a world is files at a web address like a page (yours to host, edit, link); nothing to install for visitors; people together without a server to run; doors between worlds across owners; one press from Blender; open format and open client under MIT.
**How we do it differently:** the web's own machinery (URLs, HTTP, any host) instead of a platform; the client is a web page; sync is between the visitors' browsers.
**Why that's better:** it works on every device with a browser, it lasts (files at an address outlive any company, ours included), and nobody is in the resolution path.
**Why customers choose us:** `[NEED: verbatim, once there are customers]`

## Objections
| Objection | Response |
|---|---|
| "Hasn't 3D on the web been tried?" | Yes, when it needed a plugin and a PC that could not keep up. A phone renders this now; the missing piece was the plain path from a scene to a link. |
| "Is this the metaverse?" | No. You send a place, people visit, they leave. No land, no substrate, no company every world must pass through. |
| "Will my textured scene look as good as in Blender?" | It is the same glTF Blender exports, lit by the sky you chose. `[NEED: a textured published scene to show]` |
| "What if you disappear?" | Files at an address keep working; the client is open source. Today the client page is served from WorldHub; the public release lets anyone host it. |
| "My clients won't install anything." | They don't. It is a link. |
| "I don't use Blender." | Today Blender is the way in; SketchUp, Revit and Rhino models come through Blender as glTF/FBX. A direct SketchUp path is next. |

## Switching Dynamics (Four Forces)
- **Push:** renders get the wrong approval; builds nobody opens; platforms that change rules or die.
- **Pull:** one press, a link, people in it with you, on their phones; it is yours.
- **Habit:** renders and PDFs are what clients expect; Sketchfab is where portfolios already are.
- **Anxiety:** will it look good; will clients cope with controls; is this another platform that vanishes.

## Customer Language
**How they describe the problem:** `[NEED: verbatim from Blender forums, archviz clients, world builders]` Working hypotheses: "clients can't read plans", "my render doesn't do it justice", "I just want to send them a link", "I don't want to run a server", "they shut down the platform".
**How they describe the solution:** walkthrough, virtual tour, "walk around in it", "send a link".
**Words to use:** place, room, scene, link, walk around, with you, yours, open.
**Words to avoid:** metaverse, immersive, seamless, spatial, platform, ecosystem, "experience", client (say "the page that opens it" or "WebVerse"), document (except beside the actual file), shell, profile, earlier/current generation.
**Glossary:** VEML (the file format, "to a world what HTML is to a page"); WebVerse (the page that opens worlds); WorldHub (our hosting and sign-in service); a door (a link from one world to another, a field on the object in Blender).

## Brand Voice
Attributes (founder, 2026-10-24): **plain, trustworthy, warm.** Reference: Obsidian.
- **Plain:** short sentences, contractions, no hype words, say what you press and what happens. Not: terse to the point of cold.
- **Trustworthy:** claims the code supports; "works today / not yet" stated on the page; no fabricated proof. Not: defensive hedging in front of people who have not yet understood the product.
- **Warm:** people and verbs of experience (meet, show, wander, point); friends, clients, your people. Not: cute, exclamation marks, jokes.
Tone by context: marketing pages warm and plain; the first-world guide exact (real button names); How it works precise; errors and status pages matter-of-fact.
Brand words: a world is a web page (the thesis; use after the reader has seen a world). Never use: earlier generation, metaverse, immersive.
`[NEED: three lines of the founder's own writing to anchor the voice]`

## Proof Points
- Publishing from Blender in one press: live, October 2026.
- A published world's whole document is 923 bytes plus one model and one sky image (true; shown on the site).
- Two-second-to-walkable budget on the first paint (engineering target held in CI).
- White paper: Web Wide Worlds, 2025.
`[NEED: a public demo world; the 20-second recording; two or three worlds by other people; any talk or coverage with dates; the founder's name, year and place]`

## Goals
**Primary business goal:** adoption: people other than the founder publishing and visiting worlds at their own addresses (THESIS.md).
**Key conversion action:** install the add-on and publish a first world; second: walk into the demo world.
**Current metrics:** `[NEED]`

## Learnings
- 2026-10-24: five-second tests. Makers answer to concrete nouns ("Blender scene"); strangers need "a link" and "together"; "world" on the first screen triggers the metaverse eye-roll; "Make a world" three times on one screen reads pushy; "nothing to install" must say "for visitors". Mechanism-led headlines ("a world is a web page", "send a place, not a picture", "a place you can walk into, from a link") lost to motive-led ones. The founder: meet people where they are; lead with the burning problem, not the technology; three audiences, so one front door and three pages.
