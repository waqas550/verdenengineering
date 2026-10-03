import { RefineriesPage } from "@/components/RefineriesPage";
import { getService } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

const service = getService("refineries");

export const metadata = pageMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function Page() {
  return <RefineriesPage />;
}
