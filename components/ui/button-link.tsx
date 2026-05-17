"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
};

const styles = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_rgba(91,79,214,0.35)] hover:bg-brand-dark hover:shadow-[0_12px_32px_rgba(91,79,214,0.45)]",
  secondary:
    "bg-sunshine text-ink shadow-[0_8px_20px_rgba(255,217,61,0.40)] hover:bg-sunshine-dark",
  ghost:
    "bg-white text-ink shadow-card hover:bg-lavender",
  outline:
    "bg-transparent text-ink ring-2 ring-ink/20 hover:bg-white/60",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold tracking-tight transition-colors duration-200 ${styles[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
