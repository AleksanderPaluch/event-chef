import type { Lang } from "./FormTranslations";


export const LiveTranslations = {
  en: {
    eyebrow: "Live Cooking",
    heading2: "live",
    subtitle: "",
    cardsDescription:
      "Live cooking is an interactive sushi preparation show combined with tasting served throughout the event.",
    menu: ["Futomaki Philadelphia", "Uramaki with Prawns", "Hosomaki Spicy Tuna"],
    cardsProcess: [
      { time: "approx. 1 hr", label: "Station setup" },
      { time: "2–4 hrs",      label: "Sushi live cooking" },
      { time: "throughout",   label: "Serving & tasting" },
    ],
    organization: [
      "No access to water or electricity required",
      "Can be held at any location",
      "Full equipment provided by the chef",
    ],
    chipsTitle: "For Companies",
    chips: ["Corporate events", "Conferences & Trade fairs", "Product launches", "Christmas parties"],
    secondaryChipsTitle: "For Individuals",
    secondaryChips: ["Weddings", "Birthdays", "House parties", "Bachelorette parties"],
  },
  pl: {
    eyebrow: "Live Cooking",

    heading2: "żywo",
    subtitle: "",
    cardsDescription:
      "Live cooking to interaktywny pokaz przygotowywania sushi na żywo, połączony z degustacją serwowaną w trakcie wydarzenia.",
    menu: ["Futomaki Philadelfia", "Uramaki z Krewetkami", "Hosomaki Spicy Tuna"],
    cardsProcess: [
      { time: "ok. 1 godz.", label: "Przygotowanie stanowiska" },
      { time: "2-4 godz.",   label: "Sushi live cooking" },
      { time: "w trakcie",   label: "Serwowanie i degustacja" },
    ],
    organization: [
      "Brak potrzeby dostępu do wody i prądu",
      "Możliwość realizacji w dowolnym miejscu",
      "Pełne zaplecze po stronie szefa kuchni",
    ],
    chipsTitle: "Dla Firm",
    chips: ["Eventy firmowe", "Konferencje, Targi", "Premiery produktów", "Wigilie"],
    secondaryChipsTitle: "Dla Osób Prywatnych",
    secondaryChips: ["Wesela", "Urodziny", "Domówki", "Wieczory panieńskie"],
  },
} as const;

export type LiveT = typeof LiveTranslations[Lang];