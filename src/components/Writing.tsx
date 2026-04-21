import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { WRITING } from "@/data";

export default function Writing() {
  return (
    <section className="band" id="writing" style={{ borderTop: "1px solid var(--ink)" }}>
      <SectionHeader left="§ 06 / Archive" title="Writings." right="3 recent" />
      <div className="writing-grid">
        {WRITING.map((w) => (
          <Reveal key={w.title}>
            <a className="write-card" href="#">
              <div className="meta">
                {w.date} · {w.kicker}
              </div>
              <h3>{w.title}</h3>
              <p>{w.dek}</p>
              <div className="cta">
                Read the essay <span>→</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
