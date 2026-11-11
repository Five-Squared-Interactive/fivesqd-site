import React, { useState } from 'react';

// A published world's whole document, as the exporter wrote it: the loft
// the home page walks into, 787 bytes, fetched from its own address (the
// one long line, the room, is wrapped to read). It is the proof behind "a
// world is a web page": everything the world is made of fits on one screen
// as text. Five parts carry a numbered mark in the gutter; the legend names
// each one, and pointing at a line or a legend entry lights up its partner.
const LINES = [
  ['<?xml version="1.0" encoding="utf-8"?>'],
  ['<veml xmlns="http://www.fivesqd.com/schemas/veml/4.0" version="4.0">'],
  ['  <metadata>'],
  ['    <title>loft</title>', 1],
  ['    <synchronization-service type="worldsync"', 2],
  ['      address="wss://sync.worldhub.me/" id="main"', 2],
  ['      session="room-221a5b9f7e6848c0"/>', 2],
  ['    <profile>lighting</profile>'],
  ['  </metadata>'],
  ['  <environment>'],
  ['    <background panorama="assets/sky.08d7191ce5.jpg"/>', 3],
  ['    <entry-point id="default">', 4],
  ['      <position x="-2.2" y="-0.15" z="-4"/>', 4],
  ['      <rotation x="0" y="-0.707107" z="0" w="0.707107"/>', 4],
  ['    </entry-point>', 4],
  ['    <asset tag="model" src="assets/model.ff539ffd02.glb">', 5],
  ['      <transform>', 5],
  ['        <position x="0" y="0" z="0"/>', 5],
  ['        <rotation x="0" y="0" z="0" w="1"/>', 5],
  ['        <scale x="1" y="1" z="1"/>', 5],
  ['      </transform>', 5],
  ['    </asset>', 5],
  ['  </environment>'],
  ['</veml>'],
];

export const DOCUMENT_MARKS = [
  [1, 'its name'],
  [2, 'the room: where visitors meet each other'],
  [3, 'the sky, a picture'],
  [4, 'where you start, and which way you face'],
  [5, 'the model, a standard glTF file'],
];

const WorldDocument = ({ caption, marks = true }) => {
  const [active, setActive] = useState(null);
  const seen = new Set();
  return (
    <figure className="doc-frame">
      <pre className="code-example" aria-label="The complete document of a published world"><code>
        {LINES.map(([text, mark], i) => {
          const first = Boolean(mark) && !seen.has(mark);
          if (mark) seen.add(mark);
          const cls = mark && active === mark ? 'doc-line doc-line-active' : 'doc-line';
          return (
            <span
              className={cls}
              key={i}
              onMouseEnter={mark ? () => setActive(mark) : undefined}
              onMouseLeave={mark ? () => setActive(null) : undefined}
            >
              {marks && (
                <span className="doc-gutter" aria-hidden={!first}>
                  {first ? <span className="doc-mark"><span className="sr-only">mark </span>{mark}</span> : null}
                </span>
              )}
              <span className="doc-text">{text}</span>
              {'\n'}
            </span>
          );
        })}
      </code></pre>
      {marks && (
        <ol className="doc-legend" aria-label="What the marked lines are">
          {DOCUMENT_MARKS.map(([n, what]) => (
            <li
              key={n}
              className={active === n ? 'is-active' : ''}
              onMouseEnter={() => setActive(n)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(n)}
              onBlur={() => setActive(null)}
              tabIndex={0}
            >
              <span className="doc-mark" aria-hidden="true">{n}</span> {what}
            </li>
          ))}
        </ol>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default WorldDocument;
