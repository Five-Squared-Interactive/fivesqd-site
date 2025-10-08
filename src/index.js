import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Use hydrate for react-snap, render for development
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(app);
}
