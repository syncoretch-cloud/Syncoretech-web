import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";
import GlassPanel from "./ui/GlassPanel";
import { useSite } from "../context/SiteContent";

export default function Hero() {
  const { text } = useSite();
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-royal-300">
            {text("hero.badge")}
          </span>

          <h1 className="font-display text-3xl font-bold leading-[1.1] text-silver-200 sm:text-4xl lg:text-5xl">
            Technologies
            <br />
            with{" "}
            <span className="text-gradient-royal">Purpose.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-400 sm:text-lg">
            {text("hero.description")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("#services")}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-700 to-navy-600 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-royal-400/30 shadow-[0_0_35px_-10px_rgba(61,110,242,0.7)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Discover More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-silver-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <GlassPanel strong className="relative flex items-center justify-center overflow-hidden p-10 sm:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-royal-500/10 via-transparent to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-500/25 blur-[90px]" />
            <img
              src={logo}
              alt="Syncore Technologies logo"
              className="relative h-40 w-auto drop-shadow-[0_0_40px_rgba(93,141,255,0.45)] animate-float sm:h-52"
            />
          </GlassPanel>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <GlassPanel hover className="p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-300">
                Our Mission
              </span>
              <p className="mt-3 text-sm leading-relaxed text-silver-400">
                To develop, integrate, and apply innovative technologies that
                address real-world needs while improving efficiency,
                connectivity, accessibility, and digital experiences.
              </p>
            </GlassPanel>
            <GlassPanel hover className="p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-300">
                Our Vision
              </span>
              <p className="mt-3 text-sm leading-relaxed text-silver-400">
                To become a leading technology and digital innovation company
                recognized for building intelligent, integrated, reliable, and
                purposeful technological solutions.
              </p>
            </GlassPanel>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
