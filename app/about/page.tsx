import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Overline } from "@/components/Overline";
import { PartnerLockup } from "@/components/PartnerLockup";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SiteImage } from "@/components/SiteImage";
import { partners, processSteps, siteConfig } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: siteConfig.aboutPage.metaTitle,
  description: siteConfig.aboutPage.metaDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <header className="bg-navy">
        <Container className="py-16 md:py-24">
          <Overline onDark>{siteConfig.aboutPage.overline}</Overline>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            {siteConfig.aboutPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{siteConfig.aboutPage.intro}</p>
        </Container>
      </header>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-base leading-relaxed text-steel">
            {siteConfig.aboutPage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link href="/partners" className="inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-navy">
              European partnerships
              <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
            </Link>
          </div>
          <div>
            <SiteImage
              src={siteConfig.aboutPreview.image}
              alt={siteConfig.aboutPreview.imageAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3]"
            />
            <p className="mt-3 text-xs leading-relaxed text-steel">{siteConfig.aboutPreview.imageCaption}</p>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Overline>OUR APPROACH</Overline>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">How the work is framed</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteConfig.aboutPage.principles.map((principle) => (
              <article key={principle.number} className="border-t border-navy pt-6">
                <p className="font-mono text-[11px] tracking-[0.22em] text-navy">{principle.number}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{principle.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <ProcessSteps
            overline={siteConfig.processIntro.overline}
            title={siteConfig.processIntro.title}
            intro={siteConfig.processIntro.intro}
            steps={processSteps}
          />
        </Container>
      </section>

      <section className="bg-navy py-20 md:py-28">
        <Container>
          <Overline onDark>PARTNERSHIPS</Overline>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-white">
            The two partnerships behind the practice
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {partners.map((partner) => (
              <PartnerLockup key={partner.key} partner={partner} onDark />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
