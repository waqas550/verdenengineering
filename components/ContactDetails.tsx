import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function ContactDetails() {
  const rows = [
    { icon: Mail, label: "Email", value: siteConfig.contact.email },
    { icon: Phone, label: "Phone", value: siteConfig.contact.phone },
    { icon: MapPin, label: "Address", value: siteConfig.contact.address },
  ];

  return (
    <dl className="space-y-6">
      {rows.map((row) => (
        <div key={row.label} className="flex gap-4">
          <dt className="sr-only">{row.label}</dt>
          <row.icon className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" strokeWidth={1.5} />
          <dd>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">{row.label}</p>
            <p className="mt-1 text-base text-ink">{row.value}</p>
          </dd>
        </div>
      ))}
      <div className="border-t border-line pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">Registration</p>
        <p className="mt-1 text-base text-ink">{siteConfig.contact.registration}</p>
      </div>
    </dl>
  );
}
