import React from 'react';

const Technology = () => {
  return (
    <div style={{ paddingTop: '60px' }}>

      {/* Built on the Web */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h1>Technology</h1>
            <p className="section-subtitle">
              How Web Wide Worlds works, what it supports, and what you can build with it.
            </p>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <div className="grid grid-2">
              <div>
                <h2>Built on the Web</h2>
                <p>
                  Web Wide Worlds extends the existing web to support interactive 3D worlds.
                  A world is a set of files — markup, scripts, and assets — served over HTTP at a URL.
                  You open it in a world browser the same way you open a web page in a web browser.
                </p>
                <p>
                  It uses the infrastructure that already exists: HTTP for transport, URLs for addressing,
                  standard web servers for hosting, DNS, TLS, CDNs. No proprietary protocols.
                  No special hosting required. If you can host a website, you can host a world.
                </p>
                <a href="/docs/www_whitepaper_v1.1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Read the White Paper
                </a>
              </div>
              <div className="diagram-wrap">
                {/* How a world is served — mirrors web architecture */}
                <svg viewBox="0 0 420 320" width="420" height="320" xmlns="http://www.w3.org/2000/svg" aria-label="Diagram showing how a world is served like a website">
                  {/* Author */}
                  <rect x="10" y="20" width="120" height="60" rx="10" fill="#6366f1" opacity="0.15" stroke="#6366f1" strokeWidth="1.5" />
                  <text x="70" y="46" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600">Author</text>
                  <text x="70" y="64" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.7">VEML + assets</text>

                  {/* Arrow down */}
                  <line x1="70" y1="80" x2="70" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <polygon points="62,115 70,128 78,115" fill="currentColor" opacity="0.4" />
                  <text x="85" y="105" fill="currentColor" fontSize="10" opacity="0.5">git push</text>

                  {/* Web Server */}
                  <rect x="10" y="130" width="120" height="60" rx="10" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1.5" />
                  <text x="70" y="156" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600">Web Server</text>
                  <text x="70" y="174" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.7">GitHub Pages, S3...</text>

                  {/* Arrow right */}
                  <line x1="130" y1="160" x2="230" y2="160" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  <polygon points="225,152 238,160 225,168" fill="currentColor" opacity="0.4" />
                  <text x="180" y="150" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.5">HTTP / URL</text>

                  {/* World Browser */}
                  <rect x="240" y="130" width="160" height="60" rx="10" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="1.5" />
                  <text x="320" y="156" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600">World Browser</text>
                  <text x="320" y="174" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.7">WebVerse</text>

                  {/* Optional: Sync service */}
                  <rect x="240" y="240" width="160" height="60" rx="10" fill="#a855f7" opacity="0.15" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="6 3" />
                  <text x="320" y="266" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600">Sync Service</text>
                  <text x="320" y="284" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.7">WorldSync (optional)</text>

                  {/* Arrow down to sync */}
                  <line x1="320" y1="190" x2="320" y2="230" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeDasharray="5 3" />
                  <polygon points="312,225 320,238 328,225" fill="currentColor" opacity="0.3" />
                  <text x="345" y="215" fill="currentColor" fontSize="10" opacity="0.5">MQTT</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Web Analogy */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>The Web, Extended to 3D</h2>
            <p className="section-subtitle">
              Web Wide Worlds follows the same model as the web. These are not metaphors — it literally uses the same stack.
            </p>
          </div>

          <div className="analogy-table-wrap">
            <table className="analogy-table">
              <thead>
                <tr>
                  <th>Web</th>
                  <th>Web Wide Worlds</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>HTML</td><td>VEML — markup that describes structure</td></tr>
                <tr><td>JavaScript</td><td>JavaScript — same language, sandboxed in the world browser</td></tr>
                <tr><td>Web browser</td><td>World browser (WebVerse) — renders the world</td></tr>
                <tr><td>Web server</td><td>Any web server — Apache, Nginx, GitHub Pages, S3</td></tr>
                <tr><td>URL</td><td>URL — same addressing, same DNS</td></tr>
                <tr><td>CSS</td><td>Materials, shaders, and lighting defined in VEML or assets</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Complexity Gradient */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Start Simple, Grow as You Need</h2>
            <p className="section-subtitle">
              A world can be a single file on GitHub or a full server deployment with custom plugins.
              You start wherever makes sense and grow without switching tools — the world definition, client, and protocols stay the same at every level.
            </p>
          </div>

          <div className="gradient-levels">
            <div className="gradient-level">
              <span className="gradient-level-number">0</span>
              <div className="gradient-level-header">
                <span className="gradient-level-label">Static World</span>
              </div>
              <p>
                Files in a git repo — VEML, assets, and scripts. Fork a template, edit, push.
                WebVerse loads it directly. No servers, no cost. Single-player or view-only multiplayer.
              </p>
              <p className="gradient-level-detail">
                <strong>What you need:</strong> A GitHub account (or any static file host).
                <br />
                <strong>What changes alongside:</strong> Nothing. The world is self-contained.
              </p>
            </div>

            <div className="gradient-level">
              <span className="gradient-level-number">1</span>
              <div className="gradient-level-header">
                <span className="gradient-level-label">Add Multiplayer</span>
              </div>
              <p>
                Same world, plus a synchronizer URL in the VEML metadata. Visitors see each other
                and share state in real time. No server code to write — just add an address.
              </p>
              <p className="gradient-level-detail">
                <strong>What you need:</strong> A WorldSync address (from WorldHub, community-shared, or self-hosted).
                <br />
                <strong>What changes alongside:</strong> A sync service runs somewhere. Your world files stay the same.
              </p>
            </div>

            <div className="gradient-level">
              <span className="gradient-level-number">2</span>
              <div className="gradient-level-header">
                <span className="gradient-level-label">Server-Side Logic, Configured</span>
              </div>
              <p>
                A WorldOS instance with off-the-shelf plugins. Persistent world state, physics authority,
                scripted NPCs, inventory systems. You configure plugins rather than writing them.
              </p>
              <p className="gradient-level-detail">
                <strong>What you need:</strong> A WorldOS deployment — via WorldHub, a third-party host, or self-hosted Docker.
                <br />
                <strong>What changes alongside:</strong> A server runs WorldOS with your chosen plugins. World files still unchanged.
              </p>
            </div>

            <div className="gradient-level">
              <span className="gradient-level-number">3</span>
              <div className="gradient-level-header">
                <span className="gradient-level-label">Custom Server Logic</span>
              </div>
              <p>
                Write your own WorldOS plugins in JavaScript/TypeScript or Python. Custom economies,
                quests, procedural generation, AI NPCs, external API integrations.
                Real engineering, but inside a stable plugin architecture with process isolation and MQTT communication.
              </p>
              <p className="gradient-level-detail">
                <strong>What you need:</strong> WorldOS and the plugin SDK.
                <br />
                <strong>What changes alongside:</strong> Your custom plugins run as isolated processes alongside existing ones.
              </p>
            </div>

            <div className="gradient-level">
              <span className="gradient-level-number">4</span>
              <div className="gradient-level-header">
                <span className="gradient-level-label">Custom Infrastructure</span>
              </div>
              <p>
                Run your own server implementation speaking the protocol. Forked WorldOS, new implementation,
                authoritative simulation — whatever the project demands. The ceiling is removed because
                the protocol is open and everything is MIT-licensed.
              </p>
              <p className="gradient-level-detail">
                <strong>What you need:</strong> Engineering resources and the open protocol spec.
                <br />
                <strong>What changes alongside:</strong> Everything on the server side. Client and world definition stay constant.
              </p>
            </div>
          </div>

          <div className="gradient-key-point">
            <p>
              The world definition, the client (WebVerse), the protocols, and the social layer (WorldHub)
              are constant across all levels. Only what runs alongside the world changes as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Formats and Standards */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Formats and Standards</h2>
            <p className="section-subtitle">
              Web Wide Worlds builds on established, open standards. Here is what it reads, writes, and connects to.
            </p>
          </div>

          <div className="grid grid-2">
            <div>
              <h3>Content Formats</h3>
              <table className="spec-table">
                <tbody>
                  <tr><td><strong>VEML</strong></td><td>Native world markup (XML-based, version 3.0)</td></tr>
                  <tr><td><strong>glTF / GLB</strong></td><td>3D models, materials, animations (Khronos Group)</td></tr>
                  <tr><td><strong>X3D</strong></td><td>3D scenes and worlds (Web3D Consortium)</td></tr>
                  <tr><td><strong>OMI glTF</strong></td><td>Interoperability extensions for physics, audio, spawning (Open Metaverse Interoperability Group)</td></tr>
                  <tr><td><strong>USD</strong></td><td>Universal Scene Description — supported via the VEML Blender plugin and in WorldOS deployments (Alliance for OpenUSD)</td></tr>
                  <tr><td><strong>JavaScript</strong></td><td>World scripting — standard JS, executed in a sandboxed interpreter (JINT)</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3>Protocols and Runtimes</h3>
              <table className="spec-table">
                <tbody>
                  <tr><td><strong>HTTP / HTTPS</strong></td><td>World hosting and asset delivery</td></tr>
                  <tr><td><strong>MQTT</strong></td><td>Pub/sub messaging for sync and server logic (OASIS standard)</td></tr>
                  <tr><td><strong>WebSocket</strong></td><td>Real-time bidirectional communication</td></tr>
                  <tr><td><strong>OpenXR</strong></td><td>XR runtime abstraction — Quest, SteamVR</td></tr>
                  <tr><td><strong>WebXR</strong></td><td>Browser-based XR via WebVerse Lite</td></tr>
                  <tr><td><strong>REST</strong></td><td>Open API endpoints for services and tooling</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How a World Is Defined */}
      <section className="section" id="veml">
        <div className="container">
          <div className="text-center mb-4">
            <h2>How a World Is Defined</h2>
            <p className="section-subtitle">
              A world has two parts: VEML markup defines the structure, and JavaScript adds behavior.
            </p>
          </div>

          <div className="grid grid-2">
            <div>
              <h3>VEML — Structure</h3>
              <p>
                VEML (Virtual Environment Markup Language) is an XML-based schema for describing
                3D worlds. It defines entities, their positions, lighting, terrain, sky, and
                synchronization — all in a human-readable, declarative format.
              </p>
              <p>
                Entity types include mesh, character, light, terrain, text, canvas, HTML overlays,
                buttons, water, and vehicles. Each entity has position, rotation, and scale as
                child elements.
              </p>
              <pre className="code-example">{`<veml>
  <metadata>
    <title>My World</title>
    <capability>javascript</capability>
    <script>scripts/init.js</script>
  </metadata>
  <environment>
    <background>
      <color>white</color>
    </background>
    <entity xsi:type="mesh" tag="tree">
      <transform xsi:type="scaletransform">
        <position x="0" y="0" z="5" />
        <rotation x="0" y="0" z="0" w="1" />
        <scale x="2" y="2" z="2" />
      </transform>
      <mesh-name>tree.glb</mesh-name>
      <mesh-resource>tree.glb</mesh-resource>
    </entity>
  </environment>
</veml>`}</pre>
              <a href="https://github.com/Five-Squared-Interactive/VEML/wiki" target="_blank" rel="noopener noreferrer" className="layer-tool-link">
                VEML Documentation &rarr;
              </a>
            </div>
            <div>
              <h3>JavaScript — Behavior</h3>
              <p>
                Standard JavaScript adds interactivity to worlds. Scripts run inside a sandboxed
                interpreter (JINT) in the world browser — they cannot access the host system.
              </p>
              <p>
                The World API provides globals for working with entities, input, networking,
                and world state: <code>Entity</code>, <code>World</code>, <code>Input</code>,
                {' '}<code>HTTP</code>, <code>MQTT</code>, <code>WebSocket</code>.
              </p>
              <pre className="code-example">{`// Create a cube and make it interactive
var pos = new Vector3(0, 1, 3);
var rot = new Quaternion(0, 0, 0, 1);
var color = new Color(0.2, 0.6, 1, 1);

var box = MeshEntity.CreateCube(
    null, color, pos, rot, null,
    "onBoxLoaded"
);

function onBoxLoaded(entity) {
    entity.SetVisibility(true, true);
    entity.SetInteractionState(
        InteractionState.Physical
    );
}`}</pre>
              <a href="https://github.com/Five-Squared-Interactive/WebWideWorlds/blob/main/docs/JS_World_APIs.md" target="_blank" rel="noopener noreferrer" className="layer-tool-link">
                World API Reference &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Multiplayer Works */}
      <section className="section section-light" id="worldsync">
        <div className="container">
          <div className="text-center mb-4">
            <h2>How Multiplayer Works</h2>
          </div>

          {/* Pub/Sub diagram */}
          <div className="diagram-wrap">
            <svg viewBox="0 0 600 200" width="600" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Pub/sub multiplayer sync diagram">
              {/* Client A */}
              <rect x="10" y="70" width="130" height="60" rx="10" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="75" y="96" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600">Client A</text>
              <text x="75" y="114" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.7">WebVerse</text>

              {/* Arrow A -> Broker */}
              <line x1="140" y1="90" x2="215" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <polygon points="210,83 223,90 210,97" fill="currentColor" opacity="0.4" />
              <text x="178" y="82" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.5">publish</text>

              {/* MQTT Broker */}
              <rect x="225" y="55" width="150" height="90" rx="12" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="300" y="90" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700">MQTT Broker</text>
              <text x="300" y="110" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.7">WorldSync</text>
              <text x="300" y="128" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.5">topic: worldsync/entity/pos</text>

              {/* Arrow Broker -> B */}
              <line x1="375" y1="90" x2="450" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <polygon points="445,83 458,90 445,97" fill="currentColor" opacity="0.4" />
              <text x="413" y="82" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.5">deliver</text>

              {/* Client B */}
              <rect x="460" y="70" width="130" height="60" rx="10" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="525" y="96" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600">Client B</text>
              <text x="525" y="114" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.7">WebVerse</text>

              {/* Bottom return arrow */}
              <path d="M 460,130 L 460,165 L 140,165 L 140,130" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeDasharray="5 3" />
              <polygon points="132,135 140,122 148,135" fill="currentColor" opacity="0.25" />
              <text x="300" y="180" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.4">bidirectional — all clients publish and subscribe</text>
            </svg>
          </div>

          <div className="grid grid-2">
            <div>
              <h3>WorldSync</h3>
              <p>
                The networking layer is pluggable — any service that implements the sync protocol
                can provide real-time state replication. WorldSync is the reference implementation,
                built on MQTT publish/subscribe.
              </p>
              <p>
                WorldSync handles position tracking, entity ownership, state replication, and
                transform interpolation across connected clients. To make an entity multiplayer
                in VEML, add a <code>&lt;synchronizer&gt;</code> child element pointing to a sync address.
              </p>
              <p>
                Other sync mechanisms are possible — the architecture doesn't lock you into
                a single transport or protocol.
              </p>
              <a href="/products/worldkit#worldsync" className="layer-tool-link">
                WorldSync details &rarr;
              </a>
            </div>
            <div>
              <h3>Declarative Sync</h3>
              <p>Adding multiplayer to a VEML entity:</p>
              <pre className="code-example">{`<entity xsi:type="cubemesh"
  tag="shared-block">
  <transform xsi:type="scaletransform">
    <position x="0" y="1" z="0" />
    <rotation x="0" y="0" z="0" w="1" />
    <scale x="1" y="1" z="1" />
  </transform>
  <synchronizer>main</synchronizer>
  <color>blue</color>
</entity>`}</pre>
              <p>
                The world's metadata specifies the sync service address:
              </p>
              <pre className="code-example">{`<metadata>
  <synchronizationservice
    type="vss"
    address="wss://sync.example.com"
    id="world-123"
    session="main" />
</metadata>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* WorldOS */}
      <section className="section" id="worldos">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Server-Side Logic: WorldOS</h2>
            <p className="section-subtitle">
              A plug-and-play server framework for composing world backends from independent plugins.
            </p>
          </div>

          {/* WorldOS architecture diagram */}
          <div className="diagram-wrap">
            <svg viewBox="0 0 600 280" width="600" height="280" xmlns="http://www.w3.org/2000/svg" aria-label="WorldOS plugin architecture diagram">
              {/* Central bus */}
              <rect x="150" y="115" width="300" height="50" rx="8" fill="#6366f1" opacity="0.2" stroke="#6366f1" strokeWidth="2" />
              <text x="300" y="145" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700">MQTT Message Bus</text>

              {/* Top plugins */}
              <rect x="30" y="15" width="120" height="55" rx="8" fill="#3b82f6" opacity="0.12" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="90" y="38" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600">WorldSync</text>
              <text x="90" y="54" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">sync plugin</text>
              <line x1="90" y1="70" x2="200" y2="115" stroke="currentColor" strokeWidth="1" opacity="0.3" />

              <rect x="175" y="15" width="120" height="55" rx="8" fill="#8b5cf6" opacity="0.12" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="235" y="38" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600">ROS 2 Bridge</text>
              <text x="235" y="54" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">robotics plugin</text>
              <line x1="235" y1="70" x2="270" y2="115" stroke="currentColor" strokeWidth="1" opacity="0.3" />

              <rect x="320" y="15" width="120" height="55" rx="8" fill="#a855f7" opacity="0.12" stroke="#a855f7" strokeWidth="1.5" />
              <text x="380" y="38" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600">State Manager</text>
              <text x="380" y="54" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">persistence plugin</text>
              <line x1="380" y1="70" x2="350" y2="115" stroke="currentColor" strokeWidth="1" opacity="0.3" />

              <rect x="465" y="15" width="120" height="55" rx="8" fill="#ec4899" opacity="0.12" stroke="#ec4899" strokeWidth="1.5" />
              <text x="525" y="38" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600">Container Mgr</text>
              <text x="525" y="54" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">Docker plugin</text>
              <line x1="525" y1="70" x2="420" y2="115" stroke="currentColor" strokeWidth="1" opacity="0.3" />

              {/* Bottom plugins */}
              <rect x="70" y="210" width="120" height="55" rx="8" fill="#14b8a6" opacity="0.12" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="130" y="233" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600">Auth / Identity</text>
              <text x="130" y="249" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">user plugin</text>
              <line x1="130" y1="210" x2="220" y2="165" stroke="currentColor" strokeWidth="1" opacity="0.3" />

              <rect x="240" y="210" width="120" height="55" rx="8" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="300" y="233" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600">Your Plugin</text>
              <text x="300" y="249" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">JS / Python / any</text>
              <line x1="300" y1="210" x2="300" y2="165" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />

              <rect x="410" y="210" width="120" height="55" rx="8" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" />
              <text x="470" y="233" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600">Your Plugin</text>
              <text x="470" y="249" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.6">add as needed</text>
              <line x1="470" y1="210" x2="380" y2="165" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="4 3" />
            </svg>
          </div>

          <div className="grid grid-2">
            <div>
              <h3>Architecture</h3>
              <p>
                WorldOS is built around an MQTT message bus (Mosquitto). Everything beyond
                the bus is a plugin — a separate process that subscribes to topics, processes
                messages, and publishes results. Plugins are isolated from each other: if one
                crashes, the rest keep running.
              </p>
              <p>
                Plugins can be written in any language. The framework provides SDKs for
                Node.js/TypeScript and Python. Plugins can also run as Docker containers
                or native binaries. Each plugin declares its MQTT topics in a manifest file
                (<code>wos-plugin.yaml</code>).
              </p>
              <p>
                There are two plugin lifecycle models: <strong>persistent</strong> plugins run
                for the server's lifetime and are health-checked periodically.
                {' '}<strong>Transient</strong> plugins spin up on demand when a matching message
                arrives, then terminate after completing their task.
              </p>
              <a href="/products/worldkit#worldos" className="layer-tool-link">
                WorldOS details &rarr;
              </a>
            </div>
            <div>
              <h3>What Plugins Do</h3>
              <p>
                A plugin is any process that communicates over MQTT. Examples of what plugins handle:
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>World state management and entity persistence</li>
                <li>ROS 2 robotics integration (via rosbridge protocol)</li>
                <li>Docker container lifecycle management</li>
                <li>USD scene interaction</li>
                <li>User identity and authentication</li>
                <li>Messaging, presence, and asset management</li>
                <li>Custom game logic, AI agents, terrain generation</li>
              </ul>
              <h4>Example Topics</h4>
              <pre className="code-example">{`wos/ros2-bridge/cmd_vel
wos/container-manager/start
world/zone01/enter
world/crate_01/trigger/open
worldsync/user/position`}</pre>
              <p>
                Plugins communicate through topics without knowing about each other.
                You compose a world server by choosing which plugins to run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Connects To */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What It Connects To</h2>
            <p className="section-subtitle">
              Bridges and integrations that exist today, and the systems they connect.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="none" /><path d="M7 12l5-4 5 4" /><path d="M9 20v-6h6v6" /></svg>
              </span>
              <h3>3D Pipelines</h3>
              <p>
                Import glTF/GLB models from Blender, Maya, or any 3D tool. Author VEML
                worlds directly in Blender with the VEML Blender plugin. Work with USD
                scenes through the Blender plugin or WorldOS.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M8 10l3 2-3 2" /><path d="M14 14h4" /></svg>
              </span>
              <h3>Existing Games</h3>
              <p>
                Minecraft worlds can be ingested and rendered in WebVerse.
                Cities: Skylines 2 worlds can be bridged into the ecosystem.
                The system acts as an interoperability layer between platforms.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="3" /><path d="M12 10v4" /><path d="M8 18l4-4 4 4" /><path d="M5 21h14" /><path d="M9 14h6" /></svg>
              </span>
              <h3>Robotics and IoT</h3>
              <p>
                ROS 2 systems connect through the rosbridge protocol plugin in WorldOS.
                Any MQTT-connected device — sensors, actuators, automation systems —
                can publish and subscribe to world topics.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </span>
              <h3>Web Services</h3>
              <p>
                The JavaScript World API includes <code>HTTP</code>, <code>MQTT</code>,
                and <code>WebSocket</code> clients. Worlds can call REST APIs, stream
                real-time data, and integrate with external services.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /><circle cx="8" cy="7" r="1.5" fill="currentColor" /><circle cx="16" cy="12" r="1.5" fill="currentColor" /><circle cx="10" cy="17" r="1.5" fill="currentColor" /></svg>
              </span>
              <h3>Open Standards</h3>
              <p>
                Built on glTF (Khronos), MQTT (OASIS), OpenXR, WebXR, and OMI glTF
                extensions. These are established standards maintained by their
                respective organizations.
              </p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="M5 12h14" /><rect x="3" y="3" width="18" height="18" rx="3" /></svg>
              </span>
              <h3>Your Systems</h3>
              <p>
                WorldOS plugins can bridge any system that speaks MQTT, HTTP, or WebSocket.
                Write a plugin in any language. The bus does not care what is on the other end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Where Worlds Run</h2>
            <p className="section-subtitle">
              The same world file works across all of these. No changes, no rebuilds.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card text-center">
              <h3>Desktop</h3>
              <p>Windows and Mac via WebVerse</p>
            </div>
            <div className="card text-center">
              <h3>Web Browser</h3>
              <p>Any modern browser via WebVerse Lite (WebGL) — no install</p>
            </div>
            <div className="card text-center">
              <h3>Mobile</h3>
              <p>Android and iOS</p>
            </div>
            <div className="card text-center">
              <h3>VR</h3>
              <p>SteamVR and Meta Quest</p>
            </div>
            <div className="card text-center">
              <h3>AR</h3>
              <p>Quest 3 passthrough via OpenXR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Design Principles</h2>
          </div>

          <div className="grid grid-2">
            <div>
              <ul className="principles-list">
                <li><strong>Use existing web infrastructure</strong> — HTTP, URLs, DNS, web servers. Do not reinvent what already works.</li>
                <li><strong>Augment, not replace</strong> — extend the web and existing platforms rather than competing with them.</li>
                <li><strong>Leverage what people already have</strong> — billions of devices already have web browsers, and every web server can host a world.</li>
                <li><strong>Every layer is swappable</strong> — use a different renderer, a different sync protocol, a different server framework. Nothing is mandatory.</li>
              </ul>
            </div>
            <div>
              <ul className="principles-list">
                <li><strong>Modular and composable</strong> — pick the pieces you need. A world can be a single VEML file or a full WorldOS deployment with dozens of plugins.</li>
                <li><strong>Open source, MIT-licensed</strong> — every component. No vendor lock-in. Fork it, modify it, run it yourself.</li>
                <li><strong>No permission required</strong> — anyone can build worlds, tools, or infrastructure and participate on equal footing.</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <a href="https://github.com/Five-Squared-Interactive" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                  GitHub
                </a>
                <a href="/docs/www_whitepaper_v1.1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  White Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
