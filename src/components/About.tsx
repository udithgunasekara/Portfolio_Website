import Image from "next/image";
import portraitImg from "@/app/portrait.png";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section className="band" id="about">
      <SectionHeader left="§ 02 / About" title="On practice." right="pg. 04 — 05" />
      <div className="about">
        <Reveal>
          <aside>
            <div className="k">Who</div>
            <div className="v big">Udith Gunasekara</div>
            <div className="k">Currently</div>
            <div className="v">Software Engineer Intern, eChannelling PLC.</div>
            <div className="k">Interests</div>
            <div className="v">LLMs · Microservices · Design Systems · Mobile.</div>
          </aside>
        </Reveal>

        <Reveal delay={1}>
          <article>
            <p className="dropcap">
              I am a software engineer who designs, or a designer who engineers — both feel true. I
              spend weekdays shipping features for a production SaaS used by 50+ hospitals, and
              weekends tinkering with research on context engineering for LLMs. The two live in the
              same head.
            </p>
            <p>
              The work I&rsquo;m proudest of is the work that&rsquo;s{" "}
              <em className="serif">quiet</em>. Clean APIs with honest names. Interfaces that
              don&rsquo;t draw attention to themselves. A system a teammate can read, understand,
              and extend without me in the room. That&rsquo;s the goal.
            </p>
            <p>
              I think in components — both the React kind and the conceptual kind. I ship in small,
              confident commits. And I keep a notebook, because engineering and design are just two
              ways of writing the same thought down.
            </p>
          </article>
        </Reveal>

        <Reveal delay={2}>
          <aside>
            <div className="portrait">
              <Image src={portraitImg} alt="Portrait of Udith Gunasekara" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="cap">Fig. 001 — portrait, 2026</div>
            <div className="traits">
              <div className="k">Traits</div>
              <div className="v">Playful. Confident. Calm. Curious.</div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
