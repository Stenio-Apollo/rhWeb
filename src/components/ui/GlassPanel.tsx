import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "../../lib/cn";

type GlassPanelProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export function GlassPanel({
  children,
  className,
  ...props
}: GlassPanelProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-[30px] border border-[rgba(43,43,43,0.12)] bg-[rgba(251,247,243,0.8)] shadow-[0_28px_80px_rgba(43,43,43,0.12)] backdrop-blur-[18px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
