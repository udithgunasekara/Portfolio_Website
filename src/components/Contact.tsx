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
        <a href="#">LinkedIn ↗</a>
        <a href="#">GitHub ↗</a>
        <a href="#">Medium ↗</a>
      </div>
    </section>
  );
}
