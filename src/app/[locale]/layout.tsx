import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { notFound } from "next/navigation";
import { LOCALES, REPO, shotSrc, type Locale } from "@/lib/content";
import { getDictionary } from "@/dictionaries";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../globals.css";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "en") as Locale;
  const dict = getDictionary(l);
  return {
    metadataBase: new URL("https://freeyourdisk.com"),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: "FreeYourDisk",
    authors: [{ name: "QR Communication" }],
    icons: { icon: "/icon.png", apple: "/apple-icon.png" },
    openGraph: {
      type: "website",
      locale: l === "fr" ? "fr_FR" : "en_US",
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "FreeYourDisk",
      images: [{ url: shotSrc("home", l), width: 1200, height: 760, alt: "FreeYourDisk" }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [shotSrc("home", l)],
    },
    alternates: {
      canonical: `/${l}`,
      languages: { fr: "/fr", en: "/en" },
    },
    other: { "github:repo": REPO },
  };
}

export const viewport: Viewport = {
  themeColor: "#080b11",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <html lang={l} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Nav dict={dict} locale={l} />
        {children}
        <Footer dict={dict} locale={l} />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
