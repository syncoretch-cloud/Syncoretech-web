import { Compass, Eye } from "lucide-react";
import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";

export default function MissionVision() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <Reveal>
          <GlassPanel strong className="relative h-full overflow-hidden p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-royal-500/15 blur-3xl" />
            <Compass className="h-8 w-8 text-royal-300" strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-xl font-bold text-silver-200">Our Mission</h3>
            <p className="mt-3 text-base leading-relaxed text-silver-400">
              To develop, integrate, and apply innovative technologies that
              address real-world needs while improving efficiency,
              connectivity, accessibility, and digital experiences.
            </p>
          </GlassPanel>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassPanel strong className="relative h-full overflow-hidden p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-royal-500/15 blur-3xl" />
            <Eye className="h-8 w-8 text-royal-300" strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-xl font-bold text-silver-200">Our Vision</h3>
            <p className="mt-3 text-base leading-relaxed text-silver-400">
              To become a leading technology and digital innovation company
              recognized for building intelligent, integrated, reliable, and
              purposeful technological solutions.
            </p>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
