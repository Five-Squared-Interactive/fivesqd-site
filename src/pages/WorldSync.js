import React from 'react';
import { Link } from 'react-router-dom';

const WorldSync = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>What is WorldSync?</h2>
              <p>
                <strong>WorldSync</strong> is a lightweight engine for multiplayer state and presence. 
                It provides the synchronization infrastructure needed for real-time collaborative experiences 
                in virtual worlds.
              </p>
            </div>
            <div>
              <img 
                src="/images/tech.jpg" 
                alt="WorldSync Network Architecture" 
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '1rem'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Architecture</h2>
            <p>Lightweight and efficient synchronization technology</p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3> MQTT Over TCP / WebSocket</h3>
              <p>
                Combines the reliability of MQTT messaging with the real-time capabilities 
                of WebSockets for optimal synchronization performance.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                <li>MQTT for reliable messaging</li>
                <li>WebSocket for real-time updates</li>
                <li>Protocol switching based on needs</li>
                <li>Fallback mechanisms</li>
              </ul>
            </div>

            <div className="card">
              <h3>Presence & Transform Updates</h3>
              <p>
                Efficient tracking and synchronization of user presence and object 
                transformations across the virtual world.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                <li>Real-time position tracking</li>
                <li>User presence management</li>
                <li>Transform interpolation</li>
                <li>State compression</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldSync;
