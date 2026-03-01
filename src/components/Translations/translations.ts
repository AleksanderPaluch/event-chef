import { a, label, mask } from "framer-motion/client";

export type Lang = "en" | "pl";

export const FormTranslations = {
  en: {
    nameLabel: "Hi 👋! My name is...",
    namePlaceholder: "Your name...",
    individual: "An individual",
    company: "A company",
    emailLabel: "Email:",
    emailPlaceholder: "name@example.com",
    phoneLabel: "Phone number:",
    phonePlaceholder: "123 456 789",
    representLabel: "And I represent...",
    companyNameLabel: "by the name of...",
    companyNamePlaceholder: "Your company name...",
    eventTypeLabel: "Type of event:",
    dateLabel: "Date:",
    guestsLabel: "Number of guests:",
    guestsPlaceholder: "Approximate number",
    locationLabel: "Location:",
    locationPlaceholder: "Warsaw",
    messageLabel: "I'd love to ask about...",
    messagePlaceholder: "Whatever your heart desires :)",
    submit: "Submit",
    eventTypes: {
      label: "Select event type:",
      live: "Private event / Birthday / House party",
      corporate: "Corporate event / Conference / Christmas party",
      masterclass: "Masterclass / Workshop",
      omakase: "Omakase dinner",
      wedding: "Wedding",
      bachelorette: "Bachelorette party",
      other: "Other",
    },

    agreements: {
      contact: "Consent to be contacted",
      personalData:
        "I consent to the processing of my personal data for the purpose of being contacted regarding Event Chef's offer",
    },
  },
  pl: {
    nameLabel: "Cześć 👋! Mam na imię...",
    namePlaceholder: "Twoje imię...",
    individual: "Osobę prywatną",
    company: "Firmę",
    emailLabel: "Email:",
    emailPlaceholder: "name@example.com",
    phoneLabel: "Numer telefonu:",
    phonePlaceholder: "123 456 789",
    representLabel: "I reprezentuję",
    companyNameLabel: "O nazwie...",
    companyNamePlaceholder: "Nazwa Twojej firmy...",
    eventTypeLabel: "Mój event to:",
    dateLabel: "Data:",
    guestsLabel: "Liczba gości:",
    guestsPlaceholder: "Przybliżona liczba",
    locationLabel: "Miejscowość:",
    locationPlaceholder: "Warszawa",
    messageLabel: "Chcę zapytać o...",
    messagePlaceholder: "Napisz swoją wiadomość :)",
    submit: "Poproś o wycenę",

    eventTypes: {
      label: "Wybierz typ eventu:",
      live: "Event prywatny / Urodziny / Domówki",
      corporate: "Event firmowy / Targi / Wigilie",
      masterclass: "Warsztaty / Masterclass",
      omakase: "Kolacja Omakase",
      wedding: "Wesela",
      bachelorette: "Wieczór panieński",
      other: "Inne",
    },

    agreements: {
      contact: "Zgoda na kontakt",
      personalData:
        "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu w sprawie oferty Event Chef",
  },}
} as const;
