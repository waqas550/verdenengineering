import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "accent" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-navy hover:bg-[#d97706]",
  outline: "border border-navy/30 text-navy hover:border-navy",
  "outline-light": "border border-white/70 text-white hover:bg-white hover:text-navy",
};

export function ButtonLink({
  href,
  children,
  variant = "accent",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
