import React from 'react';

// A published world's whole document, as the exporter wrote it (the corpus
// living room, 923 bytes; the long namespace line is wrapped to read). It
// is the proof behind "a world is a web page": everything the world is
// made of fits on one screen as text.
const DOCUMENT = `<?xml version="1.0" encoding="utf-8"?>
<veml xmlns="http://www.fivesqd.com/schemas/veml/4.0"
      xmlns:env="http://www.fivesqd.com/schemas/veml/4.0/profiles/environment"
      version="4.0">
  <metadata>
    <title>Living Room</title>
    <profile>lighting</profile>
    <profile>environment</profile>
  </metadata>
  <environment>
    <background color="#404040ff"/>
    <entry-point id="default">
      <position x="3" y="0.1" z="5"/>
      <rotation x="0" y="0.346936" z="0" w="0.937889"/>
    </entry-point>
    <env:environment-map src="assets/sky.a96a6d688f.png"
      intensity="9.24" diffuse="4.62" specular="0.15"
      glazing-boost="10.7" glazing-f0="0.6" punctual-lights="exclude"/>
    <asset tag="model" src="assets/model.9002eb17ad.glb">
      <transform>
        <position x="0" y="0" z="0"/>
        <rotation x="0" y="0" z="0" w="1"/>
        <scale x="1" y="1" z="1"/>
      </transform>
    </asset>
  </environment>
</veml>`;

const WorldDocument = ({ caption }) => (
  <figure className="doc-frame">
    <pre className="code-example" aria-label="The complete document of a published world"><code>{DOCUMENT}</code></pre>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export default WorldDocument;
