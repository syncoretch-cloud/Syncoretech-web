import type { ElementType, ReactNode, HTMLAttributes } from "react";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  strong?: boolean;
  hover?: boolean;
  as?: ElementType;
  className?: string;
};

export default function GlassPanel({
  children,
  strong = false,
  hover = false,
  as: Component = "div",
  className = "",
  ...rest
}: GlassPanelProps) {
  return (
    <Component
      className={`${strong ? "glass-panel-strong" : "glass-panel"} rounded-3xl ${
        hover
          ? "transition-all duration-500 hover:-translate-y-1.5 hover:border-royal-400/30 hover:shadow-[0_0_50px_-10px_rgba(61,110,242,0.5)]"
          : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
