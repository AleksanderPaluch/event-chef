export type Lang = "en" | "pl";

export const translations = {
  en: {
    nameLabel: "Hi 👋! My name is...",
    namePlaceholder: "Your name...",
    representLabel: "And I represent...",
    companyNameLabel: "by the name of...",
    companyNamePlaceholder: "Your company name...",
    messageLabel: "I'd love to ask about...",
    messagePlaceholder: "Whatever your heart desires :)",
    submit: "Submit",
    individual: "An individual",
    company: "A company",
  },
  pl: {
    nameLabel: "Cześć 👋! Mam na imię...",
    namePlaceholder: "Twoje imię...",
    representLabel: "I reprezentuję...",
    companyNameLabel: "O nazwie...",
    companyNamePlaceholder: "Nazwa Twojej firmy...",
    messageLabel: "Chcę zapytać o...",
    messagePlaceholder: "Napisz swoją wiadomość :)",
    submit: "Wyślij",
    individual: "Osobę prywatną",
    company: "Firmę",
  },
} as const;