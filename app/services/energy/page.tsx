import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

const service = getService("energy");

export const metadata = pageMeta({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function EnergyPage() {
  return <ServicePage service={service} />;
}
