import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebWideWorlds from './pages/WebWideWorlds';
import WorldOS from './pages/WorldOS';
import WorldSync from './pages/WorldSync';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ISEMV2025 from './pages/ISEMV2025';
import ISEMVDemo from './pages/ISEMVDemo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webwideworlds" element={<WebWideWorlds />} />
            <Route path="/worldos" element={<WorldOS />} />
            <Route path="/worldsync" element={<WorldSync />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/isemv2025" element={<ISEMV2025 />} />
            <Route path="/isemvdemo" element={<ISEMVDemo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
