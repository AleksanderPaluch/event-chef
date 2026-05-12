import type { Lang } from "./FormTranslations";


export const NavTranslations = {
  en: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    links: [
      { text: "Home",              href: "/",            type: "page" },
      { text: "Live Cooking",      href: "/live",         type: "page" },
      { text: "Sushi Workshop",    href: "/masterclass",  type: "page" },
      { text: "Omakase",           href: "/omakase",      type: "page" },
      { text: "Pricing",             href: "offer",         type: "section" },
      { text: "Plan Your Event",       href: "contact",       type: "section" },
    ],
  },
  pl: {
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    links: [
      { text: "Home",                  href: "/",            type: "page" },
      { text: "Live Cooking",          href: "/live",         type: "page" },
      { text: "Warsztaty Sushi",       href: "/masterclass",  type: "page" },
      { text: "Omakase",               href: "/omakase",      type: "page" },
      { text: "Cennik",                href: "offer",         type: "section" },
      { text: "Zaplanuj Swój Event", href: "contact",       type: "section" },
    ],
  },
} as const;

export type NavT = typeof NavTranslations[Lang];