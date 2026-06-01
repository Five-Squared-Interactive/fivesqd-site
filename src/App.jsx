import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

const WebWideWorlds = lazy(() => import('./pages/WebWideWorlds'));
const WorldOS = lazy(() => import('./pages/WorldOS'));
const WorldSync = lazy(() => import('./pages/WorldSync'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const ISEMV2025 = lazy(() => import('./pages/ISEMV2025'));
const ISEMVDemo = lazy(() => import('./pages/ISEMVDemo'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Suspense fallback={null}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
