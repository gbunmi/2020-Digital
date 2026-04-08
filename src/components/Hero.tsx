import React from "react";
import { Link } from "react-router-dom";
import { Anim } from "./ui/Anim";

interface PlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Placeholder: React.FC<PlaceholderProps> = ({ className = "", style = {} }) => {
  return <div className={`bg-[#d0d0d0] ${className}`} style={style} />;
};

function HeroTicker() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-6 w-max animate-[ticker_40s_linear_infinite]">
        {Array.from({ length: 20 }).map((_, i) => {
          const idx = i % 10;
          const w = idx % 5 === 0 ? 360 : 420;
          const h = idx % 3 === 0 ? 480 : idx % 5 === 0 ? 540 : 520;
          return (
            <Placeholder 
              key={i} 
              className="rounded-xl flex-shrink-0"
              style={{ 
                width: w, 
                height: h, 
                marginTop: idx % 2 === 1 ? 40 : 0 
              }} 
            />
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-[#f3f3f3] pt-[180px] pb-[120px] flex flex-col gap-[120px] overflow-hidden">
      <div className="flex items-end justify-between px-10">
        <Anim direction="up" delay={0.1}>
          <h1 className="text-[clamp(48px,6.1vw,88px)] font-semibold leading-[0.91] tracking-[-3.52px] max-w-[869px]">
            Better products and services start with understanding people.
          </h1>
        </Anim>
        <Anim direction="up" delay={0.3}>
          <Link to="/services" className="bg-[#d73a3b] text-white border-none rounded-xl p-4 font-semibold text-base tracking-[-0.32px] cursor-pointer whitespace-nowrap hover:bg-[#b52e2f] transition-colors no-underline">
            View Services
          </Link>
        </Anim>
      </div>
      <HeroTicker />
    </section>
  );
}
