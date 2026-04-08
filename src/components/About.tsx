import React from "react";
import { Anim } from "./ui/Anim";

const cardDesc = "2020 Digital was founded in 2017 and has worked with organizations across industries that include financial services, healthcare, government, technology, legal, education, startups, and travel & tourism.";

export function About() {
  return (
    <section id="about" className="bg-[#d73a3b] p-10 py-[120px] flex flex-col gap-20 overflow-hidden">
      <div className="flex flex-col gap-10">
        <Anim direction="up">
          <div className="flex flex-col gap-[48px] max-w-[761px]">
            <p className="text-2xl font-bold text-white tracking-[-0.48px]">{"{About Us}"}</p>
            <p className="text-[32px] font-normal text-white leading-10 tracking-[-1.28px]">
              {cardDesc}
            </p>
          </div>
        </Anim>
        <Anim direction="up" delay={0.15}>
          <button className="inline-flex items-center justify-center border-2 border-white rounded-xl px-4 py-6 bg-transparent text-white font-semibold text-2xl tracking-[-0.48px] cursor-pointer hover:bg-white hover:text-[#d73a3b] transition-all">
            Learn more
          </button>
        </Anim>
      </div>
      <Anim direction="scale" delay={0.2}>
        <div className="w-full h-[687px] bg-[#d0d0d0] rounded-xl" />
      </Anim>
    </section>
  );
}
