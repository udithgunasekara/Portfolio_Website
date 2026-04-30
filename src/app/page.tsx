"use client";

import { useState } from "react";
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
  const [coverDone, setCoverDone] = useState(false);

  return (
    <>
      {!coverDone && <CoverScreen onDone={() => setCoverDone(true)} />}
      <Nav hidden={!coverDone} />
      <main className="relative bg-paper" id="top">
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
