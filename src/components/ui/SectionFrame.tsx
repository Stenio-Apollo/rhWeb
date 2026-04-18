import { type ReactNode } from "react";

import { cn } from "../../lib/cn";

type SectionFrameProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionFrame({ children, className, id }: SectionFrameProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-12 md:py-16",
        className,
      )}
    >
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] max-md:w-[min(100%-20px,1180px)]">
        {children}
      </div>
    </section>
  );
}
