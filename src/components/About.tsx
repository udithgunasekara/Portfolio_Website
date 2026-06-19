import Image from "next/image";
import portraitImg from "@/app/portrait.png";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section className="band" id="about">
      <SectionHeader left="§ 02 / About" title="On practice." right="pg. 04 / 05" />
      <div className="about">
        <Reveal>
          <aside>
            <div className="k">Who</div>
            <div className="v big">Udith Gunasekara</div>
            <div className="k">Currently</div>
            <div className="v">Associate Software Engineer, eChannelling PLC.</div>
            <div className="k">Interests</div>
            <div className="v">LLMs · Microservices · Design Systems · Mobile.</div>
          </aside>
        </Reveal>

        <Reveal delay={1}>
          <article>
            <p className="dropcap">
              I build software and I design it, and I&rsquo;ve stopped trying to pick a side. During
              the week I ship features for a SaaS platform that 50+ hospitals depend on. On weekends
              I dig into context engineering for LLMs. It&rsquo;s the same curiosity, just pointed at
              different problems.
            </p>
            <p>
              The work I&rsquo;m most proud of tends to be the{" "}
              <em className="serif">quiet</em> kind. APIs whose names actually tell you what they do.
              Interfaces that stay out of your way. Code a teammate can pick up and extend without
              needing me in the room to explain it.
            </p>
            <p>
              I tend to break problems into parts, the way you would a UI. I&rsquo;d rather commit in
              small steps than make one big risky change. And I keep a notebook, because writing
              things down is usually how I work out what I actually think.
            </p>
          </article>
        </Reveal>

        <Reveal delay={2}>
          <aside>
            <div className="portrait">
              <Image src={portraitImg} alt="Portrait of Udith Gunasekara" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="cap">Fig. 001 · portrait, 2026</div>
            <div className="traits">
              <div className="k">Traits</div>
              <div className="v">Sweats the details nobody asked about. Reads the docs end to end. Happier with a hard bug than an easy one.</div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
