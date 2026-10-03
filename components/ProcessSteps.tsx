import { FadeIn } from "@/components/FadeIn";
import { Icon } from "@/components/icons";
import { Overline } from "@/components/Overline";
import type { ProcessStep } from "@/data/siteConfig";

export function ProcessSteps({
  overline,
  title,
  intro,
  steps,
  onDark = false,
}: {
  overline?: string;
  title: string;
  intro?: string;
  steps: ProcessStep[];
  onDark?: boolean;
}) {
  return (
    <div>
      {overline ? <Overline onDark={onDark}>{overline}</Overline> : null}
      <h2
        className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${overline ? "mt-4" : ""} ${onDark ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed ${onDark ? "text-mist" : "text-steel"}`}>
          {intro}
        </p>
      ) : null}
      <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((step, index) => (
          <FadeIn key={step.number} delay={index * 0.05}>
            <article className={`border-t pt-6 ${onDark ? "border-white/15" : "border-line"}`}>
              <p
                className={`font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${onDark ? "text-accent" : "text-navy"}`}
              >
                {step.number}
              </p>
              <Icon name={step.icon} className={`mt-5 h-5 w-5 ${onDark ? "text-accent" : "text-navy"}`} />
              <h3 className={`mt-4 font-display text-lg font-semibold tracking-tight ${onDark ? "text-white" : "text-ink"}`}>
                {step.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${onDark ? "text-mist" : "text-steel"}`}>{step.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
