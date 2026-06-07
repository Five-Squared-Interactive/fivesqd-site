import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ paddingTop: '60px' }}>
    <section className="section">
      <div className="container text-center">
        <h1>404</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  </div>
);

export default NotFound;
