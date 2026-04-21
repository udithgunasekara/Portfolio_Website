'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HeroScreen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: "40%" },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } }
  };

  return (
    <section 
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center px-11 py-20 max-w-[1200px] mx-auto bg-paper text-ink relative"
    >
      <div ref={ref} className="mt-7 border-t border-ink pt-5 grid grid-cols-1 md:grid-cols-5 items-end">
        <div className="hidden md:block col-span-1 font-jetbrains text-[11px] text-muted tracking-[.16em] uppercase">
          № 01 · Introduction
        </div>
        
        <div className="col-span-1 md:col-span-3 text-center">
          {isInView && (
            <motion.h1 
              variants={container}
              initial="hidden"
              animate="show"
              className="font-playfair text-[clamp(60px,10vw,144px)] m-0 leading-[0.88] font-black tracking-[-0.03em]"
            >
              <motion.span variants={item} className="inline-block">Hi, I’m</motion.span><br/>
              <motion.em variants={item} className="font-normal italic inline-block">Udith.</motion.em>
            </motion.h1>
          )}
        </div>
        
        <div className="hidden md:block col-span-1 font-jetbrains text-[11px] text-muted text-right tracking-[.16em] uppercase">
          2026 · Vol. I
        </div>
      </div>

      <div className="text-center mt-7">
        <div className="font-jetbrains text-[12px] tracking-[.3em] uppercase">
          Software Engineer <span className="text-accent">·</span> Designer <span className="text-accent">·</span> Researcher
        </div>
        
        <div className="my-6 inline-flex gap-3 flex-wrap justify-center">
          <button className="border border-ink bg-ink text-paper px-4 py-2.5 font-jetbrains text-[11px] tracking-[.14em] uppercase hover:bg-ink-2 transition-colors">
            See selected work →
          </button>
          <button className="border border-ink bg-transparent text-ink px-4 py-2.5 font-jetbrains text-[11px] tracking-[.14em] uppercase hover:bg-ink hover:text-paper transition-colors">
            Download CV ↓
          </button>
        </div>
      </div>

      <div className="border-t border-ink mt-9 py-4 grid grid-cols-2 md:grid-cols-4 gap-5">
        <Stat label="Status" val={<><span className="blink animate-pulse text-accent">●</span> Shipping @ eChannelling</>} />
        <Stat label="Focus" val="Full-stack · LLM research" />
        <Stat label="Based" val="Remote-first · Global" />
        <Stat label="Next" val="Available Q3 2026" />
      </div>
      
      <span className="absolute top-[180px] left-[60px] font-[Caveat,cursive] text-[19px] text-accent leading-none -rotate-3 pointer-events-none hidden lg:block">
        center-aligned, generous gutters ↴
      </span>
    </section>
  );
}

function Stat({ label, val }: { label: string, val: React.ReactNode }) {
  return (
    <div>
      <div className="font-jetbrains text-[10px] text-muted tracking-[.16em] uppercase">{label}</div>
      <div className="font-jetbrains text-[12px] mt-1.5">{val}</div>
    </div>
  );
}
