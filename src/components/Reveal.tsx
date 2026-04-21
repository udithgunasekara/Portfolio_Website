"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: 1 | 2 | 3;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "className" | "initial" | "whileInView" | "viewport" | "transition">;

const delayMap = { 1: 0.1, 2: 0.2, 3: 0.3 } as const;

export default function Reveal({ children, delay, className, ...rest }: Props) {
  const reduce = useReducedMotion();
  const d = delay ? delayMap[delay] : 0;

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: d }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
