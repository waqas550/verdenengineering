import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Overline } from "@/components/Overline";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="py-24 md:py-36">
        <Overline>{siteConfig.notFound.overline}</Overline>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
          {siteConfig.notFound.title}
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-steel">{siteConfig.notFound.body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">{siteConfig.notFound.home}</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            {siteConfig.notFound.contact}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
