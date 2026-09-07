import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import SectionHeading from "./ui/SectionHeading";
import { values } from "../data/content";

export default function Values() {
  return (
    <section id="values" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What We Stand For" title="Our Core Values" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 0.08}>
              <GlassPanel hover className="h-full p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <v.icon className="h-5 w-5 text-royal-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-silver-200">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">{v.description}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
