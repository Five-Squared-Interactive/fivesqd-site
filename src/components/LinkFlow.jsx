import React from 'react';

// How a link works, as one picture: a scene becomes a folder, the folder
// gets an address, the address opens in any browser. Inline SVG so it
// takes the page's colours in light and dark. Two drawings of the same
// thing: a row for wide screens, a column for phones (an SVG cannot
// reflow, and a row shrunk to a phone is unreadable).
const Arrow = ({ id }) => (
  <defs>
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
  </defs>
);

const Devices = ({ x, y }) => (
  <>
    <rect x={x} y={y} width="70" height="46" rx="5" className="lf-screen" />
    <rect x={x + 82} y={y - 6} width="30" height="56" rx="5" className="lf-screen" />
  </>
);

const TITLE = 'A scene becomes a folder of files, the folder gets an address, and the address opens in a browser on any device';

const LinkFlow = () => (
  <figure className="linkflow">
    <svg className="lf-wide" viewBox="0 0 960 220" role="img" aria-labelledby="lf-wide-title">
      <title id="lf-wide-title">{TITLE}</title>
      <Arrow id="lf-arrow-w" />
      <g className="lf-node">
        <rect x="20" y="40" width="200" height="120" rx="14" />
        <text x="120" y="88" textAnchor="middle" className="lf-title">A scene</text>
        <text x="120" y="114" textAnchor="middle" className="lf-sub">Blender, today</text>
        <text x="120" y="136" textAnchor="middle" className="lf-sub">Save and Publish</text>
      </g>
      <line x1="226" y1="100" x2="268" y2="100" className="lf-line" markerEnd="url(#lf-arrow-w)" />
      <g className="lf-node">
        <rect x="274" y="40" width="200" height="120" rx="14" />
        <text x="374" y="78" textAnchor="middle" className="lf-title">A folder</text>
        <text x="374" y="104" textAnchor="middle" className="lf-mono">index.veml</text>
        <text x="374" y="126" textAnchor="middle" className="lf-mono">assets/model.glb</text>
        <text x="374" y="148" textAnchor="middle" className="lf-sub">plain files</text>
      </g>
      <line x1="480" y1="100" x2="522" y2="100" className="lf-line" markerEnd="url(#lf-arrow-w)" />
      <g className="lf-node">
        <rect x="528" y="40" width="200" height="120" rx="14" />
        <text x="628" y="82" textAnchor="middle" className="lf-title">An address</text>
        <text x="628" y="110" textAnchor="middle" className="lf-mono">https://…/w/…</text>
        <text x="628" y="136" textAnchor="middle" className="lf-sub">any web host</text>
      </g>
      <line x1="734" y1="100" x2="776" y2="100" className="lf-line" markerEnd="url(#lf-arrow-w)" />
      <g className="lf-node">
        <rect x="782" y="40" width="160" height="120" rx="14" />
        <Devices x={806} y={70} />
        <text x="862" y="146" textAnchor="middle" className="lf-sub">a browser, any device</text>
      </g>
      <text x="480" y="200" textAnchor="middle" className="lf-foot">Nothing to install. Nothing of ours between the link and the world.</text>
    </svg>

    <svg className="lf-tall" viewBox="0 0 360 720" role="img" aria-labelledby="lf-tall-title">
      <title id="lf-tall-title">{TITLE}</title>
      <Arrow id="lf-arrow-t" />
      <g className="lf-node">
        <rect x="40" y="10" width="280" height="120" rx="14" />
        <text x="180" y="58" textAnchor="middle" className="lf-title">A scene</text>
        <text x="180" y="84" textAnchor="middle" className="lf-sub">Blender, today</text>
        <text x="180" y="106" textAnchor="middle" className="lf-sub">Save and Publish</text>
      </g>
      <line x1="180" y1="136" x2="180" y2="174" className="lf-line" markerEnd="url(#lf-arrow-t)" />
      <g className="lf-node">
        <rect x="40" y="180" width="280" height="130" rx="14" />
        <text x="180" y="220" textAnchor="middle" className="lf-title">A folder</text>
        <text x="180" y="248" textAnchor="middle" className="lf-mono">index.veml</text>
        <text x="180" y="270" textAnchor="middle" className="lf-mono">assets/model.glb</text>
        <text x="180" y="294" textAnchor="middle" className="lf-sub">plain files</text>
      </g>
      <line x1="180" y1="316" x2="180" y2="354" className="lf-line" markerEnd="url(#lf-arrow-t)" />
      <g className="lf-node">
        <rect x="40" y="360" width="280" height="120" rx="14" />
        <text x="180" y="402" textAnchor="middle" className="lf-title">An address</text>
        <text x="180" y="430" textAnchor="middle" className="lf-mono">https://…/w/…</text>
        <text x="180" y="456" textAnchor="middle" className="lf-sub">any web host</text>
      </g>
      <line x1="180" y1="486" x2="180" y2="524" className="lf-line" markerEnd="url(#lf-arrow-t)" />
      <g className="lf-node">
        <rect x="40" y="530" width="280" height="130" rx="14" />
        <Devices x={124} y={556} />
        <text x="180" y="640" textAnchor="middle" className="lf-sub">a browser, any device</text>
      </g>
      <text x="180" y="700" textAnchor="middle" className="lf-foot-small">Nothing to install. Nothing of ours in between.</text>
    </svg>
  </figure>
);

export default LinkFlow;
