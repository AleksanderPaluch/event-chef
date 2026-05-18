import type { Lang } from "./FormTranslations";


interface FAQItem {
  title: string;
  answer: string;
}

const faqData: Record<"live" | "masterclass" | "omakase", Record<Lang, FAQItem[]>> = {
  live: {
    en: [

      {
        title: "How long does live cooking take?",
        answer: "Typically 2-4 hours, depending on the number of guests and chosen package.",
      },
      {
        title: "What do I need to provide on site?",
        answer: "Basic workspace — we take care of everything else.",
      },
      {
        title: "Is the sushi prepared fresh on the spot?",
        answer: "Yes — every portion is made in front of the guests and served immediately.",
      },
      {
        title: "How many people is this service for?",
        answer: "We adapt individually — we cater for both intimate events and larger gatherings.",
      },
      {
        title: "Do you handle everything on site?",
        answer: "Yes — we arrive, set up the station and manage the entire process.",
      },
    ],
    pl: [
      {
        title: "Ile trwa live cooking?",
        answer: "Standardowo 2-4 godziny, w zależności od liczby gości i wybranego pakietu.",
      },
      {
        title: "Co muszę zapewnić na miejscu?",
        answer: "Podstawową przestrzeń roboczą — resztę organizujemy po naszej stronie.",
      },
      {
        title: "Czy sushi przygotowywane jest na bieżąco?",
        answer: "Tak — wszystkie porcje powstają na oczach gości i są serwowane od razu.",
      },
      {
        title: "Dla ilu osób jest ta usługa?",
        answer: "Dopasowujemy się indywidualnie — obsługujemy zarówno kameralne eventy, jak i większe wydarzenia.",
      },
      {
        title: "Czy zajmujecie się wszystkim na miejscu?",
        answer: "Tak — przyjeżdżamy, przygotowujemy stanowisko i obsługujemy cały proces.",
      },
    ],
  },

  masterclass: {
    en: [

      {
        title: "Who is the masterclass for?",
        answer: "For everyone — beginners and those who want to refine their technique alike.",
      },
      {
        title: "Do I need my own equipment?",
        answer: "No — we provide all ingredients and tools needed.",
      },
      {
        title: "How long does the workshop take?",
        answer: "Usually 2-3 hours, depending on the scope and level of the group.",
      },
      {
        title: "Can we eat the sushi we make?",
        answer: "Yes — all prepared rolls are tasted on the spot.",
      },
      {
        title: "Is it a good idea for a corporate event or team building?",
        answer: "Absolutely — it combines learning and shared experience, making it perfect for integration.",
      },
    ],
    pl: [
      {
        title: "Dla kogo jest masterclass?",
        answer: "Dla każdego — zarówno początkujących, jak i osób, które chcą uporządkować technikę.",
      },
      {
        title: "Czy potrzebuję własnego sprzętu?",
        answer: "Nie — zapewniamy wszystkie składniki i narzędzia potrzebne do pracy.",
      },
      {
        title: "Ile trwa szkolenie?",
        answer: "Zazwyczaj 2-3 godziny, w zależności od zakresu i poziomu grupy.",
      },
      {
        title: "Czy po zajęciach można zjeść przygotowane sushi?",
        answer: "Tak — wszystkie przygotowane rolki są degustowane na miejscu.",
      },
      {
        title: "Czy to dobry pomysł na event firmowy lub integrację?",
        answer: "Tak — to połączenie nauki i wspólnego doświadczenia, które świetnie sprawdza się jako integracja.",
      },
    ],
  },

  omakase: {
    en: [
      {
        title: "What is omakase?",
        answer: "An individual experience — the menu is curated on the spot by the chef.",
      },
      {
        title: "How long does an omakase dinner take?",
        answer: "Usually 1.5-3 hours — the pace is adjusted to the guests.",
      },
      {
        title: "Can we mention preferences or allergies?",
        answer: "Yes — we collect all information before the event and tailor the menu accordingly.",
      },
      {
        title: "Where does omakase take place?",
        answer: "At the client's venue — we create a private culinary experience on site.",
      },
      {
        title: "Is it a private experience?",
        answer: "Yes — everything takes place in an intimate, personalised format.",
      },
    ],
    pl: [
      {
        title: "Na czym polega omakase?",
        answer: "To indywidualne doświadczenie — menu dobierane jest na bieżąco przez szefa kuchni.",
      },
      {
        title: "Ile trwa kolacja omakase?",
        answer: "Zazwyczaj 1,5-3 godziny — tempo dostosowane jest do gości.",
      },
      {
        title: "Czy można zgłosić preferencje lub alergie?",
        answer: "Tak — przed wydarzeniem zbieramy wszystkie informacje i dopasowujemy menu.",
      },
      {
        title: "Gdzie odbywa się omakase?",
        answer: "W przestrzeni klienta — tworzymy prywatne doświadczenie kulinarne na miejscu.",
      },
      {
        title: "Czy to jest prywatne doświadczenie?",
        answer: "Tak — wszystko odbywa się w kameralnej, dopasowanej formule.",
      },
    ],
  },
};

export const useFAQ = (type: "live" | "masterclass" | "omakase", lang: Lang): FAQItem[] =>
  faqData[type][lang];