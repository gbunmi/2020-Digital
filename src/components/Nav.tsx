import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLogo } from "./ui/Logos";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById("contact-footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-center px-10 py-3 gap-[85px] transition-all duration-300 ${
        scrolled ? "bg-[#f3f3f3]/85 backdrop-blur-[60px]" : "bg-transparent"
      } border-b border-[#cbcbcb]`}
    >
      <div className="flex-1 flex items-center">
        <Link to="/" className="bg-[#d73a3b] rounded-lg p-1.5 flex items-center justify-center">
          <NavLogo />
        </Link>
      </div>
      <div className="flex gap-[120px] font-semibold text-base tracking-[-0.32px]">
        {["About", "Services", "Works"].map((label) => (
          <Link 
            key={label} 
            to={`/${label.toLowerCase()}`} 
            className={`no-underline transition-colors ${
              location.pathname === `/${label.toLowerCase()}` 
                ? "text-[#d73a3b]" 
                : "text-[#2d2d2d] hover:text-[#d73a3b]"
            }`}
          >
            {label}
          </Link>
        ))}
        <a 
          href="#contact-footer" 
          onClick={scrollToContact}
          className="no-underline text-[#2d2d2d] hover:text-[#d73a3b] transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
