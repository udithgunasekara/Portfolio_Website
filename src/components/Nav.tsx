"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const LINKS = [
  { to: "work", label: "Work" },
  { to: "about", label: "About" },
  { to: "stack", label: "Stack" },
  { to: "writing", label: "Writing" },
  { to: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.to)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { threshold: 0.3 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={clsx("nav", scrolled && "scrolled")} id="nav">
      <a href="#top" className="logo">
        UDITH.G<em>.</em>
      </a>
      <nav className="nav-links">
        {LINKS.map((l) => (
          <a
            key={l.to}
            href={`#${l.to}`}
            data-to={l.to}
            className={clsx("nav-link", activeId === l.to && "active")}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <span className="dot" />
        Available · Q3 2026
      </div>
    </header>
  );
}
