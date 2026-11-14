# Publicist review of the v4 drafts, 2026-10-24

Reviewed: fivesqd-site `site-v4` at bddd712 and WebVerse-Website `site-v4`
at 76f00cf, in real Chrome at 1280 and 390, as a communications
strategist, not an engineer. The founder's prompt: *"it feels very
difficult to understand for a random person that goes to the page. we
need to think about the audience. I want the website to be very high
quality."* Audiences, agreed with the founder: (1) a Blender user or 3D
artist with a scene; (2) a person sent a link to a world; (3) developers;
(4) press or a partner.

**Verdict: 4/10 as a launch page for Blender artists.** Accurate and calm,
but a stranger sees a slogan, one dim picture and a page of XML. It never
shows a person walking into a world they made, which is the entire
product. **The single change that would move it most:** a 15–25 second
recording in the hero of a real Blender scene being published and walked
into, together, on a phone, through a door, under a concrete headline,
with "a world is a web page" moved to after the visitor has seen it.

## 1. The five-second test

**fivesqd.com home, first screen.** Headline "A world is a web page.",
the document/address subhead, "Make your own from Blender", "See what a
world is made of", over a darkened frame of The Overlook. The header is a
"5" tile with no company name.
- Blender artist: "some kind of Blender-to-web exporter", exactly the
  reading the founder wants to avoid; "Blender" is the only concrete noun
  on screen. The dim low-poly frame tells an artist their textured work
  will look like that.
- Person sent a link: "a game? a metaverse thing?" No "walk in" button;
  the only path scrolls to a table and XML. They leave.
- Developer: the web-parts table is the best part of the site for them;
  then "being prepared" six times and "earlier generation" three times.
  Nothing current to clone.
- Press: no company name, founder, date, demo or "what is live". About
  still carries the founder placeholder.

Home screens 2–6: table, XML captioned as a *different* world from the
picture, link diagram, door diagram, "Make one", "Who this is for",
"Open". The strongest material for the primary audience ("Make one", the
door) sits at screens 4–5.

**/first-world** works; "From a Blender scene to a link anyone can walk
into" is the clearest sentence on the site and it is on a secondary page.
No screenshots; the first thing it says is that the add-on needs Node.js.
**/products**: seven brand tiles in seven styles reads as a pile of
brands; "Five pieces" over five cards then two more; MyWorlds listed as
"not yet live" breaks the README's own rule. **/technology**: right home
for the XML and the table; the CORS recipe is docs, not marketing.
**/ecosystem**: every item "being prepared"; does not belong in the nav
yet. **/about**: no person, face, year or place.

**webverse.fivesqd.com**: "The client for worlds that are web pages" and
"a document at a URL" read as a developer tool. **"Open WebVerse" with no
world shows an empty page with a menu button** (checked 2026-10-24), so
the main call to action is a dead end. "Open a world by its address" asks
for an index.veml URL no ordinary visitor has. The second paragraph names
Access-Control-Allow-Origin. "What it is not" answers questions nobody
arriving here asked.

## 2. The one sentence

After the home page a stranger should be able to say: *"You make a 3D
place in Blender, press publish, and anyone with the link walks around in
it together in their browser. And it's an ordinary web page, so it's
yours to change, link and host anywhere."* Concrete outcome first;
ownership and flexibility second, as the twist.

fivesqd.com, recommended:
- Headline: **Build a place. Send a link. Meet there.**
- Subhead: Publish a Blender scene as a 3D world anyone can walk into,
  together, from a phone or laptop. Nothing to install. And because a
  world is a web page, it is yours: read it, change it, link it to other
  worlds.
- Primary: Make a world from Blender. Secondary: Walk into one (once a
  demo exists); until then, Watch it in 20 seconds.
- Alternate A: *Your 3D scene, as a place people walk into.* / Press Save
  and Publish in Blender. Send the link. Friends walk in on a phone or
  laptop, and see each other there. The world is plain files at a web
  address, like any page: yours to change and link.
- Alternate B (only with a moving hero): *3D worlds that work like web
  pages.* / Each one lives at its own address, opens in any browser, and
  links to the next through a door. Make yours from Blender in one press.
- Do not use "A world is a web page" as the headline; keep it as the
  title of the section that explains it.

webverse.fivesqd.com, recommended:
- Headline: **Walk into 3D worlds, right in your browser.**
- Subhead: Got a link to a world? Click it and you're in, on a phone, a
  laptop or a headset, with nothing to install. WebVerse is the free, open
  page that opens it.
- Primary: Walk into a world (demo) or See how it looks (recording).
  Secondary: Make your own (fivesqd.com/first-world).
- Alternates: *Every world, one link away.* / *You've been sent a world.
  Here's how to walk around in it.* (controls first).
- Move the address box down under "Host your own world? Link to it like
  this."

## 3. Message hierarchy (primary audience: the Blender artist)

The link-clicker mostly never sees fivesqd.com; they land in the world,
so the world screen is their real front door and should carry a small
"Made with Blender. Make your own →". Press is served by About and a press
section; developers by How it works.

Home, in order (job; shows; says):
1. **Hero.** What it is and what happens. A 15–25 s muted loop: Blender,
   Save and Publish, a link, a phone opens it, a second person appears,
   they walk through a door. Headline, subhead, two buttons; company name
   in the header.
2. **Three steps.** It is easy and real. Three real screenshots (add-on
   panel, the link, the world on a phone). Install · Save and Publish ·
   Send the link. (The draft's "Make one", moved up from screen 5.)
3. **Walk in together.** Other people are there. One frame with two
   visitors and name labels. Phone controls, no install, Everyone / Only
   People I Allow.
4. **Worlds link to worlds.** What makes this different. A short clip of
   walking through a door into a different world with the address bar
   changing. "In Blender, a door is a field on an object."
5. **A world is a web page.** The thesis, the founder's flexibility
   point. The world beside its own document with the five marks (once a
   matching pair exists). At most three rows of the web-parts table; link
   to How it works for the rest. Merge "How a link works" in here.
6. **Proof and open.** A strip: what is open, "Live today:", a date, the
   founder's name, links. "Open source (MIT). Built by Five Squared
   Interactive since <year>."
7. Final call to action.

Cut from home: the XML block and its two-worlds caption (to How it works
until a matching pair exists), "Who this is for", the "Open" paragraph
that lists five product names.

## 4. Jargon and tone

Replace or move: "client" (say "browser" or "WebVerse, the page that
opens worlds"; to a non-engineer a client is a customer); "document" (say
"a set of files" or "a web page" except beside the actual text); "address
you own" (say "at its own web address", keep "own" for the ownership
point); VEML (once, in section 5: "to a world what HTML is to a page";
never on screen 1); glTF ("the standard 3D model file Blender already
exports", How it works only); index.veml (fine as a trick in section 5,
not in WebVerse's first fold); WorldOS, WorldSync, StraightFour (never on
home); "sandbox" ("a world's scripts can't touch your device or your
data"); CORS, URL-encoded, #world-url= (developer section only); "earlier
generation", "current generation", "being prepared" (insider history;
replace with one "What's live" block); "Save as My World box" (exact on
first-world; on home say "press Save and Publish").

Sentences written by engineers for engineers: "Each part of a world is
the part of a web page it stands in for." · "A world that is only visited
needs the first two." · "Every published world's link opens WebVerse
already pointed at that world." · "A world does not need WorldHub to
exist; today the client page that opens it is served from WorldHub." ·
"Anything a client does not understand it ignores…" · "the design puts
nothing of ours between a link and the world it points to" · "Today the
client page it opens in is served from worlds.worldhub.me…". The pattern:
the copy pre-empts an architect's objections in front of readers who do
not yet know what the product is. Defensive honesty belongs on How it
works; on home it reads as nervous. Missing: people and verbs of
experience (meet, show, wander, step through, invite). Nearly every
sentence has a file or an address as its subject.

## 5. What "very high quality" means here

Borrow from: **spline.design** (a live, moving scene in the hero; loops in
place of icon cards); **obsidian.md** (the closest message: "your notes
are plain files you own"; product image first, ownership second, a dated
changelog as proof of life); **godotengine.org** (showcase first, "made
with" thumbnails with names, open source as a reason to trust, dated
release posts, a press/brand page); **hubs.mozilla.com** in its active
years ("click a link, you're in a room together" shown as a 10 s clip of
avatars on a phone and a laptop); **excalidraw.com / tldraw.com** (the
homepage is the product; once a demo exists the hero opens it).

What they do that the draft does not: high-resolution, varied images of
real outputs (the draft uses one dim low-poly frame four times across two
sites); at least one moving demo above the fold; a single obvious "try
it"; proof (names, dates, things made by others, a changelog); five to
seven sections each one idea, alternating picture and text (every section
of the draft is centred text, which is why it reads as a template);
restraint (one name per section); one visual family across marketing site
and product (fivesqd light/blue and webverse navy read as two companies).

## 6. Information architecture

Draft nav: What we make / How it works / Your first world / Build on it /
About. Products and How it works overlap; Build on it points at things
"being prepared".

Ship: **Five Squared (logo + wordmark) · Make a world · How it works ·
Developers · About · [Make a world →]**.
- Make a world = /first-world with screenshots; a verb.
- How it works = /technology merged with the products content; each
  piece introduced where it does its job; WorldHub a sub-page.
- Developers = /ecosystem only once a spec, repo or protocol document
  exists; until then fold into the bottom of How it works and leave it
  out of the nav.
- About = people, history, beliefs, press, contact.
- "Worlds"/"Explore" only with three or more public worlds or when
  Search is live. Drop "What we make" as a page; keep /products as a
  redirect.

webverse nav: WebVerse · Walk into a world (or See it) · Controls · Make
your own · For hosts · Contact; "by Five Squared Interactive" visible.

## 7. Proof and trust

Missing: who (no founder name, face, place, bio; About placeholder); how
long (the "earlier generation" is a strength hidden as an apology:
rewrite as history, "WebVerse 2 ran as a Windows app; version 4, rebuilt
for the browser, launched <month 2026>"); what is live today (about 20
hedges; replace with one dated block: Live: publish from Blender, hosted
worlds, sign-in, people together, doors. Next: a public demo world, the
directory, downloading your folder, the 4.0 spec release); what has been
shown (talks, posts, the white paper, with dates); a press kit (logos, 3–5
screenshots, the recording, 50- and 150-word descriptions, bio and
headshot, contact, white paper; check og-world-is-a-page.png reads at
thumbnail size); a way to try it (blocked on the demo; the recording is
the interim); contact (add press and partner lines); "MIT-licensed" while
the code is not public reads as a promise (say "will be released under
MIT" or link the earlier repos).

## 8. The product-name problem

A first-time visitor meets two names on home, three at most: WebVerse
("the free page that opens worlds"), WorldHub ("hosted free on WorldHub,
our service"), VEML once in the thesis section. Not on home: StraightFour,
WorldSync, WorldOS, WorldKit (the user meets "the Blender add-on"),
MyWorlds (nowhere until live). Rule: name a thing on a page only if the
visitor will type it, click it or see it in a URL on that journey.

## 9. Imagery, in priority order

1. A 15–25 s screen recording: Blender → Save and Publish → link → phone
   opens it → a second visitor appears → through a door. Muted, looping,
   poster frame. Founder only. The best stand-in for the missing demo.
2. One good-looking textured scene, published, with a door. Hero still,
   the matching document pair, the demo link, the press screenshots.
   Founder. Warm, inviting, interior or small courtyard.
3. Two visitors in one frame with name labels, phone and laptop side by
   side. Founder, with a second device or a friend.
4. The door moment with the address bar changing. Founder.
5. The add-on panel, cropped at 2–3x, Save and Publish visible; the six
   first-world slots. Founder, ten minutes.
6. A phone in hand showing a world with the two sticks. Founder records,
   team frames.
7. The world beside its own document, numbered. Team, once 2 exists.
8. "Made with" thumbnails: for now two or three of the founder's worlds
   in different styles, to show range.

Stop using the wall of XML as a main image, and the same Overlook frame
four times.

## 10. Prioritised changes

1. Hero rewrite (item 2), company name in the header, thesis to
   section 5. Small. Team; founder approves the words.
2. Record the 20 s clip; put it in the hero. Medium. Founder records;
   team encodes, poster, embeds.
3. Publish one textured scene with a door; make it the demo. Medium.
   Founder.
4. Reorder home per item 3; cut the XML, "Who this is for", "Open" from
   home. Small. Team now.
5. Fill About: name, photo, one-line bio, year, the earlier versions as
   history. Small. Founder (facts, photo).
6. Replace the hedges with one dated Live today / Next block. Small.
   Team; founder confirms dates.
7. webverse rewrite for the link-clicker: headline, controls higher,
   address box to "For hosts", "by Five Squared Interactive"; retarget
   "Open WebVerse" (it opens an empty page). Small. Team now.
8. "Made with Blender. Make your own →" on the published-world page or
   client UI. Medium. Team (v4-monorepo), a small link; founder to
   approve since it touches the client.
9. Merge /products into How it works; remove MyWorlds and the five/seven
   mismatch. Medium. Team now.
10. Fill the six first-world screenshots; Node.js note below the install
    step. Small. Founder.
11. A press kit section (About#press). Small to set up. Team + founder
    assets.
12. One visual system for both sites; picture-and-text layout instead of
    all-centred. Medium. Team now.
13. Take Build on it / Developers out of the nav until something is
    public. Small. Founder decision.
14. Once v4-monorepo #739 lands, embed the live world in the hero.
    Team, after the demo-world decision.

What the missing demo world costs: for a product whose whole value is
"walk into it", nothing to walk into and nothing moving removes most of
the home page's persuasive power. The recording recovers most of it
without claiming anything untrue; the live demo recovers the rest.
