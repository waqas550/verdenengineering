import { Container } from "@/components/Container";
import { Overline } from "@/components/Overline";
import type { LegalSection } from "@/data/siteConfig";

export function LegalDocument({
  overline,
  title,
  notice,
  sections,
}: {
  overline: string;
  title: string;
  notice: string;
  sections: LegalSection[];
}) {
  return (
    <article>
      <header className="bg-navy">
        <Container className="py-16 md:py-20">
          <Overline onDark>{overline}</Overline>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
        </Container>
      </header>
      <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-ink">{notice}</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-navy">{section.heading}</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
                {section.blocks.map((block, index) =>
                  block.type === "p" ? (
                    <p key={`${section.heading}-${index}`}>{block.text}</p>
                  ) : (
                    <ul key={`${section.heading}-${index}`} className="list-disc space-y-2 pl-5">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
