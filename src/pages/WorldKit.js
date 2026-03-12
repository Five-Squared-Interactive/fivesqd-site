import React from 'react';
import { Link } from 'react-router-dom';

const WorldKit = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <img 
                src="/images/WorldKitLogo.png" 
                alt="WorldKit" 
                style={{
                  maxWidth: '250px',
                  width: '100%',
                  height: 'auto',
                  marginBottom: '1.5rem'
                }}
              />
              <h2>What is WorldKit?</h2>
              <p>
                <strong>WorldKit</strong> is a suite of advanced tools for creators and developers 
                who want full control over how worlds are built, synchronized, and extended. It provides 
                the runtime, pipelines, and adapters needed to create sophisticated, interoperable 
                Web Wide Worlds.
              </p>
              <p>
                In short: WorldKit is the power-user toolkit for building, orchestrating, and 
                integrating worlds at any scale.
              </p>
            </div>
            <div>
              <img 
                src="/images/WorldBuilder.png" 
                alt="WorldKit World Builder" 
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

      {/* WorldOS Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>WorldOS</h2>
            <p>The modular, distributed runtime at the core of WorldKit</p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>Inspired by ROS</h3>
              <p>
                WorldOS treats each world as a system of coordinated apps and services. 
                Apps can be written in different languages, deployed across containers, 
                and communicate through topic-based, event-driven messaging.
              </p>
            </div>

            <div className="card">
              <h3>MQTT Message Bus</h3>
              <p>
                At its core, WorldOS uses an MQTT message bus for low-latency, 
                pub/sub-style communication between world components, enabling 
                flexible and scalable architectures.
              </p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/worldos" className="btn btn-primary">
              Learn More About WorldOS
            </Link>
          </div>
        </div>
      </section>

      {/* WorldSync Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>WorldSync</h2>
            <p>Lightweight real-time synchronization for multiplayer experiences</p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>Presence & Transform Sync</h3>
              <p>
                WorldSync delivers real-time presence and transform synchronization, 
                enabling smooth collaborative interactions across devices.
              </p>
            </div>

            <div className="card">
              <h3>MQTT over TCP/WebSocket</h3>
              <p>
                Built on MQTT over TCP/WebSocket for reliable, low-latency 
                multiplayer state management across your worlds.
              </p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/worldsync" className="btn btn-primary">
              Learn More About WorldSync
            </Link>
          </div>
        </div>
      </section>

      {/* Creation Tools Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Creation Tools</h2>
            <p>Build worlds locally and export them into WebVerse-ready VEML</p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>World Builder</h3>
              <p>
                A visual tool for constructing and editing worlds, allowing creators 
                to design immersive environments with intuitive controls.
              </p>
            </div>

            <div className="card">
              <h3>VEML Blender Plugin</h3>
              <p>
                Export your Blender scenes directly into WebVerse-ready VEML format, 
                bridging professional 3D workflows with Web Wide Worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adapters & Converters Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Adapters & Converters</h2>
            <p>Extend existing ecosystems and bring external content into Web Wide Worlds</p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>WorldOS Adapters</h3>
              <p>
                Integrate with popular tools and engines through WorldOS adapters:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                <li>Blender</li>
                <li>Unity</li>
                <li>ROS2</li>
              </ul>
            </div>

            <div className="card">
              <h3>World Converters</h3>
              <p>
                Import and convert content from existing games and simulations:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                <li>Minecraft</li>
                <li>Cities: Skylines II</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldKit;
