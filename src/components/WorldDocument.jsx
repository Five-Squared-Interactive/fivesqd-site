import React from 'react';

// A published world's whole document, as the exporter wrote it (the corpus
// living room, 923 bytes; the long namespace line is wrapped to read). It
// is the proof behind "a world is a web page": everything the world is
// made of fits on one screen as text. Four lines carry a numbered mark,
// and the caption says what each one is.
const LINES = [
  ['<?xml version="1.0" encoding="utf-8"?>'],
  ['<veml xmlns="http://www.fivesqd.com/schemas/veml/4.0"'],
  ['      xmlns:env="http://www.fivesqd.com/schemas/veml/4.0/profiles/environment"'],
  ['      version="4.0">'],
  ['  <metadata>'],
  ['    <title>Living Room</title>', 1],
  ['    <profile>lighting</profile>'],
  ['    <profile>environment</profile>'],
  ['  </metadata>'],
  ['  <environment>'],
  ['    <background color="#404040ff"/>', 2],
  ['    <entry-point id="default">', 3],
  ['      <position x="3" y="0.1" z="5"/>'],
  ['      <rotation x="0" y="0.346936" z="0" w="0.937889"/>'],
  ['    </entry-point>'],
  ['    <env:environment-map src="assets/sky.a96a6d688f.png"', 4],
  ['      intensity="9.24" diffuse="4.62" specular="0.15"'],
  ['      glazing-boost="10.7" glazing-f0="0.6" punctual-lights="exclude"/>'],
  ['    <asset tag="model" src="assets/model.9002eb17ad.glb">', 5],
  ['      <transform>'],
  ['        <position x="0" y="0" z="0"/>'],
  ['        <rotation x="0" y="0" z="0" w="1"/>'],
  ['        <scale x="1" y="1" z="1"/>'],
  ['      </transform>'],
  ['    </asset>'],
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

const WorldDocument = ({ caption, marks = true }) => (
  <figure className="doc-frame">
    <pre className="code-example" aria-label="The complete document of a published world"><code>
      {LINES.map(([text, mark], i) => (
        <span className={mark ? 'doc-line doc-line-marked' : 'doc-line'} key={i}>
          {marks && mark ? <span className="doc-mark" aria-label={`mark ${mark}`}>{mark}</span> : marks ? <span className="doc-mark doc-mark-empty" aria-hidden="true" /> : null}
          {text}
          {'\n'}
        </span>
      ))}
    </code></pre>
    {marks && (
      <ol className="doc-legend">
        {DOCUMENT_MARKS.map(([n, what]) => (
          <li key={n}><span className="doc-mark">{n}</span> {what}</li>
        ))}
      </ol>
    )}
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export default WorldDocument;
