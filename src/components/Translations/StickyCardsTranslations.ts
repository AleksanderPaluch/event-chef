import type { Lang } from "./FormTranslations";

export const StickyCardsTranslations = {
  en: {
    cards: {
      process:      "Process",
      forWho:       "Who is it for?",
      menu:         "Menu",
      organization: "Organisation",
      access:       "Travel",
    },
    access: {
      city:         "Warsaw",
      cityLabel:    "Free",
      country:      "All of Poland",
      countryLabel: "2 PLN / km",
    },
     menu: {
    omakaseLabel:  "Signature tasting menu",
    exampleLabel:  "Sample menu per person:",
    pcs:           "pcs",
    note:          "Every menu is created individually, tailored to the character of the event*",
  },
  },
  pl: {
    cards: {
      process:      "Przebieg",
      forWho:       "Dla kogo?",
      menu:         "Menu",
      organization: "Organizacja",
      access:       "Dojazd",
    },
    access: {
      city:         "Warszawa",
      cityLabel:    "Darmowy dojazd",
      country:      "Cała Polska",
      countryLabel: "2 zł / km",
    },
     menu: {
    omakaseLabel:  "Autorskie menu degustacyjne",
    exampleLabel:  "Przykładowe menu dla 1 osoby:",
    pcs:           "szt",
    note:          "Każde menu jest tworzone indywidualnie dopasowane do charakteru wydarzenia*",
  },
  },
} as const;

export type StickyCardsT = typeof StickyCardsTranslations[Lang];