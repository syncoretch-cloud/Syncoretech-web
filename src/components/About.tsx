import { Layers, GitMerge, Sparkles } from "lucide-react";
import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import SectionHeading from "./ui/SectionHeading";

const pillars = [
  {
    icon: Layers,
    title: "Multi-Disciplinary",
    text: "Software, hardware, IoT, AI, automation, system integration, databases, web, UI/UX, and digital design working together.",
  },
  {
    icon: GitMerge,
    title: "Connected by Design",
    text: "Different technological disciplines brought together instead of treated as isolated fields.",
  },
  {
    icon: Sparkles,
    title: "Centered on Purpose",
    text: "Technology that is functional, adaptable, reliable, and built around real-world needs.",
  },
];

const equation = ["Software", "Hardware", "Data", "Connectivity", "AI", "Automation"];

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Syncore"
          title="Technology built around purpose, integration, and innovation."
          subtitle="Syncore Technologies brings different technological disciplines together to create connected, intelligent, practical, and reliable digital solutions."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <GlassPanel hover className="h-full p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <p.icon className="h-5 w-5 text-royal-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-silver-200">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">{p.text}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-6">
          <GlassPanel strong className="px-6 py-10 sm:px-10">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {equation.map((item, i) => (
                <div key={item} className="flex items-center gap-3 sm:gap-4">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-silver-300 sm:px-5 sm:text-base">
                    {item}
                  </span>
                  {i < equation.length - 1 && (
                    <span className="text-lg font-light text-royal-400">+</span>
                  )}
                </div>
              ))}
              <span className="text-lg font-light text-royal-400">=</span>
              <span className="rounded-full bg-gradient-to-r from-royal-500 to-royal-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(61,110,242,0.8)] sm:px-6 sm:text-base">
                Integrated Technology
              </span>
            </div>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
