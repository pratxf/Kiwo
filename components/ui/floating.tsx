"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FloatingProps = {
  children: ReactNode;
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
};

export function Floating({
  children,
  delay = 0,
  distance = 12,
  duration = 4.8,
  className,
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
