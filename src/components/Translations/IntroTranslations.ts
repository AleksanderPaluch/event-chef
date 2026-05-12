import type { Lang } from "./FormTranslations";


export const IntroTranslations = {
  en: {
    heading1: "We create exceptional sushi",
    heading2: "at",
    heading2Accent: "your",
    heading3: "event",
    description:
      "We arrive, set up our station and serve fresh sushi right in front of your guests. This isn't just catering — it's an experience.",
    cta: "Discover the experience",
    features: [
      {
        id: 1,
        callout: "Sushi prepared live",
        title: "Live Cooking",
        description:
          "Sushi preparation show performed directly in front of your guests. Flavour, interaction and entertainment all in one.",
        href: "/live",
      },
      {
        id: 2,
        callout: "Sushi Workshop",
        title: "Masterclass",
        description:
          "Guests craft their own sushi under the chef's guidance. Perfect for team building — engaging and full of fun.",
        href: "/masterclass",
      },
      {
        id: 3,
        callout: "Exclusive dinner",
        title: "Omakase",
        description:
          "An intimate experience where you put yourself in the chef's hands. A carefully composed menu, uncompromising quality.",
        href: "/omakase",
      },
    ],
  },
  pl: {
    heading1: "Tworzymy wyjątkowe sushi",
    heading2: "na",
    heading2Accent: "Twoim",
    heading3: "wydarzeniu",
    description:
      "Przyjeżdżamy, przygotowujemy stanowisko i serwujemy świeże sushi na oczach Twoich gości. To nie tylko catering — to doświadczenie.",
    cta: "Poznaj doświadczenie",
    features: [
      {
        id: 1,
        callout: "Sushi przygotowywane na żywo",
        title: "Live Cooking",
        description:
          "Widowiskowy pokaz przygotowywania sushi bezpośrednio przed Twoimi gośćmi. Smak, interakcja i show w jednym.",
        href: "/live",
      },
      {
        id: 2,
        callout: "Warsztaty Sushi",
        title: "Masterclass",
        description:
          "Uczestnicy samodzielnie tworzą sushi pod okiem chefa. Idealne na integrację — angażujące i pełne zabawy.",
        href: "/masterclass",
      },
      {
        id: 3,
        callout: "Ekskluzywna kolacja",
        title: "Omakase",
        description:
          "Kameralne doświadczenie, w którym oddajesz się w ręce chefa. Starannie skomponowane menu, najwyższa jakość.",
        href: "/omakase",
      },
    ],
  },
} as const;

export type IntroT = typeof IntroTranslations[Lang];