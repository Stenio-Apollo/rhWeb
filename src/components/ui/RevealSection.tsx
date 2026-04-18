import { type ReactNode } from "react";

import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../lib/cn";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function RevealSection({
  children,
  className,
  delay = 0,
  id,
}: RevealSectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      data-visible="false"
      className={cn(
        "translate-y-7 opacity-0 transition-all duration-700 ease-out",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
