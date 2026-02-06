import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Tabs } from "./Tabs";
import { Cards } from "./Cards";

const FEATURES = [
  {
    title: "Live Cooking",
    rows: [
      { people: "Wesela", basic: "50", premium: "60" },
      { people: "20+", basic: "100", premium: "120" },
      { people: "15 - 19 ", basic: "110", premium: "130" },
      { people: "8 - 14 ", basic: "120", premium: "140" },


      // { people: "25+ osób", basic: "Indywidualnie", premium: "Indywidualnie" },
    ],
  },
  {
    title: "Masterclass",
    rows: [
      { people: "6 - 14 osób", basic: "130", premium: "150" },
      { people: "10 - 14 osób", basic: "120", premium: "140" },
      { people: "15 - 19 osób", basic: "110", premium: "130" },
      { people: "20 - 25 osób", basic: "100", premium: "120" },
      // { people: "25+ osób", basic: "Indywidualnie", premium: "Indywidualnie" },
    ],
  },
  {
    title: "Omakase",
    rows: [
      { people: "1 - 4 osoby", basic: "300", premium: "350" },
      { people: "5 - 8 osób", basic: "280", premium: "300" },
         { people: "9 - 15 osób", basic: "260", premium: "280" },
    ],
  },
];

export const Offer = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="Oferta" className="px-3 py-16 md:py-24 lg:py-36 ">
      <div className="  mx-auto   md:max-w-[90%]  lg:max-w-6xl     ">
        <h3 className="mb-6 text-5xl font-semibold text-center lg:text-7xl">
          Oferta
        </h3>
        <p className="max-w-2xl mx-auto italic font-light text-justify md:mx-auto md:text-center text-md lg:mb-24 lg:text-xl text-zinc-500">
          Ceny mają charakter orientacyjny i mogą się różnić w zależności od
          lokalizacji, liczby gości oraz indywidualnych ustaleń.
        </p>

        <Tabs
          selected={selected}
          setSelected={setSelected}
          FEATURES={FEATURES}
        />

        <AnimatePresence mode="wait">
          {FEATURES.map((feature, index) =>
            selected === index ? (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
           
              >
                <Cards rows={feature.rows} />
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
