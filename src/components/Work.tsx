"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";

function Row({ p }: { p: Project }) {
  const imgRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const img = imgRef.current;
    if (!img) return;
    const r = e.currentTarget.getBoundingClientRect();
    img.style.left = e.clientX - r.left + "px";
    img.style.top = e.clientY - r.top + "px";
  };

  return (
    <a className="work-row" href="#" data-num={p.num} onMouseMove={onMove}>
      <div
        ref={imgRef}
        className="hover-img"
        style={{ background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)` }}
      >
        <div className="hi-kind">
          {p.num} · {p.kind}
        </div>
        <div className="hi-title">{p.title}</div>
      </div>
      <div className="num">{p.num}/</div>
      <div>
        <div className="name">{p.title}</div>
        <div className="kind">{p.kind}</div>
      </div>
      <div className="desc">{p.desc}</div>
      <div className="year">{p.year}</div>
      <div className="arr">→</div>
    </a>
  );
}

export default function Work() {
  return (
    <section className="band" id="work" style={{ borderTop: "1px solid var(--ink)" }}>
      <SectionHeader left="§ 03 / Index" title="Selected Work." right="2024 to 2026 · 03 entries" />
      <div className="work-wrap">
        <div className="work-list">
          {PROJECTS.map((p) => (
            <Reveal key={p.num}>
              <Row p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
