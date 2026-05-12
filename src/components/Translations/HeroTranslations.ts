import type { Lang } from "./FormTranslations";


export const HeroTranslations = {
  en: {
    cta: "Get a personalised offer",
    eyebrow: "Event Chef",
    subtitle: "Weddings • Corporate events • Private dinners",
  },
  pl: {
    cta: "Otrzymaj indywidualną ofertę",
    eyebrow: "Event Chef",
    subtitle: "Wesela • Eventy firmowe • Prywatne kolacje",
  },
} as const;

export type HeroT = typeof HeroTranslations[Lang];