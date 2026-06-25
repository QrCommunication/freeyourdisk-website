import type { Dictionary } from "@/dictionaries";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Safety({ dict }: { dict: Dictionary }) {
  const s = dict.safety;
  return (
    <section id="safety" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="font-mono text-sm text-[var(--color-teal)]">{s.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-5xl">{s.title}</h2>
            <p className="mt-4 max-w-md text-[var(--color-muted)]">{s.sub}</p>
          </Reveal>

          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {s.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.05}>
                <div className="border-t border-[var(--color-line)] pt-5">
                  <div className="flex items-center gap-2.5 text-[var(--color-teal)]">
                    <Icon name={item.icon} size={20} weight="bold" />
                    <h3 className="text-base font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  </div>
                  <p className="mt-2 leading-relaxed text-[var(--color-muted)]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
