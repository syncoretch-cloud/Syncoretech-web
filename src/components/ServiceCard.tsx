import { ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import type { Service } from "../data/content";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Reveal delay={(index % 5) * 0.06}>
      <GlassPanel hover className="group flex h-full flex-col p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-royal-400/40 group-hover:bg-royal-500/10">
            <Icon className="h-5 w-5 text-royal-300" strokeWidth={1.5} />
          </div>
          <span className="font-display text-xs font-semibold tracking-widest text-silver-500">
            {service.number}
          </span>
        </div>

        <h3 className="mt-5 font-display text-base font-semibold text-silver-200">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-400">
          {service.description}
        </p>

        <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-silver-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-royal-400/40 group-hover:text-royal-300">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </div>
      </GlassPanel>
    </Reveal>
  );
}
