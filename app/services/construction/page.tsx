import { ConstructionPage } from "@/components/ConstructionPage";
import { getService } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

const service = getService("construction");

export const metadata = pageMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function Page() {
  return <ConstructionPage />;
}
