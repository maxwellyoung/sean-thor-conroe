"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionPatternProps
  extends Omit<HTMLMotionProps<"section">, "children"> {
  children: React.ReactNode;
  variant?: "default" | "muted";
}

export function SectionPattern({
  children,
  className,
  variant = "default",
  ...props
}: SectionPatternProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden py-12 md:py-24",
        variant === "muted" && "bg-muted/40",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-primary/[0.05] bg-[size:24px_24px] dark:bg-grid-white/[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/90" />
      </div>
      <div className="container relative">{children}</div>
    </motion.section>
  );
}
