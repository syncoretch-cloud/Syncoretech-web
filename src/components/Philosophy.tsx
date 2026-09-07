import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import { philosophySteps } from "../data/content";

export default function Philosophy() {
  return (
    <section id="philosophy" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-display text-2xl font-bold leading-tight text-silver-200 sm:text-3xl">
            &ldquo;Technology should have{" "}
            <span className="text-gradient-royal">purpose.</span>&rdquo;
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-silver-400">
            Technology should not simply exist because it is advanced. It
            should solve problems, connect systems, simplify processes,
            improve experiences, enable innovation, and create meaningful
            value.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <GlassPanel strong className="px-4 py-8 sm:px-10">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-2">
              {philosophySteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3 sm:gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-royal-400/30 bg-royal-500/10 font-display text-xs font-bold text-royal-300">
                      0{i + 1}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-silver-300">
                      {step}
                    </span>
                  </div>
                  {i < philosophySteps.length - 1 && (
                    <div className="mb-6 h-px w-8 bg-gradient-to-r from-royal-400/50 to-royal-400/10 sm:w-14" />
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
