import { supportMoments, supportPaths } from "../content/supportContent";
import { GlassPanel } from "./ui/GlassPanel";
import { RevealSection } from "./ui/RevealSection";
import { SectionFrame } from "./ui/SectionFrame";
import { SectionHeading } from "./ui/SectionHeading";

export function SupportPathsSection() {
  return (
    <SectionFrame id="support-overview">
      <RevealSection delay={60} className="flex w-full flex-col gap-6">
        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeading
            eyebrow="Overview"
            title="Support organized into a few clear entry points."
            description="Instead of making people scan a long page, the support experience is grouped into the main areas users ask about most."
          />

          <GlassPanel className="bg-[linear-gradient(135deg,rgba(228,224,212,0.94)_0%,rgba(251,247,243,0.96)_100%)] p-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[rgba(43,43,43,0.56)]">
              What this page covers
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {supportMoments.map((moment) => (
                <div
                  key={moment}
                  className="rounded-2xl border border-[rgba(43,43,43,0.08)] bg-[rgba(251,247,243,0.62)] px-4 py-3 text-sm leading-[1.65] text-[rgba(43,43,43,0.78)]"
                >
                  {moment}
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {supportPaths.map((path) => (
            <GlassPanel
              key={path.kicker}
              className="bg-[rgba(251,247,243,0.84)] p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[0.82rem] leading-none font-medium uppercase tracking-[0.18em] text-rh-ink">
                  {path.kicker}
                </p>
                <span className="rounded-full bg-[rgba(228,224,212,0.72)] px-3 py-1 text-xs font-medium text-rh-ink">
                  {path.metric}
                </span>
              </div>
              <h3 className="mb-3 text-[1.28rem] leading-[1.18] font-semibold tracking-[-0.03em] text-rh-ink">
                {path.title}
              </h3>
              <p className="text-sm leading-[1.75] text-[rgba(43,43,43,0.76)]">
                {path.description}
              </p>
            </GlassPanel>
          ))}
        </div>
      </RevealSection>
    </SectionFrame>
  );
}
