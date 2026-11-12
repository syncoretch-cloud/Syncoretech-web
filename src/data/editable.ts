// Text blocks the admin can override. `value` is the built-in default.
export type TextField = { key: string; label: string; value: string; multiline?: boolean };

export const textFields: TextField[] = [
  { key: "hero.badge", label: "Hero badge", value: "Technology & Digital Innovation" },
  {
    key: "hero.description",
    label: "Hero description",
    multiline: true,
    value:
      "Syncore Technologies is a technology and digital innovation company that builds intelligent, integrated, reliable, and purposeful technological solutions.",
  },
  { key: "about.title", label: "About title", value: "Technology built around purpose, integration, and innovation." },
  {
    key: "about.subtitle",
    label: "About subtitle",
    multiline: true,
    value:
      "Syncore Technologies brings different technological disciplines together to create connected, intelligent, practical, and reliable digital solutions.",
  },
  { key: "services.title", label: "Services title", value: "What We Do" },
  {
    key: "services.subtitle",
    label: "Services subtitle",
    multiline: true,
    value:
      "We bring ideas, technology, and creativity together to build practical and powerful digital solutions.",
  },
  { key: "projects.title", label: "Projects title", value: "Featured Projects" },
  {
    key: "projects.subtitle",
    label: "Projects subtitle",
    multiline: true,
    value: "Products and solutions designed, built, and shipped by Syncore Technologies.",
  },
  { key: "contact.title", label: "Contact title", value: "Let's Build Something Great" },
  {
    key: "contact.subtitle",
    label: "Contact subtitle",
    multiline: true,
    value: "Have a question or want to work together? We'd love to hear from you.",
  },
  { key: "footer.tagline", label: "Footer tagline", value: "Technologies with Purpose." },
  {
    key: "footer.description",
    label: "Footer description",
    multiline: true,
    value:
      "We build technology with purpose, connecting ideas, systems, and people through intelligent and integrated digital solutions.",
  },
];

export type Accent = { id: string; label: string; shades: [string, string, string, string, string] };

// Shades for royal-300 … royal-700.
export const accents: Accent[] = [
  { id: "blue", label: "Royal Blue", shades: ["#8fb0ff", "#6690ff", "#3d6ef2", "#2c53c9", "#203c96"] },
  { id: "emerald", label: "Emerald", shades: ["#7ee8b5", "#4cd89a", "#22b573", "#178a58", "#0f6642"] },
  { id: "violet", label: "Violet", shades: ["#c4b0ff", "#a58bff", "#8461f2", "#6743c9", "#4c3196"] },
  { id: "rose", label: "Rose", shades: ["#ffa8c0", "#ff7d9f", "#f2487a", "#c92d5c", "#96204a"] },
  { id: "amber", label: "Amber", shades: ["#ffd38a", "#ffbd55", "#f29b1d", "#c97a0f", "#965a0a"] },
  { id: "cyan", label: "Cyan", shades: ["#8fe6ff", "#5ad4f5", "#1fb1d8", "#1689a8", "#0f6580"] },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

export type SiteOverrides = {
  texts: Record<string, string>;
  theme: { accent: string };
  projects: Project[];
};

export const emptyOverrides: SiteOverrides = { texts: {}, theme: { accent: "blue" }, projects: [] };
