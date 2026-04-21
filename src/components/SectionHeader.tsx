"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  left: string;
  title: string;
  right: ReactNode;
  rightId?: string;
};

const transition = { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as const };

export default function SectionHeader({ left, title, right, rightId }: Props) {
  const reduce = useReducedMotion();
  const viewport = { once: true, margin: "-60px" };

  if (reduce) {
    return (
      <div className="sh">
        <div className="l">{left}</div>
        <h2>{title}</h2>
        <div className="r">
          <span id={rightId}>{right}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="sh">
      <motion.div
        className="l"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={transition}
      >
        {left}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ ...transition, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="r"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ ...transition, delay: 0.2 }}
      >
        <span id={rightId}>{right}</span>
      </motion.div>
    </div>
  );
}
