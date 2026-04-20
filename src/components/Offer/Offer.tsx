import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Tabs } from "./Tabs";
import { Cards } from "./Cards";



type FeatureVariant = "wedding";

interface Row {
  people: string;
  basic: string;
  premium: string;
  variant?: FeatureVariant;
}

interface FeatureGroup {
  title: string;
  tab: "live" | "masterclass" | "omakase";
  rows: Row[];
  features: string[];
  featuresByVariant?: string[]; 
}


const FEATURES: FeatureGroup[] = [
  {
    title: "Live Cooking",
    tab: "live",
    features: [
      "Indywidualne menu",
      "Produkty premium",
      "Pełna organizacja kulinarna",
    ],
    featuresByVariant: [
      "Specjalne menu weselne",
      "Sushi w formie bufetu",
      "Realizacja na terenie całej Polski",
    ],
    rows: [
      { people: "8 - 14", basic: "120", premium: "140" },

      { people: "15 - 19", basic: "110", premium: "130" },
      { people: "20+", basic: "100", premium: "120" },
      {
        people: "Wesela",
        basic: "60",
        premium: "70",
        variant: "wedding",
      },
    ],
  },

  {
    title: "Masterclass",
    tab: "masterclass",
    features: [
      "Interaktywny pokaz",
      "Nauka krok po kroku",
      "Degustacja przygotowanych dań",
    ],
    rows: [
      { people: "6 - 9", basic: "130", premium: "150" },
      { people: "10 - 14", basic: "120", premium: "140" },
      { people: "15 - 19", basic: "110", premium: "130" },
      { people: "20 - 25", basic: "100", premium: "120" },
    ],
  },

  {
    title: "Omakase",
    tab: "omakase",
    features: [
      "Autorskie menu typu Omakase",
      "Sezonowe produkty najwyższej jakości",
      "Serwowanie dań bezpośrednio przez szefa kuchni",
    ],
    rows: [
      { people: "4 - 6", basic: "", premium: "350" },
      { people: "7 - 10", basic: "", premium: "320" },
      { people: "11 - 15", basic: "", premium: "300" },
    ],
  },
];



export const Offer = () => {
  const [selected, setSelected] = useState(0);
  const activeFeature = FEATURES[selected];

  return (
    <section id="offer" >
      <div className="max-w-7xl section">
        <h3 className="text-5xl section-header lg:text-6xl">
          Oferta
        </h3>

        <p className=" section-description">
          Ceny mają charakter orientacyjny i mogą się różnić w zależności od
          lokalizacji, liczby gości oraz indywidualnych ustaleń.
        </p>

        <Tabs
          selected={selected}
          setSelected={setSelected}
          FEATURES={FEATURES}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <Cards
              rows={activeFeature.rows}
              features={activeFeature.features}
              featuresByVariant={activeFeature.featuresByVariant}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
