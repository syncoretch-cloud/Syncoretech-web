import { Mail } from "lucide-react";
import logo from "../assets/logo.png";
import GlassPanel from "./ui/GlassPanel";
import AdminTrigger from "./admin/AdminTrigger";
import { useSite } from "../context/SiteContent";
import { companyEmail, footerLinks } from "../data/content";

export default function Footer() {
  const { text } = useSite();
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="px-4 pb-6 pt-4 sm:px-6">
      <GlassPanel strong className="mx-auto max-w-6xl overflow-hidden p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Syncore Technologies" className="h-9 w-auto" />
              <span className="font-display text-sm font-bold text-silver-200">
                SYNCORE<span className="text-royal-300"> TECHNOLOGIES</span>
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-royal-300">
              {text("footer.tagline")}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-silver-400">
              {text("footer.description")}
            </p>
            <a
              href={`mailto:${companyEmail}`}
              className="mt-5 flex w-fit items-center gap-2 text-sm font-medium text-silver-300 transition-colors hover:text-royal-300"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              {companyEmail}
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-silver-200">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={scrollTo(link.href)}
                    className="text-sm text-silver-400 transition-colors hover:text-royal-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-silver-200">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((label) => (
                <li key={label} className="text-sm text-silver-400">
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-silver-200">Other</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.other.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={scrollTo(link.href)}
                    className="text-sm text-silver-400 transition-colors hover:text-royal-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6 text-xs text-silver-500">
          <AdminTrigger />
          <span className="flex-1 pr-12 text-center">
            © {year} Syncore Technologies. All rights reserved.
          </span>
        </div>
      </GlassPanel>
    </footer>
  );
}
