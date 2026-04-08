import { useState, useEffect } from "react";
import { NavLogo } from "./ui/Logos";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-center px-10 py-3 gap-[85px] transition-all duration-300 ${
        scrolled ? "bg-[#f3f3f3]/85 backdrop-blur-[60px]" : "bg-transparent"
      } border-b border-[#cbcbcb]`}
    >
      <div className="flex-1 flex items-center">
        <div className="bg-[#d73a3b] rounded-lg p-1.5 flex items-center justify-center">
          <NavLogo />
        </div>
      </div>
      <div className="flex gap-[120px] font-semibold text-base tracking-[-0.32px]">
        {["About", "Services", "Works", "Contact"].map((label) => (
          <a 
            key={label} 
            href={`#${label.toLowerCase()}`} 
            className="no-underline text-[#2d2d2d] hover:text-[#d73a3b] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
