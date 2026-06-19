import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact-band" id="contact">
      <div className="bg-word">hello.</div>
      <div className="eyebrow">End of issue · Turn the page ↗</div>
      <Reveal>
        <h2>
          Let&rsquo;s make
          <br />
          <b>something.</b>
        </h2>
      </Reveal>
      <a className="email" href="mailto:hello@udithg.me">
        hello@udithg.me
      </a>
      <div className="socials">
        <a href="https://www.linkedin.com/in/udith-gunasekara/" target="_blank" rel="noreferrer noopener">
          LinkedIn ↗
        </a>
        <a href="https://github.com/udithgunasekara" target="_blank" rel="noreferrer noopener">
          GitHub ↗
        </a>
        <a href="https://medium.com/@udithgunasekara7" target="_blank" rel="noreferrer noopener">
          Medium ↗
        </a>
      </div>
    </section>
  );
}
