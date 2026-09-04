import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Every route is prerendered at build time (scripts/prerender.mjs), so the
// normal path is HYDRATION of server HTML. An empty root (dev server, or an
// unknown path served through the 404 shim) falls back to a fresh render.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
