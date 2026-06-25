import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/lib/content";
import Legal from "@/components/Legal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: `${dict.legal.privacy.title} — FreeYourDisk`,
    alternates: { canonical: `/${locale}/confidentialite` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  return <Legal dict={getDictionary(l)} locale={l} doc="privacy" />;
}
