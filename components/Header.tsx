"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { services, siteConfig } from "@/data/siteConfig";
import { cx } from "@/lib/cx";

const navLink = "text-sm font-medium text-ink/80 transition-colors hover:text-navy";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { navigation, logo } = siteConfig;
  const servicesActive = pathname.startsWith("/services");

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="h-[3px] bg-navy" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <Link href="/" className="shrink-0" aria-label={logo.alt}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="eager"
            className="h-8 w-auto max-w-[148px] object-contain sm:max-w-[190px] md:h-10 md:max-w-none"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <Link
            href={navigation.about.href}
            className={cx(navLink, pathname === navigation.about.href && "text-navy")}
            aria-current={pathname === navigation.about.href ? "page" : undefined}
          >
            {navigation.about.label}
          </Link>

          <div
            className="relative"
            onBlur={(event) => {
              const next = event.relatedTarget;
              if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
                setServicesOpen(false);
              }
            }}
          >
            <button
              type="button"
              className={cx("inline-flex items-center gap-1", navLink, servicesActive && "text-navy")}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
            >
              {navigation.services.label}
              <ChevronDown
                className={cx("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                aria-hidden="true"
                strokeWidth={1.5}
              />
            </button>
            {servicesOpen ? (
              <div className="absolute left-0 top-full z-50 w-72 border border-line bg-white py-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="block px-4 py-2.5 hover:bg-paper"
                    aria-current={pathname === service.href ? "page" : undefined}
                  >
                    <span className="font-mono text-[10px] tracking-[0.16em] text-steel">{service.number}</span>
                    <span className="mt-0.5 block text-sm text-ink">{service.navLabel}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href={navigation.partners.href}
            className={cx(navLink, pathname === navigation.partners.href && "text-navy")}
            aria-current={pathname === navigation.partners.href ? "page" : undefined}
          >
            {navigation.partners.label}
          </Link>
          <Link
            href={navigation.contact.href}
            className={cx(navLink, pathname === navigation.contact.href && "text-navy")}
            aria-current={pathname === navigation.contact.href ? "page" : undefined}
          >
            {navigation.contact.label}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={navigation.cta.href}
            className="hidden rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-[#d97706] lg:inline-flex"
          >
            {navigation.cta.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={cx(
                  "absolute left-0 h-px w-5 bg-navy transition-transform duration-200",
                  mobileOpen ? "top-[6px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cx(
                  "absolute left-0 top-[6px] h-px w-5 bg-navy transition-opacity duration-200",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cx(
                  "absolute left-0 h-px w-5 bg-navy transition-transform duration-200",
                  mobileOpen ? "top-[6px] -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <div className="flex flex-col px-5 py-2">
            <Link href={navigation.about.href} className="border-b border-line py-3.5 text-base font-medium text-ink">
              {navigation.about.label}
            </Link>
            <button
              type="button"
              className="flex items-center justify-between border-b border-line py-3.5 text-base font-medium text-ink"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              {navigation.services.label}
              <ChevronDown
                className={cx("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                aria-hidden="true"
                strokeWidth={1.5}
              />
            </button>
            {servicesOpen ? (
              <div className="border-b border-line bg-paper">
                {services.map((service) => (
                  <Link key={service.slug} href={service.href} className="block px-2 py-3 text-sm text-ink">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-steel">{service.number}</span>{" "}
                    {service.navLabel}
                  </Link>
                ))}
              </div>
            ) : null}
            <Link href={navigation.partners.href} className="border-b border-line py-3.5 text-base font-medium text-ink">
              {navigation.partners.label}
            </Link>
            <Link href={navigation.contact.href} className="border-b border-line py-3.5 text-base font-medium text-ink">
              {navigation.contact.label}
            </Link>
            <Link
              href={navigation.cta.href}
              className="my-4 inline-flex items-center justify-center bg-accent px-4 py-3 text-sm font-semibold text-navy"
            >
              {navigation.cta.label}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
