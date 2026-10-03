import { LegalDocument } from "@/components/LegalDocument";
import { privacy } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: privacy.metaTitle,
  description: privacy.metaDescription,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      overline={privacy.overline}
      title={privacy.title}
      notice={privacy.notice}
      sections={privacy.sections}
    />
  );
}
