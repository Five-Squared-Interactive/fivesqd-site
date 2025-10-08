import React from 'react';
import { Link } from 'react-router-dom';

const WorldOS = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>What is WorldOS?</h2>
              <p>
                <strong>WorldOS</strong> is a modular, distributed runtime framework that manages execution, communication, 
                and coordination between applications inside and across worlds. Inspired by the Robot Operating System (ROS), 
                it treats each world as an orchestrated system of services, triggers, and behaviors.
              </p>
            </div>
            <div>
              <img 
                src="/images/tech.jpg" 
                alt="WorldOS Architecture" 
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

      {/* Features Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Core Architecture</h2>
            <p>Built for distributed execution and communication across world components</p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <h3>Message Bus</h3>
              <p>
                Built on <a href="https://mqtt.org/" target="_blank" rel="noopener noreferrer"><strong>MQTT</strong></a>, 
                enabling low-latency, pub/sub-style event communication across world components.
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Real-time message routing</li>
                <li>Topic-based subscriptions</li>
                <li>Quality of Service levels</li>
                <li>Retained message support</li>
              </ul>
            </div>

            <div className="card">
              <h3>App-Oriented Design</h3>
              <p>
                Worlds can register or instantiate <em>apps</em> (scripts, logic handlers, services) 
                that listen for specific topics and react to events.
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Topic-based subscriptions</li>
                <li>Event-driven architecture</li>
                <li>Dynamic app registration</li>
                <li>Service discovery</li>
              </ul>
            </div>

            <div className="card">
              <h3>Interoperable & Dynamic</h3>
              <p>
                Apps can be written in different languages or deployed across containerized nodes, 
                providing flexibility and scalability.
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Multi-language support</li>
                <li>Container deployment</li>
                <li>Cross-platform compatibility</li>
                <li>Runtime flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Apps in WorldOS</h2>
            <p>Pluggable and reactive units that power world functionality</p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>App Characteristics</h3>
              <p>
                Apps are pluggable and reactive units that form the building blocks of world functionality. 
                Each app operates independently while communicating through the message bus.
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Subscribes to one or more MQTT topics</li>
                <li>Can publish outbound messages (e.g. for other apps or world state)</li>
                <li>Can be ephemeral (triggered once) or long-lived</li>
                <li>Modular and composable architecture</li>
              </ul>
            </div>

            <div className="card">
              <h3>Example Topics</h3>
              <p>
                WorldOS uses a hierarchical topic structure that enables fine-grained event routing 
                and selective subscriptions across world components.
              </p>
              <div style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                fontFamily: 'monospace', 
                fontSize: '0.9rem',
                border: '1px solid #e9ecef'
              }}>
                <div>world/zone01/enter</div>
                <div>world/crate_01/trigger/open</div>
                <div>worldsync/user/position</div>
                <div>worldhub/profile/update</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldOS;
