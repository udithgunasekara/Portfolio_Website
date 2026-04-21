import Reveal from "./Reveal";

export default function PullQuote() {
  return (
    <div className="pull">
      <Reveal>
        <q>Code is a conversation with the future. Design is how it starts.</q>
      </Reveal>
      <Reveal delay={1} className="att">
        — U.G., From The Notebook
      </Reveal>
    </div>
  );
}
