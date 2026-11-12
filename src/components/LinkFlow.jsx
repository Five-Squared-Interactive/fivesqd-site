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

// A laptop and a phone, drawn: a screen on a hinge over a base with a
// keyboard line, and a phone with its speaker slit and home bar.
const Devices = ({ x, y }) => (
  <g className="lf-devices">
    <rect x={x} y={y} width="70" height="44" rx="4" className="lf-shell" />
    <rect x={x + 4} y={y + 4} width="62" height="34" rx="2" className="lf-screen" />
    <path d={`M ${x - 6} ${y + 44} h 82 l 4 6 h -90 z`} className="lf-shell" />
    <line x1={x + 27} y1={y + 47} x2={x + 43} y2={y + 47} className="lf-detail" />
    <rect x={x + 84} y={y - 6} width="30" height="56" rx="6" className="lf-shell" />
    <rect x={x + 87} y={y} width="24" height="42" rx="2" className="lf-screen" />
    <line x1={x + 95} y1={y - 3} x2={x + 103} y2={y - 3} className="lf-detail" />
    <line x1={x + 93} y1={y + 46.5} x2={x + 105} y2={y + 46.5} className="lf-detail" />
  </g>
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
        <text x="120" y="114" textAnchor="middle" className="lf-sub">in the tool you already use</text>
        <text x="120" y="136" textAnchor="middle" className="lf-sub">exported, one way</text>
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
        <text x="628" y="110" textAnchor="middle" className="lf-mono">worlds.worldhub.me/w/…</text>
        <text x="628" y="136" textAnchor="middle" className="lf-sub">hosted for you, today</text>
      </g>
      <line x1="734" y1="100" x2="776" y2="100" className="lf-line" markerEnd="url(#lf-arrow-w)" />
      <g className="lf-node">
        <rect x="782" y="40" width="160" height="120" rx="14" />
        <Devices x={806} y={70} />
        <text x="862" y="146" textAnchor="middle" className="lf-sub">a browser, any device</text>
      </g>
      <text x="480" y="200" textAnchor="middle" className="lf-foot">No account and no install to visit. The files are served like any page, and any host can serve them.</text>
    </svg>

    <svg className="lf-tall" viewBox="0 0 360 740" role="img" aria-labelledby="lf-tall-title">
      <title id="lf-tall-title">{TITLE}</title>
      <Arrow id="lf-arrow-t" />
      <g className="lf-node">
        <rect x="40" y="10" width="280" height="120" rx="14" />
        <text x="180" y="58" textAnchor="middle" className="lf-title">A scene</text>
        <text x="180" y="84" textAnchor="middle" className="lf-sub">in the tool you already use</text>
        <text x="180" y="106" textAnchor="middle" className="lf-sub">exported, one way</text>
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
        <text x="180" y="430" textAnchor="middle" className="lf-mono">worlds.worldhub.me/w/…</text>
        <text x="180" y="456" textAnchor="middle" className="lf-sub">hosted for you, today</text>
      </g>
      <line x1="180" y1="486" x2="180" y2="524" className="lf-line" markerEnd="url(#lf-arrow-t)" />
      <g className="lf-node">
        <rect x="40" y="530" width="280" height="130" rx="14" />
        <Devices x={124} y={556} />
        <text x="180" y="640" textAnchor="middle" className="lf-sub">a browser, any device</text>
      </g>
      <text x="180" y="698" textAnchor="middle" className="lf-foot-small">No account and no install to visit.</text>
      <text x="180" y="720" textAnchor="middle" className="lf-foot-small">Any host can serve the files.</text>
    </svg>
  </figure>
);

export default LinkFlow;
