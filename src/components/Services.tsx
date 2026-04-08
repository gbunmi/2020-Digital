import React from "react";
import { Anim } from "./ui/Anim";
import { SearchIcon } from "./ui/Logos";

const cardDesc = "20/20 Digital was founded in 2017 and has worked with organizations across industries that include financial services, healthcare, government, technology, legal, education, startups, and travel & tourism.";

const cardsData = [
  { title: "Research\n& Understanding", bg: "#1e1e1c", fg: "#fff", dfg: "rgba(255,255,255,0.7)", tall: true, icon: true },
  { title: "Design\n& Testing", bg: "#7da489", fg: "#fff", dfg: "rgba(255,255,255,0.7)" },
  { title: "Strategy\n& Planning", bg: "#c4c4c0", fg: "#1e1e1c", dfg: "rgba(30,30,28,0.7)" },
  { title: "UX Leadership\n& Advisory", bg: "#7d9ca4", fg: "#fff", dfg: "rgba(255,255,255,0.7)" },
];

function CardItem({ card, delay }: { card: typeof cardsData[0]; delay: number }) {
  return (
    <Anim 
      direction="up" 
      delay={delay} 
      className={card.tall ? "h-[675px] flex-shrink-0" : "flex-1 min-h-0"}
    >
      <div 
        style={{ background: card.bg }}
        className="rounded-[24px] p-20 pt-20 pb-10 overflow-hidden flex flex-col justify-between h-full"
      >
        <div className="flex flex-col gap-6">
          {card.icon && <SearchIcon />}
          <h3 
            style={{ color: card.fg }}
            className="text-[40px] font-bold tracking-[-0.8px] whitespace-pre-line leading-normal"
          >
            {card.title}
          </h3>
        </div>
        <p 
          style={{ color: card.dfg }}
          className="text-[20px] font-normal leading-6 tracking-[-0.8px] max-w-[480px]"
        >
          {cardDesc}
        </p>
      </div>
    </Anim>
  );
}

export function Services() {
  const labels = ["Research", "Strategy", "Design"];
  const offsets = [0, 140, 340];

  return (
    <>
      <section id="services" className="flex w-full">
        <div className="flex-1 bg-[#d73a3b] p-10 py-[120px] min-h-[545px] flex flex-col justify-center overflow-hidden">
          {labels.map((label, i) => (
            <Anim 
              key={label} 
              direction="left" 
              delay={i * 0.15} 
              style={{ marginLeft: offsets[i] }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-[60px] bg-white/70 flex-shrink-0" />
                <span className="text-[clamp(40px,5vw,72px)] font-semibold text-white tracking-[-2.88px] leading-[80px] whitespace-nowrap">
                  {label}
                </span>
              </div>
            </Anim>
          ))}
        </div>
        <div className="flex-1 bg-[#d73a3b] p-10 py-[120px] min-h-[545px] flex flex-col justify-center overflow-hidden">
          <Anim direction="right">
            <p className="text-[32px] font-normal text-white leading-10 tracking-[-1.28px] max-w-[520px]">
              Working with organizations across industries, from the first research question through design and delivery.
            </p>
          </Anim>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-10 pt-[200px] pb-[120px] flex flex-col items-center gap-[140px] overflow-hidden">
        <Anim direction="up">
          <h2 className="text-[clamp(64px,8.3vw,120px)] font-bold leading-[100px] tracking-[-7.2px] text-center max-w-[774px]">
            The Right Help at Any Stage
          </h2>
        </Anim>
        <div className="flex gap-6 w-full h-[1151px]">
          <div className="flex flex-col gap-6 w-[calc(50%-12px)] h-full">
            <CardItem card={cardsData[0]} delay={0} />
            <CardItem card={cardsData[1]} delay={0.12} />
          </div>
          <div className="flex flex-col gap-6 w-[calc(50%-12px)] h-full">
            <CardItem card={cardsData[2]} delay={0.06} />
            <CardItem card={cardsData[3]} delay={0.18} />
          </div>
        </div>
      </section>
    </>
  );
}
