import { useCallback } from "react";

export function Footer() {
  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
  
  const linkStyle = "text-white no-underline text-2xl font-semibold tracking-[-0.48px] hover:opacity-70 transition-opacity";
  
  return (
    <footer id="contact-footer" className="bg-[#d73a3b] p-10 py-16 text-white flex flex-col gap-8">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-base font-bold tracking-[-0.32px]">{"{Reach us}"}</span>
            <div className="flex flex-col gap-6">
              {["Instagram", "LinkedIn", "Behance", "Email"].map((l) => (
                <a key={l} href="#" className={linkStyle}>{l}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 items-end">
            <span className="text-base font-bold tracking-[-0.32px]">{"{Navigation}"}</span>
            <div className="flex flex-col gap-6 items-end">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Experience", "#works"],
                ["Contact", "#contact"]
              ].map(([l, h]) => (
                <a key={l} href={h} className={linkStyle}>{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-white/20" />
      </div>
      
      <div className="flex justify-between items-center text-base tracking-[-0.32px]">
        <span className="text-white/80 font-medium">© 2026 2020 Digital</span>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToTop(); }} 
          className="text-white no-underline font-bold hover:opacity-70"
        >
          Back to top
        </a>
        <a href="#" className="text-white no-underline font-bold hover:opacity-70">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
