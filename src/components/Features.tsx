import type { Dictionary } from "@/dictionaries";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Features({ dict }: { dict: Dictionary }) {
  const f = dict.features;
  return (
    <section id="features" className="scroll-mt-20 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-teal-deep">
                {f.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-balance md:text-5xl">
                {f.title}
              </h2>
            </div>
            <p className="text-muted lg:pb-1 lg:text-right">{f.sub}</p>
          </div>
        </Reveal>

        {/* Editorial index — one hairline row per feature, numbered. */}
        <div className="mt-14">
          {f.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.05}>
              <article className="group grid grid-cols-1 gap-x-8 gap-y-3 border-t border-line py-7 transition-colors last:border-b hover:bg-surface/70 md:grid-cols-[72px_1.1fr_1.3fr] md:items-baseline md:px-4">
                <span className="font-mono text-sm text-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
                  <span className="text-teal-deep transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                    <Icon name={item.icon} size={22} weight="bold" />
                  </span>
                  {item.title}
                </h3>

                <p className="max-w-prose leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
