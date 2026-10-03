"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function HoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
