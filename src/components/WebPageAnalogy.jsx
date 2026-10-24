import React from 'react';

// The one idea as a table: every part of a world has the part of a web
// page it stands in for. Rows a reader can check, not a slogan.
const ROWS = [
  { page: 'An HTML file', world: 'A VEML file', what: 'says what is there and where' },
  { page: 'A browser', world: 'A browser, running WebVerse (itself a page)', what: 'opens it from its address' },
  { page: 'A web server', world: 'The same web server', what: 'serves the files, nothing added' },
  { page: 'A link to another page', world: 'A door to another world', what: 'joins one address to the next' },
  { page: 'View source', world: 'Add /index.veml to the address', what: 'the whole thing, as text' },
];

const WebPageAnalogy = () => (
  <div className="analogy" role="table" aria-label="Each part of a world and the part of a web page it stands in for">
    <div className="analogy-head" role="row">
      <span role="columnheader">A web page</span>
      <span aria-hidden="true">·</span>
      <span role="columnheader">A world</span>
      <span role="columnheader" className="sr-only">What it does</span>
    </div>
    {ROWS.map((r) => (
      <div className="analogy-row" key={r.page} role="row">
        <span className="analogy-page" role="cell">{r.page}</span>
        <span className="analogy-arrow" aria-hidden="true">⇄</span>
        <span className="analogy-world" role="cell">{r.world}</span>
        <span className="analogy-what" role="cell">{r.what}</span>
      </div>
    ))}
  </div>
);

export default WebPageAnalogy;
