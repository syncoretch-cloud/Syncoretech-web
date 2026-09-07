import SectionHeading from "./ui/SectionHeading";
import TeamMemberCard from "./TeamMemberCard";
import { team } from "../data/content";

export default function Team() {
  return (
    <section id="team" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Leadership"
          title="Our Team"
          subtitle="The minds behind Syncore Technologies."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamMemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
