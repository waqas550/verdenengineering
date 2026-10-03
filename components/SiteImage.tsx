import Image from "next/image";
import { cx } from "@/lib/cx";

type SiteImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
  /** "side" darkens the left edge behind headline text and fades toward the photo. */
  overlay?: boolean | "side";
};

export function SiteImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
  fetchPriority,
  overlay = true,
}: SiteImageProps) {
  return (
    <div className={cx("relative h-full w-full overflow-hidden bg-navy", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        fetchPriority={fetchPriority}
        className="object-cover"
      />
      {overlay === "side" ? (
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#0B1F3A_0%,rgba(11,31,58,0.96)_42%,rgba(11,31,58,0.84)_68%,rgba(11,31,58,0.42)_88%,rgba(11,31,58,0.18)_100%)]"
          aria-hidden="true"
        />
      ) : null}
      {overlay === true ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/45 to-navy/30"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
