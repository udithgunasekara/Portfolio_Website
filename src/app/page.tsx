"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Nav from "@/components/Nav";
import CoverScreen from "@/components/CoverScreen";
import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import PullQuote from "@/components/PullQuote";
import Stack from "@/components/Stack";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const coverRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: coverRef,
    offset: ["start start", "end start"],
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);
  const rawY = useTransform(scrollYProgress, [0, 0.7], ["0%", "-10%"]);

  const coverOpacity = reduce ? 1 : rawOpacity;
  const coverScale = reduce ? 1 : rawScale;
  const coverY = reduce ? "0%" : rawY;

  return (
    <>
      <Nav />

      {/* Cover intro: sticky, scroll-fade into the page */}
      <div ref={coverRef} className="relative h-[180vh]" id="top">
        <motion.div
          className="sticky top-0 h-screen w-full overflow-hidden origin-top z-10 bg-paper"
          style={{ opacity: coverOpacity, scale: coverScale, y: coverY }}
        >
          <CoverScreen />
        </motion.div>
      </div>

      <main className="relative z-20 bg-paper">
        <Masthead />
        <Hero />
        <Marquee />
        <About />
        <Work />
        <PullQuote />
        <Stack />
        <Writing />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
