import type { OfferData } from "../Offer/Offer";
import type { Lang } from "./FormTranslations";

interface OfferTranslation {
  heading: string;
  description: string;
  personSuffix: string;
  personTab: string;
  from: string;
  includes: string;
  pricing: string;
  askForQuote: string;
  cta: string;
  offers: OfferData[];
}

export const OfferTranslations: Record<Lang, OfferTranslation> = {
  en: {
    heading: "Pricing",
    description:
      "Prices are indicative and may vary depending on location, number of guests and individual arrangements.",
    personSuffix: "ppl.",
    personTab: "/ per person",
    from: "from",
    includes: "What's included",
    pricing: "Pricing",
    askForQuote: "Price on request",
    cta: "Ask for a quote",
    offers: [
      {
        title: "Live Cooking",
        callout: "Live sushi",
        features: [
          "Custom menu",
          "Premium ingredients",
          "Full culinary organisation",
        ],
        pricing: {
          "8-14": { basic: "140", premium: "160" },
          "15-19": { basic: "130", premium: "150" },
          "20-29": { basic: "120", premium: "140" },
          "30+": { basic: "110", premium: "130" },
        },
      },
      {
        title: "Masterclass",
        callout: "Sushi workshop",
        features: [
          "Interactive demonstration",
          "Step-by-step instruction",
          "Tasting of prepared dishes",
        ],
        pricing: {
          "8-14": { basic: "140", premium: "160" },
          "15-19": { basic: "130", premium: "150" },
          "20-29": { basic: "120", premium: "140" },
          "30+": { basic: "110", premium: "130" },
        },
      },
      {
        title: "Omakase",
        callout: "Exclusive dinner",
        features: [
          "Signature Omakase menu",
          "Seasonal top-quality ingredients",
          "Personal chef service",
        ],
        pricing: {
          "8-14": { premium: "350" },
          "15-19": { premium: "300" },
        },
        pricePerEvent: true,
      },
      {
        title: "Weddings",
        callout: "Wedding catering",
        features: [
          "Special wedding menu",
          "Sushi buffet style",
          "Nationwide delivery across Poland",
        ],
        pricing: {
          "20-29": { basic: "3000", premium: "3500" },
          "30+": { basic: "3500", premium: "4000" },
        },
      },
    ],
  },
  pl: {
    heading: "Cennik",
    description:
      "Ceny mają charakter orientacyjny i mogą się różnić w zależności od lokalizacji, liczby gości oraz indywidualnych ustaleń.",
    personSuffix: "os.",
    personTab: "/ os.",
    from: "od",
    includes: "Co zawiera",
    pricing: "Cennik",
    askForQuote: "Zapytaj o wycenę",
    cta: "Zapytaj o wycenę",
    offers: [
      {
        title: "Live Cooking",
        callout: "Sushi na żywo",
        features: [
          "Indywidualne menu",
          "Produkty premium",
          "Pełna organizacja kulinarna",
        ],
        pricing: {
          "8-14": { basic: "140", premium: "160" },
          "15-19": { basic: "130", premium: "150" },
          "20-29": { basic: "120", premium: "140" },
          "30+": { basic: "110", premium: "130" },
        },
      },
      {
        title: "Masterclass",
        callout: "Warsztaty sushi",
        features: [
          "Interaktywny pokaz",
          "Nauka krok po kroku",
          "Degustacja przygotowanych dań",
        ],
        pricing: {
          "8-14": { basic: "140", premium: "160" },
          "15-19": { basic: "130", premium: "150" },
          "20-29": { basic: "120", premium: "140" },
          "30+": { basic: "110", premium: "130" },
        },
      },
      {
        title: "Omakase",
        callout: "Ekskluzywna kolacja",
        features: [
          "Autorskie menu Omakase",
          "Sezonowe składniki najwyższej jakości",
          "Indywidualny serwis szefa",
        ],
        pricing: {
          "8-14": { premium: "350" },
          "15-19": { premium: "300" },
        },
      },
      {
        title: "Wesela",
        callout: "Catering weselny",
        features: [
          "Specjalne menu weselne",
          "Sushi w formie bufetu",
          "Realizacja na terenie całej Polski",
        ],
        pricing: {
          "20-29": { basic: "3000", premium: "3500" },
          "30+": { basic: "3500", premium: "4000" },
        },
        pricePerEvent: true,
      },
    ],
  },
};
