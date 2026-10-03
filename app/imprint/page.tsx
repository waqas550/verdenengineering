import { LegalDocument } from "@/components/LegalDocument";
import { imprint } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: imprint.metaTitle,
  description: imprint.metaDescription,
  path: "/imprint",
});

export default function ImprintPage() {
  return (
    <LegalDocument
      overline={imprint.overline}
      title={imprint.title}
      notice={imprint.notice}
      sections={imprint.sections}
    />
  );
}
