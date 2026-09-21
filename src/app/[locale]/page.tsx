import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/lib/content";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Safety from "@/components/Safety";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <main>
      <Hero dict={dict} locale={l} />
      <Marquee words={dict.hero.marquee} />
      <Features dict={dict} />
      <Screenshots dict={dict} locale={l} />
      <Safety dict={dict} />
      <Download dict={dict} />
      <Faq dict={dict} />
      <Cta dict={dict} locale={l} />
    </main>
  );
}
