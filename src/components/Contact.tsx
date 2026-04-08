import { Anim } from "./ui/Anim";

export function Contact() {
  return (
    <section id="contact" className="bg-[#f3f3f3] p-10 py-20 flex gap-16 items-center overflow-hidden">
      <Anim direction="right" className="max-w-[673px] flex flex-col gap-8 flex-shrink-0">
        <h2 className="text-[clamp(64px,8.3vw,120px)] font-bold leading-[100px] tracking-[-7.2px]">
          Let's have a conversation
        </h2>
        <p className="text-2xl tracking-[-0.48px] leading-[1.5]">
          Whether you have a project ready or just want to talk something through, get in touch. You'll hear back within one business day.
        </p>
      </Anim>
      <Anim direction="left" delay={0.2} className="flex-1">
        <div className="min-h-[427px] bg-white rounded-xl min-w-[300px]" />
      </Anim>
    </section>
  );
}
