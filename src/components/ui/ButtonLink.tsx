import { type ReactNode } from "react";

import { cn } from "../../lib/cn";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-[52px] items-center justify-center rounded-full border px-6 text-sm font-medium transition duration-200 ease-out",
        "hover:-translate-y-0.5 focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none",
        variant === "primary"
          ? "border-transparent bg-rh-clay text-rh-paper shadow-[0_18px_40px_rgba(181,89,65,0.28)]"
          : "border-[rgba(43,43,43,0.12)] bg-[rgba(251,247,243,0.62)] text-rh-ink backdrop-blur-md",
        className,
      )}
    >
      {children}
    </a>
  );
}
