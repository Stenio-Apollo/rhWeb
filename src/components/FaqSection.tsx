import { useState } from "react";

import { faqItems } from "../content/supportContent";
import { cn } from "../lib/cn";
import { GlassPanel } from "./ui/GlassPanel";
import { RevealSection } from "./ui/RevealSection";
import { SectionFrame } from "./ui/SectionFrame";
import { SectionHeading } from "./ui/SectionHeading";

const quickChecks = [
  "Confirm the latest app version is installed",
  "Restart the app and the device once",
  "Check internet and timezone settings",
  "Capture one screenshot if the issue is visible",
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <SectionFrame id="faq">
      <RevealSection delay={120} className="flex w-full flex-col justify-center gap-6">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Quick answers for the issues users hit most often."
            description="The FAQ stays short on purpose, so users can scan it quickly on desktop or mobile."
          />

          <GlassPanel className="p-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[rgba(43,43,43,0.56)]">
              Quick checks before emailing
            </p>
            <div className="space-y-3">
              {quickChecks.map((check) => (
                <div
                  key={check}
                  className="rounded-2xl border border-[rgba(43,43,43,0.08)] bg-[rgba(251,247,243,0.72)] px-4 py-3 text-sm leading-[1.65] text-[rgba(43,43,43,0.78)]"
                >
                  {check}
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        <div className="grid gap-3.5">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <GlassPanel
                key={item.question}
                className={cn(
                  "overflow-hidden border transition duration-200 ease-out",
                  isOpen
                    ? "border-[rgba(181,89,65,0.38)]"
                    : "border-[rgba(43,43,43,0.12)]",
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition duration-200 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <span className="text-[1.04rem] leading-[1.55] font-medium text-rh-ink">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-2xl font-light text-rh-clay">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <p
                    className={cn(
                      "overflow-hidden px-6 text-base leading-[1.75] text-[rgba(43,43,43,0.76)]",
                      isOpen ? "pb-6" : "pb-0",
                    )}
                  >
                    {item.answer}
                  </p>
                </div>
              </GlassPanel>
            );
          })}
        </div>
      </RevealSection>
    </SectionFrame>
  );
}
