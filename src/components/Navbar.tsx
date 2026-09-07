import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";
import { nav } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-5 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "glass-panel-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
            : "bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Syncore Technologies" className="h-8 w-auto sm:h-9" />
          <span className="hidden font-display text-sm font-bold tracking-wide text-silver-200 sm:inline">
            SYNCORE<span className="text-royal-300"> TECHNOLOGIES</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === item.href
                  ? "text-white"
                  : "text-silver-400 hover:text-silver-200"
              }`}
            >
              {active === item.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/8 ring-1 ring-royal-400/30"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-royal-500 to-royal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_-6px_rgba(61,110,242,0.8)] transition-transform duration-300 hover:-translate-y-0.5 lg:flex"
        >
          Let&rsquo;s Connect
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-silver-200 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl lg:hidden"
          >
            <div className="glass-panel-strong flex flex-col gap-1 rounded-2xl p-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    active === item.href
                      ? "bg-white/8 text-white"
                      : "text-silver-400"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-royal-500 to-royal-600 px-4 py-3 text-sm font-semibold text-white"
              >
                Let&rsquo;s Connect <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
