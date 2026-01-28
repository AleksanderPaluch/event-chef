import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Tabs } from "./Tabs";
import { Cards } from "./Cards";

const FEATURES = [
  {
    title: "Live Cooking",
    rows: [
      { people: "Wesela", basic: "50", premium: "60" },
      { people: "20 – 25 osób", basic: "100", premium: "120" },
      { people: "15 – 19 osób", basic: "110", premium: "130" },
      { people: "10 – 14 osób", basic: "120", premium: "140" },
      { people: "6 – 9 osób", basic: "130", premium: "150" },

      // { people: "25+ osób", basic: "Indywidualnie", premium: "Indywidualnie" },
    ],
  },
  {
    title: "Masterclass",
    rows: [
      { people: "6 – 9 osób", basic: "130", premium: "150" },
      { people: "10 – 14 osób", basic: "120", premium: "140" },
      { people: "15 – 19 osób", basic: "110", premium: "130" },
      { people: "20 – 25 osób", basic: "100", premium: "120" },
      // { people: "25+ osób", basic: "Indywidualnie", premium: "Indywidualnie" },
    ],
  },
  {
    title: "Omakase",
    rows: [
      { people: "1 – 4 osoby", basic: "300", premium: "350" },
      { people: "5 – 8 osób", basic: "260", premium: "300" },
    ],
  },
];

export const Offer = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="Oferta" className="px-3 my-36 md:my-44 lg:my-80 ">
      <div className="  mx-auto   md:max-w-[90%]  lg:max-w-6xl     ">
        <h3 className="mb-6 text-5xl font-semibold text-center lg:text-7xl">
          Cennik usług
        </h3>
        <p className="max-w-lg mx-auto mb-8 text-center">
          Lorem ipsum dolor sit amet consectetur. Pulvinar eu rhoncus tincidunt
          eget mattis netus ridiculus.
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
