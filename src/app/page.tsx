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

  // Progress 0 when cover top aligns with viewport top;
  // progress 1 when cover bottom aligns with viewport top (i.e. cover fully scrolled past).
  const { scrollYProgress } = useScroll({
    target: coverRef,
    offset: ["start start", "end start"],
  });

  // Extra parallax lift so the cover feels like it's being pulled up slightly faster
  // than the page scroll, revealing the Home page underneath.
  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const coverY = reduce ? "0%" : rawY;
  const coverOpacity = reduce ? 1 : rawOpacity;

  return (
    <>
      <Nav />

      {/* Cover intro — full viewport on load; slides up + fades as the user scrolls */}
      <section ref={coverRef} className="relative h-screen overflow-hidden bg-paper" id="top">
        <motion.div
          className="h-full w-full"
          style={{ y: coverY, opacity: coverOpacity }}
        >
          <CoverScreen />
        </motion.div>
      </section>

      {/* Home page starts here — Masthead + Hero + rest of the issue */}
      <main className="relative bg-paper">
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
