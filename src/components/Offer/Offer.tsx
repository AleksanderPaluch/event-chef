import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import { PeopleTabs } from "./PeopleTabs";
import { OfferCard } from "./OfferCard";


export type PeopleTab = "6-10" | "11-15" | "16-20" | "20+";

export interface PriceTier {
  basic?: string;
  premium: string;
}

export interface OfferData {
  title: string;
  features: string[];
  pricing: Partial<Record<PeopleTab, PriceTier>>;
}

export const PEOPLE_TABS: PeopleTab[] = ["6-10", "11-15", "16-20", "20+"];

export const OFFERS: OfferData[] = [
  {
    title: "Live Cooking",
    features: ["Indywidualne menu", "Produkty premium", "Pełna organizacja kulinarna"],
    pricing: {
      "6-10":  { basic: "120", premium: "140" },
      "11-15": { basic: "110", premium: "130" },
      "16-20": { basic: "110", premium: "130" },
      "20+":   { basic: "100", premium: "120" },
    },
  },
  {
    title: "Masterclass",
    features: ["Interaktywny pokaz", "Nauka krok po kroku", "Degustacja przygotowanych dań"],
    pricing: {
      "6-10":  { basic: "130", premium: "150" },
      "11-15": { basic: "120", premium: "140" },
      "16-20": { basic: "110", premium: "130" },
      "20+":   { basic: "100", premium: "120" },
    },
  },
  {
    title: "Omakase",
    features: ["Autorskie menu typu Omakase", "Sezonowe produkty najwyższej jakości", "Indywidualny serwis przez szefa kuchni"],
    pricing: {
      "6-10":  { premium: "350" },
      "11-15": { premium: "300" },
      "16-20": { premium: "300" },
    },
  },
  {
    title: "Wesela",
    features: ["Specjalne menu weselne", "Sushi w formie bufetu", "Realizacja na terenie całej Polski"],
    pricing: {
      "6-10":  { basic: "60", premium: "70" },
      "11-15": { basic: "60", premium: "70" },
      "16-20": { basic: "60", premium: "70" },
      "20+":   { basic: "60", premium: "70" },
    },
  },
];

export const Offer = () => {
  // const [selectedPeople, setSelectedPeople] = useState<PeopleTab>("6-10");

  return (
    <section id="offer">
      <div className="max-w-7xl section">
        <h3 className="text-5xl section-header lg:text-6xl">Oferta</h3>
        <p className="section-description">
          Ceny mają charakter orientacyjny i mogą się różnić w zależności od
          lokalizacji, liczby gości oraz indywidualnych ustaleń.
        </p>

        {/* <PeopleTabs
          tabs={PEOPLE_TABS}
          selected={selectedPeople}
          setSelected={setSelectedPeople}
        /> */}

        <AnimatePresence mode="wait">
          <motion.div
            // key={selectedPeople}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
          >
            {OFFERS.map((offer) => (
              <OfferCard
                key={offer.title}
                title={offer.title}
           
                features={offer.features}
                // pricing={offer.pricing[selectedPeople]}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};