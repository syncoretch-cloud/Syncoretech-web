import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Services"
          title="What We Do"
          subtitle="We bring ideas, technology, and creativity together to build practical and powerful digital solutions."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
