import React from 'react';
import { Link } from 'react-router-dom';

const WorldKit = () => {
  return (
    <div style={{ paddingTop: '60px' }}>

      {/* Hero */}
      <section className="section">
        <div className="container text-center">
          <h1>WorldKit</h1>
          <p className="section-subtitle">
            The developer toolchain for building, testing, and deploying worlds.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>What is WorldKit?</h2>
              <p>
                WorldKit is the umbrella name for Five Squared's developer tools.
                It includes a visual world builder, a server runtime (WorldOS),
                a real-time sync service (WorldSync), starter templates (Git Worlds),
                editor plugins, and adapters for connecting external applications.
              </p>
              <p>
                Each piece works independently — use WorldOS without the builder,
                or WorldSync without WorldOS. Together they form a complete authoring
                and deployment pipeline.
              </p>
            </div>
            <div>
              <div className="worldkit-parts-list">
                <div className="worldkit-part">
                  <strong>World Builder</strong>
                  <p>Visual editor for VEML worlds — place entities, edit properties, preview in real time.</p>
                </div>
                <div className="worldkit-part">
                  <strong>WorldOS</strong>
                  <p>Modular server runtime with plugin architecture and MQTT message bus.</p>
                </div>
                <div className="worldkit-part">
                  <strong>WorldSync</strong>
                  <p>Real-time state synchronization for multiplayer worlds.</p>
                </div>
                <div className="worldkit-part">
                  <strong>Git Worlds</strong>
                  <p>Forkable world templates — clone, customize, deploy.</p>
                </div>
                <div className="worldkit-part">
                  <strong>Plugins &amp; Connectors</strong>
                  <p>VS Code extension, Blender exporter, and adapters for external apps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WorldOS */}
      <section className="section" id="worldos">
        <div className="container">
          <h2>WorldOS</h2>
          <p className="section-subtitle">
            A modular server runtime that manages execution and coordination between applications inside and across worlds.
          </p>

          <div className="grid grid-2" style={{ marginTop: '2rem' }}>
            <div>
              <h3>Architecture</h3>
              <p>
                WorldOS uses a six-tier plugin hierarchy built on an MQTT message bus.
                Plugins communicate via topics — no direct dependencies between them.
                The runtime manages lifecycle, configuration, and inter-plugin messaging.
              </p>
              <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                <li><strong>Service Registry</strong> — plugin discovery and lifecycle</li>
                <li><strong>Core Services</strong> — MQTT bus, config, logging</li>
                <li><strong>Platform Services</strong> — persistence, auth, scheduling</li>
                <li><strong>Domain Services</strong> — entity management, spatial indexing</li>
                <li><strong>Integration Services</strong> — external adapters (ROS2, game engines)</li>
                <li><strong>Application Services</strong> — end-user plugin logic</li>
              </ol>
            </div>
            <div>
              <h3>Core Plugins</h3>
              <div className="worldkit-parts-list">
                <div className="worldkit-part">
                  <strong>Entity Manager</strong>
                  <p>CRUD operations for world entities with spatial awareness.</p>
                </div>
                <div className="worldkit-part">
                  <strong>World Persistence</strong>
                  <p>Save and load world state. Supports file and database backends.</p>
                </div>
                <div className="worldkit-part">
                  <strong>Session Manager</strong>
                  <p>Tracks connected clients, manages presence and ownership.</p>
                </div>
                <div className="worldkit-part">
                  <strong>ROS2 Bridge</strong>
                  <p>Bidirectional adapter between MQTT topics and ROS2 nodes.</p>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <a href="https://github.com/Five-Squared-Interactive/WorldOS" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  WorldOS on GitHub
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <h3>Quick Start</h3>
            <pre className="code-example">{`# Clone and run WorldOS
git clone https://github.com/Five-Squared-Interactive/WorldOS.git
cd WorldOS
npm install
npm start

# The MQTT bus starts on port 1883
# Plugin API available on port 3000`}</pre>
          </div>
        </div>
      </section>

      {/* WorldSync */}
      <section className="section section-light" id="worldsync">
        <div className="container">
          <h2>WorldSync</h2>
          <p className="section-subtitle">
            Real-time state synchronization for multiplayer worlds over MQTT.
          </p>

          <div className="grid grid-2" style={{ marginTop: '2rem' }}>
            <div>
              <h3>How It Works</h3>
              <p>
                WorldSync uses MQTT publish/subscribe to replicate entity state across
                connected clients in real time. It handles position tracking, property changes,
                entity ownership, and transform interpolation.
              </p>
              <p>
                To make an entity multiplayer in VEML, add a <code>&lt;synchronizer&gt;</code> child
                element pointing to a sync address. WorldSync handles the rest — no networking
                code required.
              </p>
              <p>
                The topic hierarchy follows: <code>worldsync/&#123;sessionId&#125;/&#123;entityId&#125;/&#123;property&#125;</code>.
                Transport runs over MQTT and WebSocket. WorldSync can run standalone or as a WorldOS plugin.
              </p>
            </div>
            <div>
              <h3>VEML Example</h3>
              <pre className="code-example">{`<entity xsi:type="cubemesh"
  tag="shared-block">
  <transform xsi:type="scaletransform">
    <position x="0" y="1" z="0" />
    <rotation x="0" y="0" z="0" w="1" />
    <scale x="1" y="1" z="1" />
  </transform>
  <synchronizer>main</synchronizer>
</entity>`}</pre>

              <h3 style={{ marginTop: '1.5rem' }}>Topic Structure</h3>
              <pre className="code-example">{`worldsync/{sessionId}/{entityId}/position
worldsync/{sessionId}/{entityId}/rotation
worldsync/{sessionId}/{entityId}/scale
worldsync/{sessionId}/{entityId}/visibility
worldsync/user/position`}</pre>

              <div style={{ marginTop: '1.5rem' }}>
                <a href="https://github.com/Five-Squared-Interactive/WorldSync" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  WorldSync on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Builder */}
      <section className="section" id="builder">
        <div className="container">
          <h2>World Builder</h2>
          <p className="section-subtitle">
            A visual editor for creating and editing VEML worlds.
          </p>

          <div className="grid grid-2" style={{ marginTop: '2rem' }}>
            <div>
              <p>
                WorldKit World Builder is a desktop application (Electron + React + Three.js)
                that provides a visual environment for placing entities, editing properties,
                and previewing worlds in real time.
              </p>
              <p>
                It reads and writes standard VEML files — the same format served to world browsers.
                No lock-in to a proprietary project format.
              </p>
              <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                <li>Drag-and-drop entity placement</li>
                <li>Property inspector with live preview</li>
                <li>VEML source view with syntax highlighting (coming soon)</li>
                <li>Asset import (glTF, images, scripts)</li>
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <a href="https://github.com/Five-Squared-Interactive/WorldKit-World-Builder/releases" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Download World Builder
                </a>
              </div>
            </div>
            <div>
              <h3>Features</h3>
              <div className="worldkit-parts-list">
                <div className="worldkit-part">
                  <strong>Visual Entity Placement</strong>
                  <p>Drag-and-drop 3D objects into your scene with transform gizmos.</p>
                </div>
                <div className="worldkit-part">
                  <strong>Live Preview</strong>
                  <p>See changes in real time as you edit properties and transforms.</p>
                </div>
                <div className="worldkit-part">
                  <strong>VEML Source View</strong>
                  <span className="coming-soon-badge" style={{ marginLeft: '0.5rem', fontSize: '0.75rem' }}>Coming soon</span>
                  <p>Switch between visual and code editing — both stay in sync.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plugins & Connectors */}
      <section className="section section-light" id="plugins">
        <div className="container">
          <h2>Plugins &amp; Connectors</h2>
          <p className="section-subtitle">
            Editor extensions and adapters that connect external tools to the Web Wide Worlds ecosystem.
          </p>

          <div className="grid grid-2" style={{ marginTop: '2rem' }}>
            <div>
              <h3>Editor Plugins</h3>
              <div className="worldkit-parts-list">
                <div className="worldkit-part">
                  <strong>VS Code Extension</strong>
                  <p>VEML syntax highlighting, autocomplete, and validation in VS Code.</p>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
                    <a href="https://marketplace.visualstudio.com/items?itemName=FiveSquaredInteractive.worldkit-vscode" target="_blank" rel="noopener noreferrer">
                      VS Code Marketplace
                    </a>
                    <a href="https://github.com/Five-Squared-Interactive/WorldKit-VEML-VS-Code-Extension" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="worldkit-part">
                  <strong>Blender Plugin</strong>
                  <p>Export scenes directly to VEML format from Blender.</p>
                  <a href="https://github.com/Five-Squared-Interactive/WorldKit-VEML-Blender-Plugin" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem' }}>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3>Connectors</h3>
              <div className="worldkit-parts-list">
                <div className="worldkit-part">
                  <strong>CS2Link</strong>
                  <span className="coming-soon-badge" style={{ marginLeft: '0.5rem', fontSize: '0.75rem' }}>Coming soon</span>
                  <p>Bridges Cities: Skylines 2 data into a synchronized world.</p>
                </div>
                <div className="worldkit-part">
                  <strong>MinecraftLink</strong>
                  <span className="coming-soon-badge" style={{ marginLeft: '0.5rem', fontSize: '0.75rem' }}>Coming soon</span>
                  <p>Mirrors Minecraft world chunks into VEML mesh entities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Git Worlds */}
      <section className="section section-light" id="gitworlds">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Git Worlds</h2>
              <p>
                Template repositories for common world types. Fork one, customize it,
                and deploy — version-controlled with standard Git workflows.
              </p>
              <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                <li>Fork a template on GitHub</li>
                <li>Edit <code>world.veml</code> in any text editor</li>
                <li>Push to <code>main</code> — GitHub Actions deploys to Pages</li>
                <li>Visit your world at <code>username.github.io/repo</code></li>
              </ul>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/products/gitworlds" className="btn btn-primary">
                  Tutorial &amp; Setup
                </Link>
                <a href="https://github.com/Five-Squared-Interactive/GitWorld-Starter" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <pre className="code-example" style={{ width: '100%' }}>{`# 1. Use the template on GitHub
# 2. Enable GitHub Pages (source: GitHub Actions)
# 3. Edit world.veml
# 4. Push

git add -A
git commit -m "My first world"
git push`}</pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WorldKit;
