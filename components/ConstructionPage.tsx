import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Overline } from "@/components/Overline";
import { SiteImage } from "@/components/SiteImage";
import { constructionPage, getService } from "@/data/siteConfig";

export function ConstructionPage() {
  const service = getService("construction");

  return (
    <>
      <section className="relative min-h-[560px] bg-navy lg:min-h-[calc(100svh-4.5rem)]">
        <div className="absolute inset-0">
          <SiteImage src={service.hero.image} alt={service.hero.alt} sizes="100vw" priority overlay="side" />
        </div>
        <div className="relative z-10 flex min-h-[560px] items-end lg:min-h-[calc(100svh-4.5rem)]">
          <Container className="pb-16 pt-24 md:pb-24">
            <Overline onDark>{service.hero.overline}</Overline>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{service.hero.intro}</p>
          </Container>
        </div>
      </section>

      <section className="border-b border-line bg-white" aria-labelledby="construction-categories">
        <h2 id="construction-categories" className="sr-only">
          System categories
        </h2>
        <Container className="px-0 md:px-0">
          <ul className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {constructionPage.categories.map((item) => (
              <li key={item} className="bg-white px-5 py-6 md:px-8 md:py-8">
                <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-navy">{item}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Overline>{constructionPage.problem.overline}</Overline>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {constructionPage.problem.title}
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-steel lg:col-span-7 lg:pt-10">
            {constructionPage.problem.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <Overline>{constructionPage.pillars.overline}</Overline>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            {constructionPage.pillars.title}
          </h2>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {constructionPage.pillars.items.map((item, index) => (
              <FadeIn key={item.number} delay={index * 0.04}>
                <article className="h-full bg-white p-6 md:p-8">
                  <p className="font-mono text-[11px] tracking-[0.22em] text-navy">{item.number}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-steel">{item.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Overline>{constructionPage.method.overline}</Overline>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            {constructionPage.method.title}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {service.delivery.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.05}>
                <article className="border-t border-navy pt-6">
                  <p className="font-mono text-[11px] tracking-[0.22em] text-navy">{step.number}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{step.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <p className="mt-10 max-w-2xl border-t border-line pt-6 text-sm leading-relaxed text-steel">
            {constructionPage.method.note}
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
