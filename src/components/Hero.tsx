"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className={clsx("hero", ready && "ready")} id="hero">
      <div className="eyebrow">· The portfolio of ·</div>
      <h1>
        <span className="word">
          <span>Udith</span>
        </span>
        <br />
        <span className="word">
          <span>
            <em>Gunasekara.</em>
          </span>
        </span>
      </h1>
      <div className="kicker">
        Software Engineer <b>·</b> Designer <b>·</b> Researcher
      </div>
      <div className="ctas">
        <a className="btn solid" href="#work">
          See selected work →
        </a>
        <a className="btn" href="#contact">
          Get in touch
        </a>
      </div>
      <div className="strip">
        <div className="item">
          <b>Status</b>
          <div>
            <span style={{ color: "var(--accent)" }}>●</span> Shipping @ eChannelling
          </div>
        </div>
        <div className="item">
          <b>Focus</b>
          <div>Full-stack · LLM research</div>
        </div>
        <div className="item">
          <b>Based</b>
          <div>Remote · Worldwide</div>
        </div>
        <div className="item">
          <b>Next</b>
          <div>Available Q3 2026</div>
        </div>
      </div>
      <div className="scroll-hint">Scroll</div>
    </section>
  );
}
