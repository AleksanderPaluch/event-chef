import type { Lang } from "./FormTranslations";


export const MasterclassTranslations = {
  en: {
    eyebrow: "Sushi Masterclass",
    cardsDescription:
      "Sushi Masterclass is a hands-on workshop where participants learn to prepare sushi from scratch under the guidance of an experienced sushi master.",
    menu: ["Futomaki Philadelphia", "Uramaki with Prawns", "Hosomaki Spicy Tuna"],
    cardsProcess: [
      { time: "approx. 1 hr", label: "Station setup" },
      { time: "2 - 3 hrs",      label: "Step-by-step training" },
      { time: "1 hr",         label: "Sushi tasting" },
    ],
    organization: [
      "Individual stations for each participant",
      "Full set of ingredients and tools",
      "Can be held at any location",
    ],
    chipsTitle: "For Companies",
    chips: ["Team building", "Corporate events", "Culinary training", "Business meetings"],
    secondaryChipsTitle: "For Individuals",
    secondaryChips: ["Birthdays", "Friends gatherings", "Themed evenings", "Culinary gift"],
  },
  pl: {
    eyebrow: "Sushi Masterclass",
    cardsDescription:
      "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy uczą się przygotowywania sushi od podstaw pod okiem doświadczonego sushi mastera.",
    menu: ["Futomaki Philadelfia", "Uramaki z Krewetkami", "Hosomaki Spicy Tuna"],
    cardsProcess: [
      { time: "ok. 1 godz.", label: "Przygotowanie stanowisk" },
      { time: "2 - 3 godz.", label: "Warsztaty krok po kroku" },
      { time: "1 godz.",     label: "Degustacja sushi" },
    ],
    organization: [
      "Indywidualne stanowiska dla uczestników",
      "Komplet produktów i narzędzi",
      "Możliwość realizacji w dowolnej lokalizacji",
    ],
    chipsTitle: "Dla Firm",
    chips: ["Integracje zespołowe", "Eventy firmowe", "Szkolenia kulinarne", "Spotkania biznesowe"],
    secondaryChipsTitle: "Dla Osób Prywatnych",
    secondaryChips: ["Urodziny", "Spotkania z przyjaciółmi", "Wieczory tematyczne", "Prezent kulinarny"],
  },
} as const;

export type MasterclassT = typeof MasterclassTranslations[Lang];