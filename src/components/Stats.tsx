import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <Reveal>
        <GlassPanel strong className="mx-auto max-w-6xl px-6 py-8 sm:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-xl font-bold text-gradient-royal sm:text-2xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-silver-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </Reveal>
    </section>
  );
}
