import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/content";

export default function Legal({
  dict,
  locale,
  doc,
}: {
  dict: Dictionary;
  locale: Locale;
  doc: "notice" | "privacy";
}) {
  const page = doc === "notice" ? dict.legal.notice : dict.legal.privacy;
  const intro = doc === "privacy" ? dict.legal.privacy.intro : null;

  return (
    <main className="px-5 pt-32 pb-24 md:pt-40">
      <article className="mx-auto max-w-3xl">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} />
          {dict.legal.back}
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">{page.title}</h1>
        <p className="mt-3 text-sm text-[var(--color-faint)]">{dict.legal.updated}</p>

        <div className="mt-10 space-y-3 leading-relaxed text-[var(--color-muted)] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:my-1 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {intro && <p className="text-lg text-ink">{intro}</p>}
          {page.blocks.map((b) => (
            <section key={b.h}>
              <h2>{b.h}</h2>
              {b.p.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {b.ul.length > 0 && (
                <ul>
                  {b.ul.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
