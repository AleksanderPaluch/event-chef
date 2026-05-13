import type { Lang } from "./FormTranslations";



export const AboutTranslations = {
  en: {
    eyebrow: "About us",
    heading1: "A passion for sushi,",
    heading2: "in every detail.",
    description:
      "Our company was founded by experienced, talented chefs whose passion is sushi. We make sure that every event we cater is an exceptional, unforgettable culinary experience.",
    testimonialsHeading: "What do our clients say?",
    stats: [
      { num: 100, suffix: "%", label: "Satisfied clients" },
      { num: 20, suffix: "+", label: "Events organised" },
      { num: 10, suffix: "yrs+", label: "Professional experience" },
    ],
    testimonials: [
      {
        id: 1,
        name: "Gabriella S.",
        info: "Highly recommend — professional approach and quick delivery.",
        rating: 5,
        createdAt: "2026-02-05",
      },
      {
        id: 2,
        name: "Daniel A.",
        info: "Excellent live sushi organisation at a birthday party. The guests were delighted!",
        rating: 5,
        createdAt: "2026-02-02",
      },
      {
        id: 3,
        name: "Paweł W.",
        info: "Professional service and delicious sushi. Will definitely use again!",
        rating: 5,
        createdAt: "2025-02-09",
      },
      {
        id: 4,
        name: "Magdalena S.",
        info: "Highly recommend — professional approach and quick delivery.",
        rating: 5,
        createdAt: "2025-02-09",
      },
      {
        id: 5,
        name: "Gabriella S.",
        info: "Highly recommend — professional approach and quick delivery.",
        rating: 5,
        createdAt: "2026-02-05",
      },
      {
        id: 6,
        name: "Daniel A.",
        info: "Excellent live sushi organisation at a birthday party. The guests were delighted!",
        rating: 5,
        createdAt: "2026-02-02",
      },
      {
        id: 7,
        name: "Paweł W.",
        info: "Professional service and delicious sushi. Will definitely use again!",
        rating: 5,
        createdAt: "2025-02-09",
      },
      {
        id: 8,
        name: "Magdalena S.",
        info: "Highly recommend — professional approach and quick delivery.",
        rating: 5,
        createdAt: "2025-02-09",
      },
    ],
  },
  pl: {
    eyebrow: "O nas",
    heading1: "Pasja do sushi,",
    heading2: "w każdym detalu.",
    description:
      "Nasza firma została stworzona przez doświadczonych, utalentowanych kucharzy, których pasją jest sushi. Dbamy o to, aby każde wydarzenie, które obsługujemy, było wyjątkowym, niezapomnianym doświadczeniem kulinarnym.",
    testimonialsHeading: "Co mówią o nas klienci?",
    stats: [
      { num: 100, suffix: "%", label: "Zadowolonych klientów" },
      { num: 20, suffix: "+", label: "Eventów zorganizowanych" },
      { num: 10, suffix: "lat+", label: "Doświadczenia zawodowego" },
    ],
    testimonials: [
      {
        id: 1,
        name: "Gabriella S.",
        info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
        rating: 5,
        createdAt: "2026-02-05",
      },
      {
        id: 2,
        name: "Daniel A.",
        info: "Bardzo dobra organizacja live sushi na imprezie urodzinowej. Goście byli zachwyceni!",
        rating: 5,
        createdAt: "2026-02-02",
      },
      {
        id: 3,
        name: "Paweł W.",
        info: "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
        rating: 5,
        createdAt: "2025-02-09",
      },
      {
        id: 4,
        name: "Magdalena S.",
        info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
        rating: 5,
        createdAt: "2025-02-09",
      },
      {
        id: 5,
        name: "Gabriella S.",
        info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
        rating: 5,
        createdAt: "2026-02-05",
      },
      {
        id: 6,
        name: "Daniel A.",
        info: "Bardzo dobra organizacja live sushi na imprezie urodzinowej. Goście byli zachwyceni!",
        rating: 5,
        createdAt: "2026-02-02",
      },
      {
        id: 7,
        name: "Paweł W.",
        info: "Profesjonalna obsługa i pyszne sushi. Z pewnością skorzystam ponownie!",
        rating: 5,
        createdAt: "2025-02-09",
      },
      {
        id: 8,
        name: "Magdalena S.",
        info: "Polecam, profesjonalne podejście do klienta i szybka realizacja.",
        rating: 5,
        createdAt: "2025-02-09",
      },
    ],
  },
} as const;

export type AboutT = typeof AboutTranslations[Lang];