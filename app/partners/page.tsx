import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Overline } from "@/components/Overline";
import { PartnerLockup } from "@/components/PartnerLockup";
import { partners, siteConfig } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: siteConfig.partnersPage.metaTitle,
  description: siteConfig.partnersPage.metaDescription,
  path: "/partners",
  absolute: true,
});

export default function PartnersPage() {
  return (
    <>
      <header className="bg-navy">
        <Container className="py-16 md:py-24">
          <Overline onDark>{siteConfig.partnersPage.overline}</Overline>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            {siteConfig.partnersPage.title}
          </h1>
          <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-mist md:text-lg">
            {siteConfig.partnersPage.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </header>
      <section className="border-b border-line bg-white py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            {siteConfig.partnersPage.stepsTitle}
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {siteConfig.partnersPage.steps.map((step) => (
              <li key={step.number} className="border-t border-navy pt-6">
                <p className="font-mono text-[11px] tracking-[0.22em] text-navy">{step.number}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="bg-paper py-20 md:py-28">
        <Container className="grid gap-8">
          {partners.map((partner) => (
            <PartnerLockup key={partner.key} partner={partner} mode="profile" />
          ))}
        </Container>
      </section>
      <CtaBand title={siteConfig.partnersPage.ctaTitle} />
    </>
  );
}
