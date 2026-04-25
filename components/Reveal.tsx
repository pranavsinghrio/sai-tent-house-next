"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "zoom";

const variants: Record<Dir, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
};

export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[dir]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
