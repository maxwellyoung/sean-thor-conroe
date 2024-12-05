"use client";

import { motion } from "framer-motion";

export function PatternBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-primary/[0.05] bg-[size:24px_24px] dark:bg-grid-white/[0.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
    </div>
  );
}
