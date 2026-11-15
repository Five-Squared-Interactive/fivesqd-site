# Product Marketing Context

**Document version:** v2 (v1 was auto-drafted from the site, the company thesis and the founder's words on 2026-10-24; the founder corrects and fills the `[NEED: …]` gaps)
**Last updated:** 2026-11-15

This is the document every marketing skill reads before touching a page, a post or a message (coreyhaines31/marketingskills). It is also the audience file and the voice guide that the monorepo's `FUNCTIONS.md` (Content, Experiments) asks for. Anything a page says must be supportable from here or from the code; nothing here may claim more than the code does today (see content/README.md "Facts to confirm").

## Product Overview
**One-liner:** Turn a 3D scene into a place people can walk through, from a link.
**What it does:** A Blender user presses Save and Publish and their scene becomes a walkable 3D world at a web address. Anyone with the link opens it in a browser on a phone, laptop or headset, with nothing to install, and is in it together with whoever else is there. A world is plain files (one small VEML text file plus glTF models) at an address, so the maker owns it, can host it anywhere, edit it, and put doors in it to other worlds.
**Product category:** The shelf people would look on: "share a 3D scene / interactive walkthrough / virtual tour". Not "metaverse", not "game engine".
**Product type:** Open-source software (MIT) plus one hosted service (WorldHub: hosting, sign-in, who may enter).
**Business model and pricing:** Software free. Hosting on WorldHub free today. No consumer subscription hosting as a revenue line (company anti-goal). `[NEED: what, if anything, is ever paid for, so "free" is stated exactly]`

## Target Audience
Three audiences, agreed 2026-10-24, in this order. They decide which examples appear and in what order; they are never nav items, page names, headings or kickers (founder, 2026-11-11).
**First audience for outreach (founder, 2026-11-15): Blender artists and modellers.** They are the only group with a complete path live today (one press, a link, people in it together), and their communities are public. The first link drops (E1 in the monorepo's `docs/EXPERIMENTS.md`) and the first hand-held sessions (E2) go to them. The other two keep shaping the site's examples and wait for outreach.
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
`[NEED: which of these the founder has actually spoken to, and what they said. As of 2026-11-15: none; the current version has been shown to one person, Ben, a Blender user (see Proof Points)]`

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
| "Will my textured scene look as good as in Blender?" | It is the same glTF Blender exports, lit by the sky you chose. Show the loft, a textured scene published with Save and Publish: https://worlds.worldhub.me/w/w_K1GfSfHUdMIv |
| "Will it run on my phone, or my client's old one?" | Ben's Blender world ran smoothly on his old phone (the founder's report, 2026-11-15; see Proof Points). `[NEED: which phone]` |
| "What if you disappear?" | Files at an address keep working; the client is open source. Today the client page is served from WorldHub; the public release lets anyone host it. |
| "My clients won't install anything." | They don't. It is a link. |
| "I don't use Blender." | Models from SketchUp, Revit or Rhino come in through Blender's own importers, and publish from there. Say no more than that; nothing unbuilt is promised. |

## Switching Dynamics (Four Forces)
- **Push:** renders get the wrong approval; builds nobody opens; platforms that change rules or die.
- **Pull:** one press, a link, people in it with you, on their phones; it is yours.
- **Habit:** renders and PDFs are what clients expect; Sketchfab is where portfolios already are.
- **Anxiety:** will it look good; will clients cope with controls; is this another platform that vanishes.

## Customer Language
**How they describe the problem:** `[NEED: verbatim from Blender forums, archviz clients, world builders]` Working hypotheses: "clients can't read plans", "my render doesn't do it justice", "I just want to send them a link", "I don't want to run a server", "they shut down the platform".
**What a forum search found (2026-11-15; thin, read the limits first).** Fourteen public threads on Blender Artists, the Unreal, three.js, Verge3D, D5 and Nomad forums and Hacker News. Reddit could not be read at all, so r/blender, r/blenderhelp and r/archviz are missing, and most posters were builders announcing a tool, not artists voicing a pain. Only the Blender Artists thread and its forum's rule were re-read by the session that wrote this; the rest is a research agent's report. Treat everything here as Medium confidence at best.
- The pain, in their words: "I often need to send 3D models to people who don't use Blender" and "Sending a .blend or even a .glb isn't always convenient because the recipient still needs a viewer." (GTa, Blender Artists, 18 Jul 2026, https://blenderartists.org/t/blender-add-on-standalone-html-exporter-for-blender-three-js/1648009). "how can I package a scene (one room with 3D assets) in a way to send to my client" (Unreal forum, 2020).
- What they found out the hard way: "didnt realise i had to use a game engine for a walkabout" (Blender Artists, 2013); asked in 2025 how to put an Unreal walkthrough on a website, the answer was "nopes, just pixel streaming."
- The doubts a post will meet: "That's a big claim. It obviously does not work as advertised." and "Can't figure out how to get materials though." (replies in the 2026 thread); its author on his own tool: "noticeably darker than the rendered appearance in Blender". Also seen: walking through walls (Verge3D, 2024), "moving is too fast for me" (three.js, 2025), "(Please note, no mobile support)" (three.js, 2020).
- Their nouns, by rough count: walk through / walkthrough (about 9), first person (5), walk around (4), send (4), virtual tour (2). "Explore" and "world" did not appear in an asker's post.
- Why they asked: a client who wants to see a space (4 threads), a portfolio (1), sending models to people without Blender (1). Nobody in these threads asked for other people to be in the scene with them; only builders offered it. "Together" is our differentiator, not yet a wish anyone was found voicing.
- Alternatives named, and the complaint: Unreal builds (an install, or streaming), Sketchfab (an object viewer; first person named as its nearest thing), Verge3D (collision set-up), D5 (cannot put it on a web server), three.js by hand (code).
- Where a post would be on-topic: Blender Artists, whose rule reads "You can make up to one self-promotion post a week" (an add-on goes in Resources > Released Scripts and Themes; your own scene in Artwork > Finished Projects is not counted as self-promotion); the three.js forum's Showcase; Show HN. Every other community's rule is unread and gets read before a draft.
**How they describe the solution:** walkthrough, virtual tour, "walk around in it", "send a link".
**Words to use:** place, room, scene, link, walk around, with you, yours, open.
**Words to avoid:** metaverse, immersive, seamless, spatial, platform, ecosystem (except as the name of the Ecosystem page, which the founder kept on 2026-11-14), "experience", client (say "the page that opens it" or "WebVerse"), document (except beside the actual file), shell (in site copy; the founder names it plainly in long-form), profile, earlier/current generation, "not yet", "coming", "next". In long-form, "creator", not "maker".
**Glossary:** VEML (the file format, "to a world what HTML is to a page"); WebVerse (the page that opens worlds); WorldHub (our hosting and sign-in service); a door (a link from one world to another, a field on the object in Blender).

## Brand Voice
Attributes (founder, 2026-10-24): **plain, trustworthy, warm.** Reference: Obsidian.
- **Plain:** short sentences, contractions, no hype words, say what you press and what happens. Not: terse to the point of cold.
- **Trustworthy:** claims the code supports; what is not built is simply absent (founder, 2026-10-24: "talking about what you cant do doesnt belong"); no fabricated proof. Not: defensive hedging in front of people who have not yet understood the product.
- **Warm:** people and verbs of experience (meet, show, wander, point); friends, clients, your people. Not: cute, exclamation marks, jokes.
Tone by context: marketing pages warm and plain; the first-world guide exact (real button names); How it works precise; errors and status pages matter-of-fact. Posts, replies and messages: see "Voice off the site" below.
Brand words: a world is a web page (the thesis; use after the reader has seen a world). Never use: earlier generation, metaverse, immersive.
**The standing promise (founder, 2026-11-12):** "Web Wide Worlds is designed to make it easy for you to share worlds you already have and make world experiences with the tools you already use." Nobody is asked to ditch their worlds or their tools; Blender is the first exporter, not the product, and the home page and How it works say so somewhere a stranger will read it.
**The founder's own writing (white paper 2.1 edits, 2026-11-12), the voice sample for long-form:**
- "A world is a set of files at a web address, much like a web page. Anyone can open a public world in a browser without installing an application or creating an account. People share it by sending a link."
- "A persistent world does not necessarily need a process running around the clock. It needs somewhere to store its state. Much of the cost of hosting persistent worlds comes from treating those two requirements as if they were the same."
- "The limits matter. Independence means that the content can survive and the code can be forked. It does not mean that software will maintain itself indefinitely."
What his edits did to my draft: measured and complete sentences over clipped ones ("much like a web page", "without installing an application or creating an account"); "creator" and "creators" rather than "maker"; "shell" named plainly; hedged where the fact is a design ("should", "can", "is intended to"); American spelling (center); he uses em dashes in long-form, which stays a no on the site. The site's short copy stays short; long-form (papers, About, How it works) follows this register.

## Voice off the site: posts, replies, messages (2026-11-15)
**Whose voice (founder, 2026-11-15): his own, first person, on his own accounts.** "I", never "we" or "Five Squared announces". There is no company channel. The agent drafts; the founder edits and sends every one himself (monorepo `FUNCTIONS.md`: outbound under his name is founder-only, and every item passes the NASA deny-list first).
`[NEED: two or three things the founder has posted in public (dev.to, LinkedIn, a forum), so this section is built from his writing and not from the agent's guess. Until then the lines below are the agent's proposal, drawn from his site lines and his white paper edits.]`
- **A post in a community we do not own** (a Blender forum, a subreddit): a person showing a thing he made. The link or the clip comes first, then one or two sentences on what it is and how it was made (the real button names), then one specific question he wants answered. No product pitch, no feature list, no company history. Read and follow the community's own rule on self-promotion before drafting.
- **A reply in a thread:** answer the question that was asked, in the asker's words; mention the tool only where it is the answer, and say plainly that he makes it.
- **A message to a contact:** two or three sentences, the link, one ask. A date he gives is a date he keeps.
- **Never, anywhere:** made-up reactions or numbers, a claim the code does not support today, "metaverse", exclamation marks, hashtags stacked at the end, anything that reads as an advert in a place people came to talk.

## Proof Points
- **The first person outside the founder to see the current version (as of 2026-11-15): Ben.** The founder's report: he "really liked it and was amazed that his Blender world worked so smoothly on his old phone." That is the founder's summary, not Ben's words, so it is never set in quote marks as Ben's. `[NEED: Ben's own words; whether he pressed Save and Publish himself; which phone; whether he is happy to be quoted or named; his world's address if it is public]`
- A public demo world: the loft, a textured Blender scene published with Save and Publish, with a door to a second world: https://worlds.worldhub.me/w/w_K1GfSfHUdMIv
- The directory at www.worldhub.me lists worlds at any address (live since 2026-11-02).
- Publishing from Blender in one press: live, October 2026.
- A published world's whole document is 923 bytes plus one model and one sky image (true; shown on the site).
- Two-second-to-walkable budget on the first paint (engineering target held in CI).
- White paper: Web Wide Worlds, version 2.0, 12 November 2026 (`WHITE_PAPER` in `src/links.js`).
`[NEED: the recording; two or three worlds by other people; any talk or coverage with dates; the founder's name, year and place]`

## Goals
**Primary business goal:** adoption: people other than the founder publishing and visiting worlds at their own addresses (THESIS.md).
**Key conversion action:** install the add-on and publish a first world; second: walk into the demo world.
**Current metrics:** `[NEED]`

## Learnings
- 2026-11-15 (watch, one data point): what the one outside viewer remarked on, unprompted, was how smoothly it ran on an old phone, not links, ownership or being together. Worth testing as a lead for Blender artists.
- A caution on the entry below: the October five-second tests were read by five personas played by a model, not by people. They are a reason to prefer one draft over another, never evidence of what artists think. Real reactions replace them as they arrive.
- 2026-10-24: five-second tests. Makers answer to concrete nouns ("Blender scene"); strangers need "a link" and "together"; "world" on the first screen triggers the metaverse eye-roll; "Make a world" three times on one screen reads pushy; "nothing to install" must say "for visitors". Mechanism-led headlines ("a world is a web page", "send a place, not a picture", "a place you can walk into, from a link") lost to motive-led ones. The founder: meet people where they are; lead with the burning problem, not the technology; three audiences, so one front door and three pages.

## Changelog
*Newest first. One line per revision: what changed and why.*
- v2 (2026-11-15): audience and voice session with the founder. Customer Language gains a first forum search (thin, no Reddit). Blender artists are the first audience for outreach; posts go out in the founder's own first-person voice (new section, "Voice off the site"); Ben's reaction recorded as the first outside proof point; lines that broke later founder rules removed ("works today / not yet" on pages, "a direct SketchUp path is next"); demo world, directory and white paper 2.0 brought up to date; the October headline tests marked as model-played personas.
- v1 (2026-10-24, with additions on 2026-11-12): initial context, auto-drafted; the standing promise and the long-form voice sample added from the founder's white paper edits.
