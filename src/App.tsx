/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoaderLogo } from "./components/ui/Logos";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WorksPage from "./pages/WorksPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  const handleDone = useCallback(() => {
    setExiting(true);
    setTimeout(() => setLoading(false), 700);
  }, []);

  useEffect(() => {
    const timer = setTimeout(handleDone, 2000);
    return () => clearTimeout(timer);
  }, [handleDone]);

  return (
    <Router>
      <div className="font-['Instrument_Sans',sans-serif] text-[#2d2d2d] bg-[#f3f3f3] min-h-screen overflow-x-hidden">
        {loading && (
          <div 
            className={`fixed inset-0 z-[9999] bg-[#d73a3b] flex items-center justify-center transition-opacity duration-700 ${
              exiting ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <LoaderLogo />
          </div>
        )}
        
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/works" element={<WorksPage />} />
          </Routes>
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
