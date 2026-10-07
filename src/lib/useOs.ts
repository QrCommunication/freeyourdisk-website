"use client";

import { useSyncExternalStore } from "react";
import type { OS } from "./content";

// User agents remain stable for a page's lifetime, so no change listener is
// needed. The server snapshot also supplies the initial hydration value.
const subscribe = () => () => {};
const getServerSnapshot = (): OS => "linux";

function getSnapshot(): OS {
  const ua = navigator.userAgent;
  if (/Mac|iPhone|iPad/i.test(ua)) return "macos";
  if (/Win/i.test(ua)) return "windows";
  return "linux";
}

export function useOs(): OS {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
