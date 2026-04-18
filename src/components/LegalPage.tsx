import { GlassPanel } from "./ui/GlassPanel";
import { RevealSection } from "./ui/RevealSection";
import { SectionFrame } from "./ui/SectionFrame";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
  title: string;
};

export function LegalPage({
  effectiveDate,
  intro,
  sections,
  title,
}: LegalPageProps) {
  return (
    <SectionFrame id="top" className="pt-8 md:pt-12">
      <RevealSection delay={60} className="flex w-full flex-col gap-6">
        <GlassPanel className="bg-[rgba(251,247,243,0.84)] p-6 md:p-8">
          <p className="mb-3 text-[0.82rem] leading-none font-medium uppercase tracking-[0.18em] text-rh-ink">
            Rhodie legal
          </p>
          <h1 className="mb-4 text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-rh-ink">
            {title}
          </h1>
          <p className="mb-3 text-sm font-medium text-[rgba(43,43,43,0.72)]">
            Effective date: {effectiveDate}
          </p>
          <p className="max-w-[760px] text-base leading-[1.8] text-[rgba(43,43,43,0.78)]">
            {intro}
          </p>
        </GlassPanel>

        <div className="grid gap-4">
          {sections.map((section) => (
            <GlassPanel key={section.title} className="bg-[rgba(251,247,243,0.82)] p-6">
              <h2 className="mb-3 text-[1.2rem] leading-[1.2] font-semibold tracking-[-0.03em] text-rh-ink">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-[1.8] text-[rgba(43,43,43,0.78)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassPanel>
          ))}
        </div>
      </RevealSection>
    </SectionFrame>
  );
}
