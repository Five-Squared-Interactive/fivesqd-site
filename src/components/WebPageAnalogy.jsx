import React from 'react';

// The one idea, said four ways: every part of a world has the part of a web
// page it corresponds to. Not a metaphor; the same machinery.
const ROWS = [
  { page: 'An HTML file', world: 'A VEML file', what: 'says what is there and where' },
  { page: 'A web browser', world: 'WebVerse, a web page itself', what: 'opens it from its address' },
  { page: 'Any web host', world: 'Any web host', what: 'serves the files; nothing of ours in between' },
  { page: 'A link to another page', world: 'A door to another world', what: 'joins one address to the next' },
  { page: 'View source', world: 'Open the document', what: 'the whole thing, as text' },
];

const WebPageAnalogy = () => (
  <div className="analogy">
    <div className="analogy-head">
      <span>A web page</span>
      <span aria-hidden="true">·</span>
      <span>A world</span>
    </div>
    {ROWS.map((r) => (
      <div className="analogy-row" key={r.page}>
        <span className="analogy-page">{r.page}</span>
        <span className="analogy-arrow" aria-hidden="true">⇄</span>
        <span className="analogy-world">{r.world}</span>
        <span className="analogy-what">{r.what}</span>
      </div>
    ))}
  </div>
);

export default WebPageAnalogy;
