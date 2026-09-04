/**
 * Build-time server entry — renders one route to a complete HTML string.
 *
 * Used ONLY by scripts/prerender.mjs (via `vite build --ssr`); never shipped
 * to the browser. renderToPipeableStream (not renderToString) because the
 * routes are React.lazy: the stream's onAllReady fires after every lazy
 * chunk has loaded and rendered, so the collected HTML is the full page,
 * not the Suspense fallback.
 */
import React from 'react';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppShell } from './App';

export function render(path) {
  return new Promise((resolve, reject) => {
    const element = (
      <React.StrictMode>
        <StaticRouter location={path}>
          <AppShell />
        </StaticRouter>
      </React.StrictMode>
    );
    const { pipe } = renderToPipeableStream(element, {
      onAllReady() {
        const chunks = [];
        const sink = new Writable({
          write(chunk, _enc, cb) {
            chunks.push(chunk);
            cb();
          },
          final(cb) {
            resolve(Buffer.concat(chunks).toString('utf8'));
            cb();
          },
        });
        pipe(sink);
      },
      onError(err) {
        reject(err);
      },
    });
  });
}
