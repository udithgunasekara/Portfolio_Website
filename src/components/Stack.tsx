import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { STACK, EXPERIENCE } from "@/data";

export default function Stack() {
  return (
    <section className="band" id="stack">
      <SectionHeader left="§ 05 / Tools of the trade" title="Stack." right={`/${STACK.length}`} />

      <div className="stack-wrap">
        <Reveal>
          <p>
            Everything on this list is something I&rsquo;ve actually used in the last year, either at
            work or in my research. Nothing&rsquo;s here to pad the list out. If it made the cut,
            I&rsquo;ve shipped something real with it.
          </p>
        </Reveal>
        <Reveal delay={1} className="stack-river">
          {STACK.map((s, i) => (
            <span key={s}>
              <span className="s">{s}</span>
              {i < STACK.length - 1 && <span className="sep">·</span>}
            </span>
          ))}
        </Reveal>
      </div>

      <div className="exp-wrap">
        <div className="sh" style={{ marginBottom: 40 }}>
          <Reveal className="l">§ 05a / Provenance</Reveal>
          <Reveal delay={1}>
            <h2>Where I&rsquo;ve worked.</h2>
          </Reveal>
          <Reveal delay={2} className="r">
            3 roles
          </Reveal>
        </div>
        <div>
          {EXPERIENCE.map((e) => (
            <Reveal key={e.where}>
              <div className="exp-row">
                <div className="when">{e.when}</div>
                <div>
                  <div className="where">{e.where}</div>
                  <div className="role">{e.role}</div>
                </div>
                <div>
                  <div className="detail">{e.detail}</div>
                  <div className="chips">
                    {e.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
