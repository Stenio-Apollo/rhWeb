type SectionHeadingProps = {
  description?: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-[760px]">
      <p className="mb-3 text-[0.82rem] leading-none font-medium uppercase tracking-[0.18em] text-rh-ink">
        {eyebrow}
      </p>
      <h2 className="mb-3.5 text-[clamp(2rem,4vw,3.3rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-rh-ink">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[680px] text-base leading-[1.75] text-[rgba(43,43,43,0.76)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
