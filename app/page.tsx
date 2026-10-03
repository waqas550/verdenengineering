import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { HoverCard } from "@/components/HoverCard";
import { Icon } from "@/components/icons";
import { Overline } from "@/components/Overline";
import { PartnerLockup } from "@/components/PartnerLockup";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SiteImage } from "@/components/SiteImage";
import {
  industries,
  partners,
  processSteps,
  services,
  siteConfig,
} from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[560px] bg-navy lg:min-h-[calc(100svh-4.5rem)]">
        <div className="absolute inset-0">
          <SiteImage
            src={siteConfig.hero.image}
            alt={siteConfig.hero.imageAlt}
            sizes="100vw"
            priority
            fetchPriority="high"
            overlay="side"
          />
        </div>
        <div className="relative z-10 flex min-h-[560px] items-end lg:min-h-[calc(100svh-4.5rem)]">
          <Container className="pb-16 pt-20 md:pb-24">
            <Overline onDark>{siteConfig.hero.overline}</Overline>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteConfig.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
              {siteConfig.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</ButtonLink>
              <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="outline-light">
                {siteConfig.hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </Container>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
          <div className="max-w-xs">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">{siteConfig.trust.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink">{siteConfig.trust.lead}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {partners.map((partner) => (
              <a
                key={partner.key}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-line bg-white transition-colors hover:border-accent"
              >
                <Image
                  src={partner.logo.src}
                  alt={`${partner.name}, ${partner.country}. ${partner.logo.alt}`}
                  width={partner.logo.width}
                  height={partner.logo.height}
                  className="h-16 w-auto max-w-[220px] object-contain sm:h-20"
                />
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="scroll-mt-24 bg-paper py-20 md:py-28">
        <Container>
          <Overline>SERVICES</Overline>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Four fields of engineering work
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <HoverCard className="h-full">
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col border border-line bg-white p-6 transition-colors duration-200 hover:border-accent md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-navy">
                        {service.number} — {service.label}
                      </p>
                      <Icon name={service.icon} className="h-5 w-5 text-navy" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{service.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                    </span>
                  </Link>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SiteImage
              src={siteConfig.aboutPreview.image}
              alt={siteConfig.aboutPreview.imageAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/5] min-h-[320px]"
            />
            <p className="mt-3 text-xs leading-relaxed text-steel">{siteConfig.aboutPreview.imageCaption}</p>
          </div>
          <FadeIn>
            <Overline>{siteConfig.aboutPreview.overline}</Overline>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {siteConfig.aboutPreview.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-steel">
              {siteConfig.aboutPreview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={siteConfig.aboutPreview.link.href}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy"
            >
              {siteConfig.aboutPreview.link.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
            </Link>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-navy py-20 md:py-28">
        <Container>
          <Overline onDark>PARTNERSHIPS</Overline>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            European partnerships, local execution.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {partners.map((partner) => (
              <PartnerLockup key={partner.key} partner={partner} onDark />
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

      <section className="border-y border-line bg-paper py-16 md:py-20">
        <Container>
          <Overline>{siteConfig.industriesIntro.overline}</Overline>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy">
            {siteConfig.industriesIntro.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">{siteConfig.industriesIntro.intro}</p>
          <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <li key={industry.title} className="flex items-start gap-3 bg-paper p-5">
                <Icon name={industry.icon} className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                <span className="text-sm font-medium text-ink">{industry.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Overline>{siteConfig.homeContact.overline}</Overline>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {siteConfig.homeContact.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-steel">{siteConfig.homeContact.intro}</p>
            <div className="mt-10">
              <ContactDetails />
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
