import type { Lang } from "./FormTranslations";




export const ContactFormTranslations = {
  en: {
    eyebrow: "Plan your event",
    heading: "Personal quote",
    description:
      "Tell us about your event — and we'll take care of the rest. Within 24 hours we'll send you a proposal tailored to your needs.",
    gdpr: "The data controller is Event Chef. Personal data is processed for the purpose of handling your enquiry. Providing data is voluntary but necessary to receive a response. You have the right to access, correct, delete, restrict processing of your data and to withdraw consent at any time. Details can be found in the Privacy Policy.",
  },
  pl: {
    eyebrow: "Zaplanuj swój event",
    heading: "Indywidualna wycena",
    description:
      "Opisz swoje wydarzenie — a my zajmiemy się resztą. W ciągu 24 godzin prześlemy propozycję dopasowaną do Twoich potrzeb.",
    gdpr: "Administratorem danych osobowych jest Event Chef. Dane osobowe przetwarzane są w celu obsługi zapytania. Podanie danych jest dobrowolne, ale niezbędne do udzielenia odpowiedzi. Przysługuje Ci prawo dostępu do danych, ich poprawiania, usunięcia, ograniczenia przetwarzania oraz cofnięcia zgody w dowolnym momencie. Szczegóły znajdują się w Polityce Prywatności.",
  },
} as const;

export type ContactFormT = typeof ContactFormTranslations[Lang];