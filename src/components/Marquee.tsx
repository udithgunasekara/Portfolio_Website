const CONTENT_PARTS = [
  "Code you can hand to the next person",
  "Engineer & Designer",
  "Available Q3 2026",
  "Currently shipping @ eChannelling",
];

function Segment() {
  return (
    <span>
      {CONTENT_PARTS.map((part, i) => (
        <span key={i}>
          {part}
          <span className="star"> ✱ </span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: 8 }).map((_, i) => (
          <Segment key={i} />
        ))}
      </div>
    </div>
  );
}
