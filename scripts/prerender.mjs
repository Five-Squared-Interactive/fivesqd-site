/**
 * Prerender every route to a REAL file — the structural fix for the
 * GitHub Pages soft-404.
 *
 * Before this, only / existed as a file; every deep route was served
 * through the 404.html SPA shim: a human saw the right page, but the HTTP
 * status was 404 — so crawlers, unfurlers, link checkers, and anyone
 * fetching a sent link programmatically saw a dead URL (the monorepo's
 * nightly link-status job has been flagging exactly this).
 *
 * After `vite build` (client) and `vite build --ssr` (server entry), this
 * script renders each route in src/routes.js through the app itself and
 * writes `build/<path>/index.html`: the built index.html as template, the
 * app's real markup in #root, and the route's title/description/canonical/
 * OG/Twitter metadata in the head. Old handed-out URLs (REDIRECTS) get a
 * real 200 page that immediately forwards. Status codes and content agree
 * everywhere; the 404 shim remains only for genuinely unknown paths, which
 * SHOULD 404.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = join(root, 'build');

const { ROUTES, REDIRECTS } = await import(
  pathToFileURL(join(root, 'src', 'routes.js')).href
);
const { render } = await import(
  pathToFileURL(join(root, 'build-ssr', 'entry-server.js')).href
);

const template = readFileSync(join(buildDir, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('build/index.html has no empty <div id="root"></div> to fill');
}

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function withMeta(html, { title, description, url }) {
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${url}$2`,
    )
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`);
}

const outPathFor = (routePath) =>
  routePath === '/'
    ? join(buildDir, 'index.html')
    : join(buildDir, ...routePath.replace(/^\//, '').split('/'), 'index.html');

let failures = 0;
for (const route of ROUTES) {
  const url = `https://fivesqd.com${route.path === '/' ? '/' : route.path}`;
  try {
    const appHtml = await render(route.path);
    if (!appHtml || appHtml.length < 500) {
      throw new Error(`suspiciously small render (${appHtml.length} chars)`);
    }
    let html = withMeta(template, { ...route, url });
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    const out = outPathFor(route.path);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, html, 'utf8');
    console.log(`prerender: ${route.path.padEnd(22)} → ${appHtml.length} chars of markup`);
  } catch (err) {
    failures++;
    console.error(`prerender FAILED for ${route.path}:`, err);
  }
}

// Old handed-out URLs: a real 200 that forwards immediately. A sent link is
// never allowed to rot into a 404 — "the content exists elsewhere" does not
// fix a dead link in an email (see the nightly link-status doctrine).
for (const [from, to] of Object.entries(REDIRECTS)) {
  const target = escapeAttr(to);
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Five Squared Interactive</title>
    <link rel="canonical" href="https://fivesqd.com${target.split('#')[0]}" />
    <meta http-equiv="refresh" content="0;url=${target}" />
    <script>window.location.replace(${JSON.stringify(to)});</script>
  </head>
  <body>
    <p>This page has moved to <a href="${target}">fivesqd.com${target}</a>.</p>
  </body>
</html>
`;
  const out = outPathFor(from);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html, 'utf8');
  console.log(`redirect:  ${from.padEnd(22)} → ${to}`);
}

if (failures > 0) {
  console.error(`prerender: ${failures} route(s) failed — refusing to ship a partial site`);
  process.exit(1);
}
console.log(`prerender: OK — ${ROUTES.length} routes + ${Object.keys(REDIRECTS).length} redirects`);
