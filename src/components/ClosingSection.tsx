import { ButtonLink } from "./ui/ButtonLink";
import { GlassPanel } from "./ui/GlassPanel";
import { RevealSection } from "./ui/RevealSection";
import { SectionFrame } from "./ui/SectionFrame";

const closingNotes = [
  "Users should know within a few seconds where support lives.",
  "The visual language stays calm and premium without feeling cold.",
  "Every section is responsive and sized to own the full display on scroll.",
];

export function ClosingSection() {
  return (
    <SectionFrame>
      <RevealSection delay={160} className="flex w-full flex-col justify-center">
        <GlassPanel className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(228,224,212,0.96)_0%,rgba(251,247,243,0.98)_100%)] p-6 md:p-8">
          <div className="absolute -right-12 -bottom-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(181,89,65,0.18),transparent_70%)]" />

          <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="mb-3 text-[0.82rem] leading-none font-medium uppercase tracking-[0.18em] text-rh-ink">
                Final contact
              </p>
              <h2 className="mb-4 text-[clamp(2rem,4vw,3.3rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-rh-ink">
                Need direct help?
              </h2>
              <p className="max-w-[640px] text-base leading-[1.8] text-[rgba(43,43,43,0.76)]">
                Email support with a short description of the issue, your
                device, and any screenshot that helps explain the problem.
              </p>
            </div>

            <div className="grid gap-4">
              {closingNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-[rgba(43,43,43,0.08)] bg-[rgba(251,247,243,0.68)] px-4 py-4 text-sm leading-[1.7] text-[rgba(43,43,43,0.8)]"
                >
                  {note}
                </div>
              ))}
              <ButtonLink href="mailto:s3.gerlin@gmail.com" className="w-full">
                Contact Rhodie support
              </ButtonLink>
            </div>
          </div>
        </GlassPanel>
      </RevealSection>
    </SectionFrame>
  );
}
