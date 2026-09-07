import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import { specializations } from "../data/content";

export default function SpecializationStrip() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <Reveal>
        <GlassPanel className="mx-auto max-w-6xl px-6 py-6 sm:px-10">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-silver-500">
              We Specialize In
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {specializations.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 text-silver-300">
                  <Icon className="h-4 w-4 text-royal-300" strokeWidth={1.5} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>
      </Reveal>
    </section>
  );
}
