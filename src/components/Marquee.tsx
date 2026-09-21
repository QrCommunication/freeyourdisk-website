// Keyword marquee under the hero — the cleanup vocabulary scrolling between
// two hairlines. Duplicated track for a seamless -50% loop; pauses on hover
// and is disabled under prefers-reduced-motion (see globals.css).
export default function Marquee({ words }: { words: string[] }) {
  const run = [...words, ...words];
  return (
    <div className="marquee overflow-hidden border-y border-line bg-paper-2/60 py-3.5">
      <div className="marquee-track items-center gap-8 pr-8">
        {run.map((w, i) => (
          <span
            key={`${w}-${i}`}
            aria-hidden={i >= words.length}
            className="flex shrink-0 items-center gap-8 font-mono text-[12px] uppercase tracking-widest text-muted"
          >
            {w}
            <span className="text-teal" aria-hidden>
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
