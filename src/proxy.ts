import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, type Locale } from "@/lib/content";

// Browser-language detection: French browsers get /fr, everyone else /en.
function detectLocale(req: NextRequest): Locale {
  const header = req.headers.get("accept-language") ?? "";
  const prefersFrench = header
    .split(",")
    .some((part) => part.trim().toLowerCase().startsWith("fr"));
  return prefersFrench ? "fr" : "en";
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

// Run on everything except Next internals and files with an extension
// (robots.txt, sitemap.xml, /screenshots/*.png, favicon.ico pass through).
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
