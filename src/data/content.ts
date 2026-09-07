import {
  Code2,
  Globe2,
  Network,
  Radio,
  Cpu,
  BrainCircuit,
  Workflow,
  Database,
  PenTool,
  Palette,
  Lightbulb,
  Target,
  ShieldCheck,
  Sparkles,
  Link2,
  Gauge,
  TrendingUp,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

import danielImg from "../assets/team/daniel-murimi.jpg";
import jaffaryImg from "../assets/team/jaffary-shija.jpg";
import millardImg from "../assets/team/millard-mushi.jpg";
import furahaImg from "../assets/team/furaha-balozi.jpg";

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Approach", href: "#approach" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export const specializations: { label: string; icon: LucideIcon }[] = [
  { label: "Software", icon: Code2 },
  { label: "Web", icon: Globe2 },
  { label: "IoT", icon: Radio },
  { label: "AI", icon: BrainCircuit },
  { label: "Integration", icon: Network },
  { label: "Automation", icon: Workflow },
  { label: "Design", icon: Palette },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Custom software solutions designed around real business and organizational needs.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites and web applications.",
    icon: Globe2,
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "Connecting different systems, platforms, devices, and data into unified solutions.",
    icon: Network,
  },
  {
    number: "04",
    title: "IoT Development",
    description:
      "Building smart connected systems that collect, transmit, and process information.",
    icon: Radio,
  },
  {
    number: "05",
    title: "Hardware Integration",
    description:
      "Integrating hardware components with software to create intelligent systems.",
    icon: Cpu,
  },
  {
    number: "06",
    title: "Artificial Intelligence",
    description:
      "Using AI to analyze data, automate processes, and build intelligent solutions.",
    icon: BrainCircuit,
  },
  {
    number: "07",
    title: "Automation",
    description:
      "Automating repetitive tasks to improve efficiency, accuracy, and productivity.",
    icon: Workflow,
  },
  {
    number: "08",
    title: "Database & Information Systems",
    description:
      "Designing and managing secure, structured, and scalable data systems.",
    icon: Database,
  },
  {
    number: "09",
    title: "UI/UX Design",
    description:
      "Creating smooth, intuitive, and user-centered digital experiences.",
    icon: PenTool,
  },
  {
    number: "10",
    title: "Graphics & Digital Design",
    description:
      "Professional graphics, branding, and visual communication that represent identity.",
    icon: Palette,
  },
];

export const stats = [
  { value: "10+", label: "Core Services" },
  { value: "Integrated", label: "Technology Approach" },
  { value: "Innovation", label: "Driven" },
  { value: "Purpose", label: "Focused" },
  { value: "Future", label: "Ready" },
];

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  responsibilities: string[];
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Jaffary .J. Shija",
    role: "Chief Executive Officer (CEO)",
    description:
      "Leads the company with vision, strategic direction, organizational leadership, and long-term growth.",
    responsibilities: [
      "Company vision",
      "Strategic direction",
      "Leadership",
      "Organizational growth",
      "Major decision-making",
    ],
    image: jaffaryImg,
  },
  {
    name: "Daniel Murimi",
    role: "Chief Technology Officer (CTO)",
    description:
      "Drives technology strategy, innovation, technical direction, and system architecture.",
    responsibilities: [
      "Technology strategy",
      "Technical direction",
      "System architecture",
      "System integration",
      "Technology innovation",
    ],
    image: danielImg,
  },
  {
    name: "Furaha Balozi",
    role: "Chief Operating Officer (COO)",
    description:
      "Oversees daily operations, coordinates the team, and ensures smooth execution.",
    responsibilities: [
      "Operations",
      "Team coordination",
      "Workflow",
      "Execution",
      "Operational efficiency",
    ],
    image: furahaImg,
  },
  {
    name: "Millard Mushi",
    role: "Lead Developer & AI",
    description:
      "Leads software development and AI solutions, turning technical ideas into powerful digital products.",
    responsibilities: [
      "Software development",
      "Artificial intelligence",
      "Technical engineering",
      "APIs",
      "Databases",
      "AI integration",
    ],
    image: millardImg,
  },
];

export const approach = [
  {
    number: "01",
    title: "Understand",
    description: "We understand your needs, challenges, and objectives.",
  },
  {
    number: "02",
    title: "Design",
    description: "We plan the right solution, architecture, and structure.",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build, test, and refine the system.",
  },
  {
    number: "04",
    title: "Integrate",
    description: "We connect systems, technologies, devices, and data.",
  },
  {
    number: "05",
    title: "Deploy & Improve",
    description: "We deploy the solution and continue improving it for the future.",
  },
];

export const values: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Innovation",
    description: "Continuously exploring new technologies and better approaches.",
    icon: Lightbulb,
  },
  {
    title: "Purpose",
    description: "Building technology around meaningful objectives.",
    icon: Target,
  },
  {
    title: "Reliability",
    description: "Creating systems users can depend on.",
    icon: ShieldCheck,
  },
  {
    title: "Creativity",
    description: "Combining technical engineering with creative thinking.",
    icon: Sparkles,
  },
  {
    title: "Integration",
    description: "Connecting technologies into unified systems.",
    icon: Link2,
  },
  {
    title: "Efficiency",
    description: "Using technology to improve processes and productivity.",
    icon: Gauge,
  },
  {
    title: "Growth",
    description: "Continuously learning, adapting, and advancing.",
    icon: TrendingUp,
  },
  {
    title: "Responsibility",
    description: "Developing technology thoughtfully and responsibly.",
    icon: HeartHandshake,
  },
];

export const philosophySteps = ["Idea", "Design", "Develop", "Integrate", "Improve"];

export const companyEmail = "syncoretch@gmail.com";

export const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Our Approach", href: "#approach" },
    { label: "Our Values", href: "#values" },
  ],
  services: [
    "Software Development",
    "Web Development",
    "System Integration",
    "IoT",
    "Artificial Intelligence",
    "Automation",
    "UI/UX Design",
  ],
  other: [
    { label: "Careers", href: "#contact" },
    { label: "Contact Us", href: "#contact" },
    { label: "Support", href: "#contact" },
    { label: "Privacy Policy", href: "#contact" },
  ],
};
