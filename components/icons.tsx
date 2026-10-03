import {
  Activity,
  BarChart3,
  Building2,
  Cable,
  ClipboardCheck,
  Cog,
  Cpu,
  DraftingCompass,
  Eye,
  Factory,
  FileCheck,
  FlaskConical,
  Gauge,
  HardHat,
  LineChart,
  Network,
  PenTool,
  Scan,
  ShieldCheck,
  Sun,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/siteConfig";

const iconMap: Record<IconName, LucideIcon> = {
  Activity,
  BarChart3,
  Building2,
  Cable,
  ClipboardCheck,
  Cog,
  Cpu,
  DraftingCompass,
  Eye,
  Factory,
  FileCheck,
  FlaskConical,
  Gauge,
  HardHat,
  LineChart,
  Network,
  PenTool,
  Scan,
  ShieldCheck,
  Sun,
  Workflow,
  Wrench,
  Zap,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp className={className} aria-hidden="true" strokeWidth={1.5} />;
}
