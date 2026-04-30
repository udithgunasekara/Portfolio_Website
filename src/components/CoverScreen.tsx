"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CoverScreen({ onDone }: { onDone: () => void }) {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  const controls = useAnimationControls();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let exiting = false;
    let timerId: ReturnType<typeof setTimeout>;

    const exit = async () => {
      if (exiting) return;
      exiting = true;
      clearTimeout(timerId);
      document.body.style.overflow = "";

      if (!reduce) {
        await controls.start({
          y: "-100%",
          transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
        });
      }
      onDone();
    };

    timerId = setTimeout(exit, 5000);
    window.addEventListener("wheel", exit, { passive: true });
    window.addEventListener("touchmove", exit, { passive: true });

    return () => {
      clearTimeout(timerId);
      document.body.style.overflow = "";
      window.removeEventListener("wheel", exit);
      window.removeEventListener("touchmove", exit);
    };
  }, [controls, onDone, reduce]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: "40%" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const },
    },
  };

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0 }}
      className="fixed inset-0 z-50 bg-paper overflow-hidden"
    >
      <div className="w-full min-h-screen flex flex-col pt-8 sm:pt-12 px-5 sm:px-11 pb-12 sm:pb-20 max-w-[1200px] mx-auto relative">
        <div className="border-y border-ink py-3 sm:py-5 flex justify-between">
          <span className="font-jetbrains text-[11px] tracking-[.16em] uppercase">
            Issue №04 — Engineer &amp; Designer
          </span>
          <span className="font-jetbrains text-[11px] tracking-[.16em] uppercase">
            Spring / 2026
          </span>
        </div>

        <div className="mt-6 sm:mt-10 relative text-center">
          <div className="font-jetbrains text-[11px] text-muted tracking-[.22em] uppercase">
            — The portfolio of —
          </div>

          {mounted && !reduce ? (
            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="font-playfair text-[clamp(44px,11vw,156px)] font-black my-3 leading-[0.88] tracking-[-0.03em]"
            >
              <motion.span variants={item} className="inline-block">
                Udith
              </motion.span>
              <br />
              <motion.em variants={item} className="font-normal italic inline-block">
                Gunasekara
              </motion.em>
            </motion.h1>
          ) : (
            <h1 className="font-playfair text-[clamp(44px,11vw,156px)] font-black my-3 leading-[0.88] tracking-[-0.03em]">
              <span className="inline-block">Udith</span>
              <br />
              <em className="font-normal italic inline-block">Gunasekara</em>
            </h1>
          )}

          <div className="font-jetbrains text-[12px] tracking-[.3em] uppercase mt-2">
            Engineer · Designer · Researcher
          </div>

          <span className="absolute top-[18px] left-10 font-[cursive] text-[19px] text-accent leading-none -rotate-3 pointer-events-none hidden md:block">
            Playfair Display, 156px ↘
          </span>
          <span className="absolute -bottom-3 right-10 font-[cursive] text-[19px] text-accent leading-none rotate-6 pointer-events-none hidden md:block">
            italic for softness
          </span>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 border-t border-ink pt-5 sm:pt-7">
          <div className="md:col-span-1">
            <div className="font-jetbrains text-[10px] tracking-[.14em] uppercase text-muted">
              Feature
            </div>
            <div className="font-bold text-[16px] mt-2 leading-[1.35]">
              &ldquo;Making a better world, one commit at a time.&rdquo;
            </div>
            <div className="font-jetbrains text-[10px] text-muted mt-2.5">— pg. 12</div>
          </div>

          <div className="md:col-span-2">
            <p
              className="m-0 text-[15px] leading-[1.7] md:columns-2 gap-7"
              style={{ columnRule: "1px solid var(--rule)" }}
            >
              <span className="font-playfair font-black text-[36px] sm:text-[54px] float-left leading-[0.9] mr-2.5 mt-1">
                I
              </span>
              sit between engineering and design — shipping full-stack products at eChannelling,
              researching context engineering for LLMs, and designing the things I build. Java, React,
              Flutter, Python. I think in components. I ship in commits.
            </p>
          </div>

          <div className="md:col-span-1 md:border-l border-rule md:pl-5">
            <div className="font-jetbrains text-[10px] tracking-[.14em] uppercase text-muted">
              Inside
            </div>
            <ol className="font-jetbrains text-[11px] pl-4 leading-[2] list-decimal mt-1">
              <li>Selected Work — 3 pieces</li>
              <li>Notes from MCP research</li>
              <li>On writing Spring microservices</li>
              <li>Talking to Udith · Q&amp;A</li>
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
