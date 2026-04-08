import { Anim } from "./ui/Anim";
import { QuoteMark } from "./ui/Logos";

export function Testimonials() {
  return (
    <>
      <section className="bg-[#f3f3f3] px-10 pt-20 pb-[120px] flex flex-col items-center gap-20 overflow-hidden">
        <Anim direction="up">
          <h2 className="text-[clamp(64px,8.3vw,120px)] font-bold leading-[100px] tracking-[-7.2px] text-center max-w-[774px]">
            What people say about us
          </h2>
        </Anim>
        <div className="flex gap-10 w-max">
          {[0, 1].map((i) => (
            <Anim key={i} direction="up" delay={i * 0.15}>
              <div className="bg-white rounded-xl overflow-hidden flex w-[962px] h-[427px] flex-shrink-0">
                <div className="w-[300px] h-full bg-[#d0d0d0] flex-shrink-0" />
                <div className="p-10 py-[62px] flex flex-col justify-center gap-[18px] flex-1">
                  <div className="mb-6">
                    <QuoteMark />
                  </div>
                  <p className="text-2xl font-normal leading-[1.4] tracking-[-0.48px] text-[#2d2d2d]">
                    We've worked with Jamie on many projects and consider him an arm's length extension of our team. He's facilitated workshops and training, led product research, and worked directly with our agency and technology partners.
                  </p>
                  <div>
                    <p className="text-2xl font-bold tracking-[-0.48px]">Paul Paruch</p>
                    <p className="text-xl italic text-[#606060] mt-1">Vice President Digital & Payments, Atlantic Central</p>
                  </div>
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-10 py-[120px] pb-16 flex flex-col items-center gap-16 overflow-hidden">
        <Anim direction="up">
          <div className="text-center flex flex-col gap-3 items-center">
            <h2 className="text-[64px] font-bold tracking-[-3.84px] leading-[100px]">Our Partners</h2>
            <p className="text-lg tracking-[-0.36px] max-w-[574px] text-[#2d2d2d]">
              We've worked with Jamie on many projects and consider him an arm's length extension of our team. He's facilitated workshops and training,
            </p>
          </div>
        </Anim>
        <div className="w-full">
          {[0, 1, 2, 3].map((row) => (
            <Anim key={row} direction="up" delay={row * 0.08}>
              <div className="grid grid-cols-6 gap-[10px] p-[10px]">
                {Array.from({ length: 6 }).map((_, col) => (
                  <div key={col} className="h-[119px] flex items-center justify-center">
                    <span className="text-[32px] font-semibold text-black opacity-15">Logo</span>
                  </div>
                ))}
              </div>
            </Anim>
          ))}
        </div>
        <div className="w-full h-px bg-black/20" />
      </section>
    </>
  );
}
