'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Nav from '@/components/Nav';
import CoverScreen from '@/components/CoverScreen';
import HeroScreen from '@/components/HeroScreen';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Fade out Cover and scale down slightly as user scrolls down
  const coverOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const coverScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const coverY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);

  return (
    <main className="relative min-h-[200vh]" ref={containerRef}>
      <Nav />
      <motion.div 
        className="sticky top-0 h-screen w-full overflow-hidden origin-top z-10 bg-paper"
        style={{ opacity: coverOpacity, scale: coverScale, y: coverY }}
      >
        <CoverScreen />
      </motion.div>

      <div className="relative z-20 bg-paper shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-rule" style={{ marginTop: "-1px" }}>
        <HeroScreen />
      </div>
      
      {/* Footer / Composer bar as requested in the design */}
      <div className="max-w-[1200px] mx-auto px-11 pb-20 bg-paper relative z-20">
        <div className="mt-10 py-[18px] px-0 border-t border-dashed border-ink font-jetbrains text-[10.5px] text-muted tracking-[.1em] uppercase flex justify-between flex-wrap gap-3">
          <span>udith gunasekara · editorial direction · engineer handoff</span>
          <span>scroll transition active · hero section displayed</span>
        </div>
      </div>
    </main>
  );
}
