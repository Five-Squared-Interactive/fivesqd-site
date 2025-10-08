import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WebWideWorlds = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Web Wide Worlds</h2>
          </div>

          <div className="grid grid-2" style={{ marginTop: '4rem' }}>
            <div>
              <p>
                <b>Web Wide Worlds</b> is an open, modular framework for building and exploring interoperable digital worlds. It’s
                designed to empower creators, developers, and communities with tools that scale from personal sandboxes to
                planet-sized simulations.
              </p>
              <p>
                From initial concept to live deployment, Web Wide Worlds streamlines the development process 
                with intuitive tools, powerful APIs, and seamless integration between components.
              </p>
            </div>
            <div>
              <img 
                src="/images/webwideworlds-ecosystem.png" 
                alt="Web Wide Worlds Platform" 
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

      {/* Technology Stack Section */}
      <section className="section section-light">
        <div className="container" style={{ margin: '0 6rem' }}>
          <div className="text-center mb-4">
            <h2>Technology Stack</h2>
            <p>An open and modular architecture for building scalable digital worlds</p>
          </div>

          <div className="accordion">
            <div className="accordion-item">
              <div 
                className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`} 
                onClick={() => toggleAccordion(0)}
              >
                <h3>🖥️ Scene Viewer</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className={`accordion-content ${activeAccordion === 0 ? 'open' : ''}`}>
                <p>
                  The rendering interface through which users access virtual environments.
                  <strong> World Browsers</strong>, such as <strong>WebVerse</strong>, are
                  software applications at the Scene Viewer layer.
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <div 
                className={`accordion-header ${activeAccordion === 1 ? 'active' : ''}`} 
                onClick={() => toggleAccordion(1)}
              >
                <h3>📝 World Definition Layer</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className={`accordion-content ${activeAccordion === 1 ? 'open' : ''}`}>
                <p>
                  Defines the structure and behavior of a world through declarative markup 
                  (using <strong>VEML</strong>) and modular scripting (using <strong>JavaScript</strong>) components.
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <div 
                className={`accordion-header ${activeAccordion === 2 ? 'active' : ''}`} 
                onClick={() => toggleAccordion(2)}
              >
                <h3>🌐 Networking Layer</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className={`accordion-content ${activeAccordion === 2 ? 'open' : ''}`}>
                <p>
                  Enables synchronized presence and interaction across clients using open protocols 
                  and flexible multiplayer architectures (using protocols like <strong>WorldSync </strong>
                  and <strong>Mirror Networking</strong>).
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <div 
                className={`accordion-header ${activeAccordion === 3 ? 'active' : ''}`} 
                onClick={() => toggleAccordion(3)}
              >
                <h3>🔧 Tooling & APIs</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className={`accordion-content ${activeAccordion === 3 ? 'open' : ''}`}>
                <p>
                  Provides extensibility and developer-facing interfaces for rapid prototyping 
                  to studio-scale integration. The ecosystem includes <strong>WorldOS</strong>, a NodeJS-based 
                  scaffold for runtime tools. The entire system is designed to be modular and non-prescriptive,
                  allowing developers to choose their preferred tools and integration patterns.
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <div 
                className={`accordion-header ${activeAccordion === 4 ? 'active' : ''}`} 
                onClick={() => toggleAccordion(4)}
              >
                <h3>🚀 Publishing Layer</h3>
                <span className="accordion-icon">+</span>
              </div>
              <div className={`accordion-content ${activeAccordion === 4 ? 'open' : ''}`}>
                <p>
                  Governs how worlds are distributed and hosted with flexible ownership models 
                  and scalable distribution options.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
                  <div>
                    <h4>Self-Hosted Deployment</h4>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                      <li>Full control over infrastructure</li>
                      <li>Private simulations and experimental forks</li>
                      <li>Custom pipelines and workflows</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Third-Party Hosted Services</h4>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                      <li>Cloud-hosted environments</li>
                      <li>Discoverability and versioning</li>
                      <li>User management systems</li>
                      <li>Persistent and ephemeral experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Integrated Tools, Protocols, & Services</h2>
            <p>Explore the powerful components that make up the Web Wide Worlds ecosystem</p>
          </div>

          <div className="tabs-container">
            {/* Tab Navigation */}
            <div className="tab-nav">
              <button 
                className={`tab-button ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => setActiveTab(0)}
              >
                WebVerse
              </button>
              <button 
                className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => setActiveTab(1)}
              >
                Straight-Four
              </button>
              <button 
                className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => setActiveTab(2)}
              >
                WorldOS
              </button>
              <button 
                className={`tab-button ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => setActiveTab(3)}
              >
                WorldSync
              </button>
              <button 
                className={`tab-button ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => setActiveTab(4)}
              >
                VEML
              </button>
              <button 
                className={`tab-button ${activeTab === 5 ? 'active' : ''}`}
                onClick={() => setActiveTab(5)}
              >
                World API
              </button>
              <button 
                className={`tab-button ${activeTab === 6 ? 'active' : ''}`}
                onClick={() => setActiveTab(6)}
              >
                Your Tools
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 0 && (
                <div className="tab-panel">
                  <div className="tab-header">
                    <h3>WebVerse</h3>
                    <p>World Browser</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    <img 
                      src="/images/webverse-application.png" 
                      alt="WebVerse Application Interface" 
                      style={{
                        maxWidth: '39%',
                        height: 'auto',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </div>
                  <p>
                    WebVerse is a World Browser, a front-end app for users to
                    explore digital worlds & environments. It is like a "web
                    browser" for digital worlds: access any world via URL or
                    a click!
                  </p>
                  <h4>Key Features</h4>
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li>Windows, Mac, and Web runtimes</li>
                    <li>glTF/VEML/JavaScript world loading</li>
                    <li>Powered by the Straight Four World Engine</li>
                  </ul>
                  <h4>Use Cases</h4>
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li>Instant preview and remix of user-created worlds</li>
                    <li>Metadata-driven behaviors from server-processed VEML</li>
                    <li>Lightweight progressive world streaming</li>
                    <li>And more!</li>
                  </ul>
                  <h4>Getting Started</h4>
                  <p>
                    Go to the <a href="https://webverse.fivesqd.com" target="_blank" rel="noopener noreferrer">WebVerse Website</a> to
                    learn more and install WebVerse. The core development framework for building interactive virtual experiences.
                    WebVerse provides the foundational tools and APIs that power everything else.
                  </p>
                  <a href="https://webverse.fivesqd.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Try WebVerse
                  </a>
                </div>
              )}
              
              {activeTab === 1 && (
                <div className="tab-panel">
                  <div className="tab-header">
                    <h3>Straight-Four</h3>
                    <p>World Engine</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    <img 
                      src="/images/StraightFourLogo.png" 
                      alt="Straight Four Logo" 
                      style={{
                        maxWidth: '200px',
                        height: 'auto',
                        borderRadius: '0.5rem',
                        backgroundColor: '#1a1a1a',
                        padding: '1rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>
                  <p>
                    Straight Four is the core World Engine (runtime) used in WebVerse. It is written in the
                    <a href="https://unity.com/" target="_blank" rel="noopener noreferrer"> Unity 3D engine </a>
                     and can be embedded into any custom World Engine or other application.
                  </p>
                  <a href="https://github.com/Five-Squared-Interactive/StraightFour" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Check out the Repo
                  </a>
                </div>
              )}
              
              {activeTab === 2 && (
                <div className="tab-panel">
                  <div className="tab-header">
                    <h3>WorldOS</h3>
                    <p>Server Framework</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    <img 
                      src="/images/WorldOSLogo.png" 
                      alt="WorldOS Logo" 
                      style={{
                        maxWidth: '200px',
                        height: 'auto',
                        borderRadius: '0.5rem',
                        backgroundColor: '#1a1a1a',
                        padding: '1rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>
                  <p>
                    WorldOS is a modular, distributed runtime framework that manages execution, communication,
                    and coordination between applications inside and across worlds. Inspired by the Robot
                    Operating System (ROS), it treats each world as an orchestrated system of services, triggers,
                    and behaviors.
                  </p>
                  <h4>Core Architecture</h4>
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li>
                      <strong>Message Bus:</strong> Built on MQTT, enabling low-latency, pub/sub-style event communication across world components
                    </li>
                    <li>
                      <strong>App-Oriented Design:</strong> Worlds can register or instantiate apps (scripts, logic handlers, services) that listen for specific topics
                    </li>
                    <li>
                      <strong>Interoperable & Dynamic:</strong> Apps can be written in different languages or deployed across containerized nodes
                    </li>
                  </ul>
                  <h4>Apps in WorldOS</h4>
                  <p>
                    Apps are pluggable and reactive units. Each app:
                  </p>
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li>Subscribes to one or more MQTT topics</li>
                    <li>Can publish outbound messages (e.g. for other apps or world state)</li>
                    <li>Can be ephemeral (triggered once) or long-lived</li>
                  </ul>
                  <Link to="/worldos" className="btn btn-primary">
                    Learn About WorldOS
                  </Link>
                </div>
              )}
              
              {activeTab === 3 && (
                <div className="tab-panel">
                  <div className="tab-header">
                    <h3>WorldSync</h3>
                    <p>Synchronization Service</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    <img 
                      src="/images/WorldSyncLogo.png" 
                      alt="WorldSync Logo" 
                      style={{
                        maxWidth: '200px',
                        height: 'auto',
                        borderRadius: '0.5rem',
                        backgroundColor: '#1a1a1a',
                        padding: '1rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>
                  <p>
                    WorldSync is a lightweight engine for multiplayer state and presence.
                  </p>
                  <h4>Architecture</h4>
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li>MQTT / WebSocket hybrid</li>
                    <li>Presence & transform updates</li>
                    <li>CRDT-style change buffering</li>
                    <li>Integration</li>
                  </ul>
                  <h4>Integration</h4>
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li>Can be used in Worlds for real-time sync</li>
                    <li>Works with VEML triggers and JavaScript APIs</li>
                  </ul>
                  <Link to="/worldsync" className="btn btn-primary">
                    Learn About WorldSync
                  </Link>
                </div>
              )}
              
              {activeTab === 4 && (
                <div className="tab-panel">
                  <div className="tab-header">
                    <h3>VEML</h3>
                    <p>World Definition Schema</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    <img 
                      src="/images/VEMLLogo.png" 
                      alt="CEML Logo" 
                      style={{
                        maxWidth: '200px',
                        height: 'auto',
                        borderRadius: '0.5rem',
                        backgroundColor: '#1a1a1a',
                        padding: '1rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>
                  <p>
                    VEML is an XML-based schema that defines a world’s metadata, logic, and behavior in
                    a declarative, human-readable format.
                  </p>
                  <Link to="https://github.com/Five-Squared-Interactive/VEML/wiki" className="btn btn-primary">
                    Learn About VEML
                  </Link>
                </div>
              )}
              
              {activeTab === 5 && (
                <div className="tab-panel">
                  <div className="tab-header">
                    <h3>World API</h3>
                    <p>Scripting API</p>
                  </div>
                  <p>
                    The JavaScript World API enables creators to define behaviors, events, and interactivity inside Worlds.
                    These APIs are sandboxed via the World Browser.
                  </p>
                  <Link to="https://github.com/Five-Squared-Interactive/WebWideWorlds/blob/main/docs/JS_World_APIs.md" className="btn btn-primary">
                    Learn About World API
                  </Link>
                </div>
              )}

              {activeTab === 6 && (
                <div className="tab-panel">
                  <div className="tab-header">
                    <h3>Your Tools</h3>
                    <p>Customizable</p>
                  </div>
                  <p>
                    Web Wide Worlds is entirely open and modular—built to be remixed, reimagined, and reinvented.
                  </p>
                  <p>
                    Create your own tools, extend the protocols, or build a new world browser.
                    Every layer is designed for interoperability, so your innovations can plug in, stand alone, or
                    challenge the defaults.
                  </p>
                  <button className="btn btn-primary" disabled>
                    Contact Us to Collaborate
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebWideWorlds;
