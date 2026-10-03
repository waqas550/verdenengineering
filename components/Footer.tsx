import Link from "next/link";
import { partners, services, siteConfig } from "@/data/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-mist">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-white">{siteConfig.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/80">{siteConfig.footer.blurb}</p>
          <nav aria-label="Footer" className="mt-6 flex flex-col gap-2">
            <Link href={siteConfig.navigation.about.href} className="text-sm text-mist hover:text-white">
              {siteConfig.navigation.about.label}
            </Link>
            <Link href={siteConfig.navigation.partners.href} className="text-sm text-mist hover:text-white">
              {siteConfig.navigation.partners.label}
            </Link>
            <Link href={siteConfig.navigation.contact.href} className="text-sm text-mist hover:text-white">
              {siteConfig.navigation.contact.label}
            </Link>
          </nav>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{siteConfig.footer.servicesTitle}</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="text-sm text-mist hover:text-white">
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{siteConfig.footer.contactTitle}</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.address}</li>
            <li className="pt-2 text-mist/70">{siteConfig.contact.registration}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-4 px-5 py-6 text-sm text-mist/80 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {siteConfig.footer.partnerLine}{" "}
            {partners.map((partner, index) => (
              <span key={partner.key}>
                {index > 0 ? " · " : null}
                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                  {partner.name}
                </a>{" "}
                <span className="text-mist/60">({partner.countryCode})</span>
              </span>
            ))}
          </p>
          <nav aria-label="Legal" className="flex gap-5">
            {siteConfig.legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <p>© {year} {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
