import React from 'react';

// A visible stand-in for a picture or recording that does not exist yet,
// so the page's shape can be judged before the founder makes the asset.
// Each slot says what goes in it. Replace the Slot with the real <img> or
// <video> and nothing around it changes. Never deploy a page with a Slot
// on it: `npm run build` lists them (scripts/prerender.mjs).
const Slot = ({ label, ratio = '16 / 9', poster, kind = 'image', className = '' }) => (
  <div
    className={`slot ${poster ? 'slot-poster' : ''} ${className}`.trim()}
    style={{ aspectRatio: ratio, backgroundImage: poster ? `url(${poster})` : undefined }}
    role="img"
    aria-label={`Placeholder for a ${kind === 'video' ? 'recording' : 'picture'}: ${label}`}
    data-slot
  >
    <span className="slot-kind">{kind === 'video' ? 'Recording to come' : 'Picture to come'}</span>
    <span className="slot-label">{label}</span>
  </div>
);

export default Slot;
