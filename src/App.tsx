/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoaderLogo } from "./components/ui/Logos";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  const handleDone = useCallback(() => {
    setExiting(true);
    setTimeout(() => setLoading(false), 700);
  }, []);

  useEffect(() => {
    const timer = setTimeout(handleDone, 3000); // Reduced from 5s for better UX in preview
    return () => clearTimeout(timer);
  }, [handleDone]);

  return (
    <div className="font-['Instrument_Sans',sans-serif] text-[#2d2d2d] bg-[#f3f3f3] overflow-x-hidden">
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
        <Hero />
        <Services />
        <About />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
