import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { HoverCard } from "@/components/HoverCard";
import { Icon } from "@/components/icons";
import { Overline } from "@/components/Overline";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SiteImage } from "@/components/SiteImage";
import { getPartner, type Service } from "@/data/siteConfig";

export function ServicePage({ service }: { service: Service }) {
  const partner = service.partnerKey ? getPartner(service.partnerKey) : null;

  return (
    <>
      <section className="relative min-h-[460px] bg-navy md:min-h-[540px]">
        <div className="absolute inset-0">
          <SiteImage src={service.hero.image} alt={service.hero.alt} sizes="100vw" priority overlay="side" />
        </div>
        <div className="relative z-10 flex min-h-[460px] items-end md:min-h-[540px]">
          <Container className="pb-12 pt-24 md:pb-16">
            <Overline onDark>{service.hero.overline}</Overline>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              {service.hero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{service.hero.intro}</p>
          </Container>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <Overline>WHAT WE DO</Overline>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            {service.title}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {service.capabilities.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <HoverCard className="h-full">
                  <article className="h-full border border-line p-6 transition-colors duration-200 hover:border-accent">
                    <Icon name={item.icon} className="h-5 w-5 text-navy" />
                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{item.body}</p>
                  </article>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {service.secondaryImage ? (
        <SiteImage
          src={service.secondaryImage.src}
          alt={service.secondaryImage.alt}
          sizes="100vw"
          className="h-64 md:h-96"
        />
      ) : null}

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <ProcessSteps overline="HOW WE DELIVER" title="From the first question to handover" steps={service.delivery} />
        </Container>
      </section>

      {partner ? (
        <section className="bg-white py-20 md:py-28">
          <Container>
            <Overline>PARTNERSHIP</Overline>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              What {partner.name} adds to this work
            </h2>
            <article className="mt-10 max-w-3xl border border-line bg-white p-6 md:p-8">
              <Image
                src={partner.logo.src}
                alt={partner.logo.alt}
                width={partner.logo.width}
                height={partner.logo.height}
                className="h-auto w-full max-w-sm border border-line object-contain"
              />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {partner.countryCode} — {partner.country}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-navy">{partner.name}</h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink">
                {partner.serviceParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {partner.categories ? (
                <div className="mt-6">
                  <h3 className="font-display text-base font-semibold text-navy">
                    The categories we can bring into a construction brief
                  </h3>
                  <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-ink sm:grid-cols-2">
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
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy"
              >
                Visit partner website
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
              </a>
            </article>
          </Container>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
