import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Overline } from "@/components/Overline";
import { siteConfig } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: siteConfig.contactPage.metaTitle,
  description: siteConfig.contactPage.metaDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <header className="bg-navy">
        <Container className="py-16 md:py-24">
          <Overline onDark>{siteConfig.contactPage.overline}</Overline>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            {siteConfig.contactPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{siteConfig.contactPage.intro}</p>
        </Container>
      </header>
      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactDetails />
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
