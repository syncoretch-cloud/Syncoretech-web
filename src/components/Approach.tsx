import { ArrowRight, ArrowDown } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ApproachStep from "./ApproachStep";
import { approach } from "../data/content";

export default function Approach() {
  return (
    <section id="approach" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Approach"
          subtitle="A simple process that turns ideas into purposeful solutions."
        />

        <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row">
          {approach.map((step, i) => (
            <div key={step.number} className="flex flex-col items-stretch gap-4 lg:flex-1 lg:flex-row">
              <ApproachStep {...step} index={i} />
              {i < approach.length - 1 && (
                <div className="flex shrink-0 items-center justify-center text-royal-400/40">
                  <ArrowDown className="h-5 w-5 lg:hidden" strokeWidth={1.5} />
                  <ArrowRight className="hidden h-5 w-5 lg:block" strokeWidth={1.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
