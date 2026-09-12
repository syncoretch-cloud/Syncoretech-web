import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import type { TeamMember } from "../data/content";

export default function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <GlassPanel hover className="group flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-900">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-base font-semibold text-silver-200">
            {member.name}
          </h3>
          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-royal-300">
            {member.role}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-silver-400">{member.description}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {member.responsibilities.map((r) => (
              <li
                key={r}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-silver-400"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </GlassPanel>
    </Reveal>
  );
}
