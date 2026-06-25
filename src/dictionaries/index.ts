import type { Locale } from "@/lib/content";
import fr, { type Dictionary } from "./fr";
import en from "./en";

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export type { Dictionary };
