import type { Lang } from "./FormTranslations";


export const OmakaseTranslations = {
  en: {
    eyebrow: "Omakase",
    cardsDescription:
      "Omakase is an exclusive culinary experience where guests put themselves entirely in the chef's hands. The menu is created on the spot, based on the finest seasonal ingredients and the sushi master's signature vision.",
    menu: ["Sushi & Sashimi", "Premium seafood", "Unique garnishes & sauces"],
    cardsProcess: [
      { time: "1–2 hrs",    label: "Station & ingredient preparation" },
      { time: "2–3 hrs",    label: "Live Omakase service" },
      { time: "throughout", label: "Stories about ingredients & techniques" },
    ],
    organization: [
      "Full equipment provided by the chef",
      "Individual service for each guest",
      "Can be held at any location",
    ],
    chipsTitle: "For Companies",
    chips: ["VIP meetings", "Premium events", "Business dinners", "Closed events"],
    secondaryChipsTitle: "For Individuals",
    secondaryChips: ["Private dinners", "Anniversaries", "Premium birthdays", "Special occasions"],
  },
  pl: {
    eyebrow: "Omakase",
    cardsDescription:
      "Omakase to ekskluzywne doświadczenie kulinarne, w którym goście oddają się w ręce szefa kuchni. Menu powstaje na bieżąco, w oparciu o najlepsze, sezonowe produkty i autorską wizję sushi mastera.",
    menu: ["Sushi i Sashimi", "Premium seafood", "Unikalne dodatki i sosy"],
    cardsProcess: [
      { time: "1-2 godz.", label: "Przygotowanie stanowiska i produktów" },
      { time: "2-3 godz.", label: "Serwis Omakase na żywo" },
      { time: "w trakcie", label: "Opowieść o produktach i technikach" },
    ],
    organization: [
      "Pełne zaplecze po stronie szefa kuchni",
      "Indywidualny serwis dla gości",
      "Możliwość realizacji w dowolnej lokalizacji",
    ],
    chipsTitle: "Dla Firm",
    chips: ["Spotkania VIP", "Eventy premium", "Kolacje biznesowe", "Zamknięte wydarzenia"],
    secondaryChipsTitle: "Dla Osób Prywatnych",
    secondaryChips: ["Kolacje prywatne", "Rocznice", "Urodziny premium", "Wyjątkowe okazje"],
  },
} as const;

export type OmakaseT = typeof OmakaseTranslations[Lang];