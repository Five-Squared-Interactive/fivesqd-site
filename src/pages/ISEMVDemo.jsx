import React, { useState, useEffect } from 'react';

function ISEMVDemo() {
  const [username, setUsername] = useState('');
  const [touchMode, setTouchMode] = useState(false);
  const [demoStarted, setDemoStarted] = useState(false);
  const [iframeUrl, setIframeUrl] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Check if device is mobile on startup
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setTouchMode(isMobile);
  }, []);

  const handleGoClick = () => {
    const finalUsername = username.trim() || 'Guest';
    const interfaceMode = touchMode ? 'mobile' : 'desktop';
    
    const url = `https://webverse-webgl.s3.amazonaws.com/WebGL/index.html?main_app_id=00000000-0000-0000-0000-000000000000&daemon_port=5525&max_entries=2048&max_entry_length=2048&max_key_length=512&tab_id=100&files_directory=files&world_load_timeout=300&world_url=https://webverse-samples.s3.us-east-1.amazonaws.com/isemv2025/isemv.veml?IF_MODE=${interfaceMode}%26USER_NAME=${encodeURIComponent(finalUsername)}`;
    
    setIframeUrl(url);
    setDemoStarted(true);
  };

  const toggleFullscreen = () => {
    const iframeContainer = document.getElementById('iframe-container');
    
    if (!isFullscreen) {
      // Enter fullscreen
      if (iframeContainer.requestFullscreen) {
        iframeContainer.requestFullscreen();
      } else if (iframeContainer.webkitRequestFullscreen) {
        iframeContainer.webkitRequestFullscreen();
      } else if (iframeContainer.mozRequestFullScreen) {
        iframeContainer.mozRequestFullScreen();
      } else if (iframeContainer.msRequestFullscreen) {
        iframeContainer.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);
  return (
    <div style={{ paddingTop: '60px' }}>
      {/* Demo Interface Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>ISEMV Demo World</h1>
            
            {!demoStarted ? (
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ margin: '1rem 0' }}>
                  <img 
                    src="/images/isemvdemoworld.webp" 
                    alt="ISEMV Demo World" 
                    style={{
                      maxWidth: '75%',
                      height: 'auto',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
                
                <div style={{ maxWidth: '400px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
                  <div>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Username:
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username (or leave blank for Guest)"
                      maxLength={50}
                      className="demo-input"
                    />
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label htmlFor="touchMode" style={{ fontWeight: '600' }}>
                      Touch Mode:
                    </label>
                    <label className="toggle-switch" style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px' }}>
                      <input
                        type="checkbox"
                        id="touchMode"
                        role="switch"
                        aria-checked={touchMode}
                        checked={touchMode}
                        onChange={(e) => setTouchMode(e.target.checked)}
                        className="visually-hidden"
                      />
                      <span style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: touchMode ? 'var(--color-primary)' : 'var(--color-border)',
                        transition: '0.4s',
                        borderRadius: '34px'
                      }} aria-hidden="true">
                        <span style={{
                          position: 'absolute',
                          height: '26px',
                          width: '26px',
                          left: touchMode ? '30px' : '4px',
                          bottom: '4px',
                          backgroundColor: 'white',
                          transition: '0.4s',
                          borderRadius: '50%'
                        }}></span>
                      </span>
                    </label>
                  </div>
                  
                  <button
                    onClick={handleGoClick}
                    className="demo-launch-btn"
                  >
                    <span aria-hidden="true">🚀 </span>Launch Demo World
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                  Welcome to the ISEMV Demo World, {username || 'Guest'}
                </p>
                <div 
                  id="iframe-container"
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '600px', 
                    border: '2px solid var(--color-border)',
                    borderRadius: '0.5rem',
                    overflow: 'hidden'
                  }}
                >
                  <iframe
                    src={iframeUrl}
                    sandbox="allow-scripts allow-same-origin"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    title="ISEMV Demo World"
                  />
                  <button
                    onClick={toggleFullscreen}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      zIndex: 10,
                      transition: 'background-color 0.2s'
                    }}
                    aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                  >
                    <span aria-hidden="true">{isFullscreen ? '✕' : '⛶'}</span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    setDemoStarted(false);
                    setIframeUrl('');
                  }}
                  className="demo-reset-btn"
                >
                  Reset Demo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ISEMVDemo;