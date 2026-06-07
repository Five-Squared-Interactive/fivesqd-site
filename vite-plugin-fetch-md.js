/**
 * Vite plugin that fetches remote markdown files at build time
 * and exposes them as importable modules.
 *
 * Usage: import content from 'virtual:remote-md/gitworld-tutorial'
 */

const SOURCES = {
  'gitworld-tutorial': 'https://raw.githubusercontent.com/Five-Squared-Interactive/GitWorld-Starter/main/docs/tutorial.md',
};

const VIRTUAL_PREFIX = 'virtual:remote-md/';
const RESOLVED_PREFIX = '\0virtual:remote-md/';

export default function fetchRemoteMd() {
  const cache = new Map();

  return {
    name: 'fetch-remote-md',

    resolveId(id) {
      if (id.startsWith(VIRTUAL_PREFIX)) {
        return RESOLVED_PREFIX + id.slice(VIRTUAL_PREFIX.length);
      }
    },

    async load(id) {
      if (!id.startsWith(RESOLVED_PREFIX)) return;

      const key = id.slice(RESOLVED_PREFIX.length);
      const url = SOURCES[key];
      if (!url) throw new Error(`Unknown remote-md source: ${key}`);

      if (cache.has(key)) return cache.get(key);

      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`[fetch-remote-md] Failed to fetch ${url} (${res.status}), using empty string`);
        const mod = `export default "";`;
        cache.set(key, mod);
        return mod;
      }

      const text = await res.text();
      const mod = `export default ${JSON.stringify(text)};`;
      cache.set(key, mod);
      return mod;
    },
  };
}
