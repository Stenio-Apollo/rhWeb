import backgroundImage from "../assets/rh2.png";
import { ButtonLink } from "./ui/ButtonLink";
import { GlassPanel } from "./ui/GlassPanel";
import { RevealSection } from "./ui/RevealSection";
import { SectionFrame } from "./ui/SectionFrame";

const trustPoints = [
  "Journal and gratitude help",
  "Insight and planner support",
  "Clear FAQ answers",
];

export function HeroSection() {
  return (
    <SectionFrame
      id="top"
      className="overflow-hidden pt-8 md:pt-12"
    >
      <div
        className="absolute inset-0 rounded-[36px] bg-cover bg-[center_34%] bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(43, 43, 43, 0.28) 0%, rgba(43, 43, 43, 0.56) 100%), url(${backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 rounded-[36px] bg-[linear-gradient(90deg,rgba(43,43,43,0.12),transparent_40%),radial-gradient(circle_at_top_left,rgba(251,247,243,0.14),transparent_26%)]" />

      <div className="relative z-10 flex min-h-[72svh] items-end px-4 py-8 md:min-h-[78svh] md:px-8 md:py-10">
        <RevealSection
          delay={80}
          className="mt-3 w-full max-w-[540px] self-start md:mt-1 mb-70"
        >
          <GlassPanel className="border-[rgba(251,247,243,0.22)] bg-[rgba(251,247,243,0.56)] p-5 md:px-7 md:py-6">
            <p className="text-[0.82rem] leading-none font-medium uppercase tracking-[0.18em] text-rh-ink">
              Men&apos;s mental health support
            </p>
            <h1 className="mb-4 text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.94] font-semibold tracking-[-0.05em] text-rh-ink">
              Clean support, easier to follow.
            </h1>
            <p className="mb-6 max-w-[480px] text-[1rem] leading-[1.75] text-[rgba(43,43,43,0.78)]">
              Rhodie supports journaling, gratitude, insights, and planning.
              This page gives users a direct path to answers, support, and
              contact without extra noise.
            </p>

            <div className="mb-6 flex flex-wrap gap-3 max-md:flex-col">
              <ButtonLink href="mailto:s3.gerlin@gmail.com" className="max-md:w-full">
                Email support
              </ButtonLink>
              <ButtonLink
                href="#support-overview"
                variant="secondary"
                className="max-md:w-full"
              >
                View support sections
              </ButtonLink>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[rgba(43,43,43,0.1)] bg-[rgba(228,224,212,0.72)] px-4 py-2.5 text-sm font-medium text-rh-ink"
                >
                  {point}
                </div>
              ))}
            </div>
          </GlassPanel>
        </RevealSection>
      </div>
    </SectionFrame>
  );
}
