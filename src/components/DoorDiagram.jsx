import React from 'react';

// Worlds link to worlds: two worlds at two addresses, and a door in one of
// them that holds the other's address. The link is one way, like a web
// link: the other world links back only if its maker adds a door of their
// own. The addresses are the point, so they are drawn. A row for wide
// screens, a column for phones.
const Arrow = ({ id }) => (
  <defs>
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
  </defs>
);

const TITLE = 'Two worlds at two different addresses; a door in the first holds the address of the second';

const World = ({ x, y, w, addr, title, sub, door }) => (
  <g className="dd-world">
    <rect x={x} y={y} width={w} height="150" rx="16" />
    <text x={x + w / 2} y={y - 10} textAnchor="middle" className="dd-addr">{addr}</text>
    <text x={x + 30} y={y + 40} className="dd-title">{title}</text>
    <text x={x + 30} y={y + 68} className="dd-sub">{sub}</text>
    {door && (
      <>
        <rect x={x + w - 80} y={y + 50} width="46" height="80" rx="4" className="dd-door" />
        <circle cx={x + w - 44} cy={y + 92} r="3" className="dd-knob" />
      </>
    )}
  </g>
);

const DoorDiagram = () => (
  <figure className="doors">
    <svg className="dd-wide" viewBox="0 0 960 240" role="img" aria-labelledby="dd-wide-title">
      <title id="dd-wide-title">{TITLE}</title>
      <Arrow id="dd-arrow-w" />
      <World x={30} y={30} w={380} addr="https://your.site/room/" title="Your room" sub="a scene you exported" door />
      <line x1="416" y1="120" x2="538" y2="120" className="dd-line" markerEnd="url(#dd-arrow-w)" />
      <text x="477" y="106" textAnchor="middle" className="dd-sub">the door holds</text>
      <text x="477" y="142" textAnchor="middle" className="dd-sub">the other address</text>
      <World x={550} y={30} w={380} addr="https://a-friend.example/garden/" title="A friend's garden" sub="at their own address" />
      <text x="480" y="222" textAnchor="middle" className="dd-foot">In Blender, a door is a field on the object. They link back only if they add a door of their own.</text>
    </svg>

    <svg className="dd-tall" viewBox="0 0 360 500" role="img" aria-labelledby="dd-tall-title">
      <title id="dd-tall-title">{TITLE}</title>
      <Arrow id="dd-arrow-t" />
      <World x={20} y={30} w={320} addr="https://your.site/room/" title="Your room" sub="a scene you exported" door />
      <line x1="180" y1="186" x2="180" y2="258" className="dd-line" markerEnd="url(#dd-arrow-t)" />
      <text x="196" y="216" className="dd-sub">the door holds</text>
      <text x="196" y="236" className="dd-sub">the other address</text>
      <World x={20} y={290} w={320} addr="https://a-friend.example/garden/" title="A friend's garden" sub="at their own address" />
      <text x="180" y="470" textAnchor="middle" className="dd-foot-small">A door is a field on the object. They link back</text>
      <text x="180" y="490" textAnchor="middle" className="dd-foot-small">only if they add a door of their own.</text>
    </svg>
  </figure>
);

export default DoorDiagram;
