import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/siteConfig";

export function CtaBand({
  title = siteConfig.cta.title,
  label = siteConfig.cta.label,
  href = siteConfig.cta.href,
}: {
  title?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="bg-navy">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <ButtonLink href={href}>{label}</ButtonLink>
      </Container>
    </section>
  );
}
