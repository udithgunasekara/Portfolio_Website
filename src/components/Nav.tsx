'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Nav({ active = "home" }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ["Home", "Work", "About", "Writing", "Contact"];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-11 py-5 pb-4 transition-colors duration-300 ${scrolled ? 'bg-paper shadow-sm' : 'bg-transparent'}`}
    >
      <div className="font-extrabold tracking-tight text-base font-poppins">
        UDITH.G<span className="text-accent">.</span>
      </div>
      
      <div className="flex gap-5">
        {links.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`}
            className={`font-jetbrains text-[11px] tracking-[.14em] uppercase no-underline transition-colors ${
              active === link.toLowerCase() ? "text-ink font-medium" : "text-muted hover:text-ink"
            }`}
          >
            {link}
          </a>
        ))}
      </div>
      
      <span className="font-jetbrains text-[11px] text-muted">
        ©26 · v1.0
      </span>
    </motion.nav>
  );
}
