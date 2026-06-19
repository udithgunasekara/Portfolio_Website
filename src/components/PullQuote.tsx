import Reveal from "./Reveal";

export default function PullQuote() {
  return (
    <div className="pull">
      <Reveal>
        <q>Most of writing good code is just being kind to whoever reads it next, usually you.</q>
      </Reveal>
      <Reveal delay={1} className="att">
        U. G., from the notebook
      </Reveal>
    </div>
  );
}
