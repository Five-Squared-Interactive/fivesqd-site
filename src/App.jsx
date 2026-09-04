import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import './App.css';

const Products = lazy(() => import('./pages/Products'));
const WorldHub = lazy(() => import('./pages/WorldHub'));
const WorldKit = lazy(() => import('./pages/WorldKit'));
const GitWorlds = lazy(() => import('./pages/GitWorlds'));
const Technology = lazy(() => import('./pages/Technology'));
const Ecosystem = lazy(() => import('./pages/Ecosystem'));
const About = lazy(() => import('./pages/About'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const ISEMV2025 = lazy(() => import('./pages/ISEMV2025'));
const ISEMVDemo = lazy(() => import('./pages/ISEMVDemo'));
const NotFound = lazy(() => import('./pages/NotFound'));

// The router-free tree: the browser wraps it in BrowserRouter (below);
// the build-time prerenderer wraps it in StaticRouter (entry-server.jsx).
export function AppShell() {
  return (
      <div className="App">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<div role="status" aria-live="polite" style={{ paddingTop: '60px', textAlign: 'center', padding: '4rem' }}>Loading...</div>}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/worldhub" element={<WorldHub />} />
                <Route path="/products/worldkit" element={<WorldKit />} />
                <Route path="/products/gitworlds" element={<GitWorlds />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/isemv2025" element={<ISEMV2025 />} />
                <Route path="/isemvdemo" element={<ISEMVDemo />} />
                {/* Redirects from old routes */}
                <Route path="/webwideworlds" element={<Navigate to="/technology" replace />} />
                <Route path="/worldos" element={<Navigate to="/products/worldkit#worldos" replace />} />
                <Route path="/worldsync" element={<Navigate to="/products/worldkit#worldsync" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </main>
        <Footer />
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
