import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, type Partner } from "@/data/siteConfig";

export function PartnerLockup({
  partner,
  onDark = false,
  mode = "summary",
}: {
  partner: Partner;
  onDark?: boolean;
  mode?: "summary" | "profile";
}) {
  const muted = onDark ? "text-mist" : "text-steel";
  const body = onDark ? "text-mist" : "text-ink";
  const heading = onDark ? "text-white" : "text-navy";

  return (
    <article className={onDark ? "border border-white/15 p-6 md:p-8" : "border border-line bg-white p-6 md:p-8"}>
      <div className="bg-white">
        <Image
          src={partner.logo.src}
          alt={partner.logo.alt}
          width={partner.logo.width}
          height={partner.logo.height}
          className="h-auto w-full max-w-sm border border-line object-contain"
        />
      </div>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        {partner.countryCode} — {partner.country}
      </p>
      {mode === "profile" ? (
        <h2 className={`mt-3 font-display text-3xl font-semibold tracking-tight ${heading}`}>{partner.name}</h2>
      ) : (
        <h3 className={`mt-3 font-display text-2xl font-semibold tracking-tight ${heading}`}>{partner.name}</h3>
      )}
      <p className={`mt-2 text-sm ${muted}`}>{partner.brings}</p>
      {mode === "profile" ? (
        <div className={`mt-4 space-y-4 text-sm leading-relaxed ${body}`}>
          {partner.positioning.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p className={`mt-4 text-sm leading-relaxed ${body}`}>{partner.description}</p>
      )}
      <h3 className={`mt-6 font-display text-base font-semibold ${heading}`}>
        {mode === "profile" ? siteConfig.partnersPage.deliversLabel : "What this means for your project"}
      </h3>
      <ul className={`mt-4 space-y-3 text-sm leading-relaxed ${body}`}>
        {(mode === "profile" ? partner.delivers : partner.bullets).map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {mode === "profile" && partner.categories ? (
        <div className="mt-6">
          <h3 className={`font-display text-base font-semibold ${heading}`}>{siteConfig.partnersPage.categoriesLabel}</h3>
          <ul className={`mt-4 grid gap-2 text-sm leading-relaxed sm:grid-cols-2 ${body}`}>
            {partner.categories.map((category) => (
              <li key={category} className="flex gap-3">
                <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${onDark ? "text-accent" : "text-navy"}`}
      >
        Visit partner website
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
      </a>
    </article>
  );
}
