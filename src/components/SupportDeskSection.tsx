import { useState } from "react";

import { supportTopics } from "../content/supportContent";
import { cn } from "../lib/cn";
import { ButtonLink } from "./ui/ButtonLink";
import { GlassPanel } from "./ui/GlassPanel";
import { RevealSection } from "./ui/RevealSection";
import { SectionFrame } from "./ui/SectionFrame";
import { SectionHeading } from "./ui/SectionHeading";

const responseSteps = [
  "Choose the issue type",
  "Include the most useful context",
  "Send one clean support email",
];

export function SupportDeskSection() {
  const [activeTopic, setActiveTopic] =
    useState<keyof typeof supportTopics>("account");

  const activeContent = supportTopics[activeTopic];

  return (
    <SectionFrame id="support-desk">
      <RevealSection delay={90} className="flex w-full flex-col justify-center gap-6">
        <SectionHeading
          eyebrow="Support desk"
          title="Choose the type of help you need."
          description="This section keeps the support flow simple: pick a category, see what details matter, then send one clear email."
        />

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassPanel className="relative overflow-hidden p-6 md:p-7">
            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-2.5">
                {Object.entries(supportTopics).map(([key, topic]) => {
                  const active = activeTopic === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={active}
                      className={cn(
                        "rounded-full border px-4 py-3 text-sm font-medium transition duration-200 ease-out",
                        "hover:-translate-y-0.5 focus-visible:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none",
                        active
                          ? "border-transparent bg-rh-clay text-rh-paper"
                          : "border-[rgba(43,43,43,0.12)] bg-[rgba(251,247,243,0.68)] text-rh-ink",
                      )}
                      onClick={() =>
                        setActiveTopic(key as keyof typeof supportTopics)
                      }
                    >
                      {topic.title}
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[26px] border border-[rgba(43,43,43,0.1)] bg-[rgba(228,224,212,0.62)] p-5">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[rgba(43,43,43,0.56)]">
                    Selected support path
                  </p>
                  <h3 className="mb-3 text-[1.4rem] leading-[1.12] font-semibold tracking-[-0.03em] text-rh-ink">
                    {activeContent.title}
                  </h3>
                  <p className="mb-5 text-sm leading-[1.7] text-[rgba(43,43,43,0.76)]">
                    {activeContent.summary}
                  </p>

                  <div className="rounded-2xl bg-[rgba(251,247,243,0.72)] p-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[rgba(43,43,43,0.56)]">
                      Suggested subject
                    </p>
                    <p className="text-sm font-medium text-rh-ink">
                      {activeContent.emailSubject}
                    </p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-[rgba(43,43,43,0.1)] bg-[rgba(251,247,243,0.68)] p-5">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[rgba(43,43,43,0.56)]">
                    What to include
                  </p>
                  <div className="space-y-3">
                    {activeContent.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3 rounded-2xl border border-[rgba(43,43,43,0.08)] bg-[rgba(251,247,243,0.88)] px-4 py-3"
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rh-clay" />
                        <p className="text-sm leading-[1.7] text-[rgba(43,43,43,0.8)]">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          <div className="grid gap-5">
            <GlassPanel className="bg-[linear-gradient(135deg,rgba(228,224,212,0.96)_0%,rgba(251,247,243,0.94)_100%)] p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[rgba(43,43,43,0.56)]">
                Simple process
              </p>
              <div className="space-y-4">
                {responseSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(181,89,65,0.12)] text-sm font-semibold text-rh-clay">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-rh-ink">{step}</p>
                      <p className="text-sm leading-[1.7] text-[rgba(43,43,43,0.7)]">
                        Keep the message short, specific, and easy to act on.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel className="p-6" id="contact">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[rgba(43,43,43,0.56)]">
                Contact
              </p>
              <h3 className="mb-3 text-[1.55rem] leading-[1.1] font-semibold tracking-[-0.03em] text-rh-ink">
                One direct support channel.
              </h3>
              <p className="mb-5 text-sm leading-[1.75] text-[rgba(43,43,43,0.76)]">
                Keep the support path consistent across the entire experience so
                users always know exactly where help lives.
              </p>
              <ButtonLink href="mailto:s3.gerlin@gmail.com" className="w-full">
                s3.gerlin@gmail.com
              </ButtonLink>
            </GlassPanel>
          </div>
        </div>
      </RevealSection>
    </SectionFrame>
  );
}
