import { useState, type FormEvent } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import GlassPanel from "./ui/GlassPanel";
import SectionHeading from "./ui/SectionHeading";
import { companyEmail } from "../data/content";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (values: FormState): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${companyEmail}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSent(true);
    setForm(initialState);
    setTimeout(() => setSent(false), 5000);
  };

  const fieldClasses = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/70 outline-none transition-colors focus:border-royal-400/50 focus:bg-white/[0.05] ${
      errors[field] ? "border-red-400/50" : "border-white/10"
    }`;

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Great"
          subtitle="Have a question or want to work together? We'd love to hear from you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <GlassPanel strong className="flex h-full flex-col justify-between p-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-silver-200">
                  Email
                </h3>
                <a
                  href={`mailto:${companyEmail}`}
                  className="mt-4 flex items-center gap-3 text-silver-300 transition-colors hover:text-royal-300"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Mail className="h-5 w-5 text-royal-300" strokeWidth={1.5} />
                  </span>
                  <span className="break-all text-sm font-medium">{companyEmail}</span>
                </a>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-silver-500">
                We typically respond within one to two business days.
              </p>
            </GlassPanel>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <GlassPanel strong className="p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-silver-400">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Your name"
                      className={fieldClasses("name")}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-silver-400">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="you@example.com"
                      className={fieldClasses("email")}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-silver-400">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange("subject")}
                    placeholder="What is this about?"
                    className={fieldClasses("subject")}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-silver-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us about your project or question..."
                    className={`${fieldClasses("message")} resize-none`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-royal-500 to-royal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_-10px_rgba(61,110,242,0.8)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {sent && (
                  <div className="flex items-center gap-2 text-sm text-royal-300">
                    <CheckCircle2 className="h-4 w-4" />
                    Opening your email client to send this to {companyEmail}...
                  </div>
                )}
              </form>
            </GlassPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
