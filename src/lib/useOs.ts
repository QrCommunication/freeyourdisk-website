"use client";

import { useEffect, useState } from "react";
import type { OS } from "./content";

// Best-effort visitor OS from the user agent, resolved after mount so the
// server render (Linux default) and the client agree during hydration.
export function useOs(): OS {
  const [os, setOs] = useState<OS>("linux");
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/Mac|iPhone|iPad/i.test(ua)) setOs("macos");
    else if (/Win/i.test(ua)) setOs("windows");
    else setOs("linux");
  }, []);
  return os;
}
