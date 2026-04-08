import { Anim } from "./ui/Anim";

const works = [
  { name: "Datolite", reverse: false },
  { name: "Paul Paruch", reverse: true },
  { name: "Burlington", reverse: false }
];

export function Works() {
  return (
    <section id="works" className="bg-[#f3f3f3] p-10 py-[120px] flex flex-col gap-20 overflow-hidden">
      <div className="flex flex-col gap-6">
        <Anim direction="up">
          <h2 className="text-[clamp(80px,13.9vw,200.5px)] font-bold tracking-[-12.03px] text-center whitespace-nowrap">
            Featured Works
          </h2>
        </Anim>
        <div className="w-full h-px bg-black/20" />
      </div>
      
      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-6 w-full">
          {works.map((w, i) => (
            <Anim key={i} direction={w.reverse ? "left" : "right"} delay={i * 0.1}>
              <div className={`bg-white rounded-[24px] p-6 flex gap-[48px] overflow-hidden ${w.reverse ? "flex-row-reverse justify-between" : ""}`}>
                <div className="w-[656px] min-w-[400px] h-[484px] bg-[#d0d0d0] rounded-xl flex-shrink-0" />
                <div className={`flex flex-col justify-between py-6 ${w.reverse ? "pr-6" : ""}`}>
                  <div>
                    <p className="text-2xl font-bold tracking-[-0.48px]">{w.name}</p>
                    <p className="text-xl italic text-[#606060] mt-1">Vice President Digital & Payments, Atlantic Central</p>
                  </div>
                  <p className="text-2xl font-medium tracking-[-0.48px]">2024</p>
                </div>
              </div>
            </Anim>
          ))}
        </div>
        
        <button className="inline-flex items-center justify-center border-2 border-black/60 rounded-xl px-4 py-6 bg-transparent text-black font-semibold text-2xl tracking-[-0.48px] cursor-pointer hover:bg-black hover:text-white transition-all">
          See all works
        </button>
      </div>
    </section>
  );
}
