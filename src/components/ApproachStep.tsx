import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";

type ApproachStepProps = {
  number: string;
  title: string;
  description: string;
  index: number;
};

export default function ApproachStep({ number, title, description, index }: ApproachStepProps) {
  return (
    <Reveal delay={index * 0.1} className="h-full flex-1">
      <GlassPanel hover className="flex h-full flex-col p-6 lg:min-h-[210px]">
        <span className="font-display text-2xl font-bold text-royal-400/70">{number}</span>
        <h3 className="mt-3 font-display text-base font-semibold text-silver-200">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-silver-400">{description}</p>
      </GlassPanel>
    </Reveal>
  );
}
