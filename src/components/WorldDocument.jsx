import React, { useState } from 'react';

// A published world's whole document, as the exporter wrote it (the corpus
// living room, 923 bytes; the long namespace line is wrapped to read). It
// is the proof behind "a world is a web page": everything the world is
// made of fits on one screen as text. Five parts carry a numbered mark in
// the gutter; the legend names each one, and pointing at a line or a
// legend entry lights up its partner.
const LINES = [
  ['<?xml version="1.0" encoding="utf-8"?>'],
  ['<veml xmlns="http://www.fivesqd.com/schemas/veml/4.0"'],
  ['      xmlns:env='],
  ['        "http://www.fivesqd.com/schemas/veml/4.0/profiles/environment"'],
  ['      version="4.0">'],
  ['  <metadata>'],
  ['    <title>Living Room</title>', 1],
  ['    <profile>lighting</profile>'],
  ['    <profile>environment</profile>'],
  ['  </metadata>'],
  ['  <environment>'],
  ['    <background color="#404040ff"/>', 2],
  ['    <entry-point id="default">', 3],
  ['      <position x="3" y="0.1" z="5"/>', 3],
  ['      <rotation x="0" y="0.346936" z="0" w="0.937889"/>', 3],
  ['    </entry-point>', 3],
  ['    <env:environment-map src="assets/sky.a96a6d688f.png"', 4],
  ['      intensity="9.24" diffuse="4.62" specular="0.15"', 4],
  ['      glazing-boost="10.7" glazing-f0="0.6" punctual-lights="exclude"/>', 4],
  ['    <asset tag="model" src="assets/model.9002eb17ad.glb">', 5],
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
  [2, 'the backdrop colour'],
  [3, 'where you start, and which way you face'],
  [4, 'the sky that lights it, and how bright'],
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
