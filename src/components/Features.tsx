import type { Dictionary } from "@/dictionaries";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Features({ dict }: { dict: Dictionary }) {
  const f = dict.features;
  return (
    <section id="features" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--color-teal)]">{f.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            {f.title}
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-muted)]">{f.sub}</p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[1fr] grid-flow-dense gap-4 md:grid-cols-3">
          {f.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06} className={item.wide ? "md:col-span-2" : ""}>
              <article className="card edge-top group h-full p-7 transition-colors duration-300 hover:border-[var(--color-line-strong)]">
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-elevated)] text-[var(--color-teal)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  <Icon name={item.icon} size={22} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 max-w-prose leading-relaxed text-[var(--color-muted)]">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
