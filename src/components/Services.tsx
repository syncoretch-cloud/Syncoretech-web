import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import { useSite } from "../context/SiteContent";
import { services } from "../data/content";

export default function Services() {
  const { text } = useSite();
  return (
    <section id="services" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Services"
          title={text("services.title")}
          subtitle={text("services.subtitle")}
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
