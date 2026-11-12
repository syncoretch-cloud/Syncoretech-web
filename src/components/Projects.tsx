import { ExternalLink, Rocket } from "lucide-react";
import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import SectionHeading from "./ui/SectionHeading";
import { useSite } from "../context/SiteContent";

export default function Projects() {
  const { text, content } = useSite();
  const projects = content.projects;

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Work"
          title={text("projects.title")}
          subtitle={text("projects.subtitle")}
        />

        {projects.length === 0 ? (
          <Reveal>
            <GlassPanel className="mx-auto mt-14 max-w-xl p-10 text-center">
              <Rocket className="mx-auto h-8 w-8 text-royal-300" strokeWidth={1.5} />
              <p className="mt-4 text-sm text-silver-400">
                Our featured projects are launching soon. Check back shortly.
              </p>
            </GlassPanel>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.1}>
                <GlassPanel hover className="flex h-full flex-col overflow-hidden">
                  {p.image && (
                    <img src={p.image} alt={p.title} loading="lazy" className="h-44 w-full object-cover" />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    {p.category && (
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-300">
                        {p.category}
                      </span>
                    )}
                    <h3 className="mt-2 font-display text-lg font-semibold text-silver-200">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-400">{p.description}</p>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-royal-300 transition-colors hover:text-silver-200"
                      >
                        View project <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
