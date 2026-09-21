import type { Dictionary } from "@/dictionaries";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Safety({ dict }: { dict: Dictionary }) {
  const s = dict.safety;
  return (
    <section id="safety" className="scroll-mt-20 bg-night px-5 py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-widest text-[#3ec9d6]">
              {s.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-balance md:text-5xl">
              {s.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-[#9aa3b0]">{s.sub}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {s.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.05}>
                <div className="border-t border-night-line py-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#3ec9d6] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#3ec9d6]">
                      <Icon name={item.icon} size={19} weight="bold" />
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9aa3b0]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
