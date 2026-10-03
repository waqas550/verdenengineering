import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export function Overline({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "font-mono text-[11px] font-medium uppercase tracking-[0.22em]",
        onDark ? "text-accent" : "text-navy",
        className,
      )}
    >
      {children}
    </p>
  );
}
