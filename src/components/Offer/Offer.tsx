import { AnimatePresence, motion } from "framer-motion";
import { type Dispatch, type SetStateAction, useState } from "react";
import { Tabs } from "./Tabs";
import { Table } from "./Table";


const FEATURES = [
  {
    title: "Live Cooking",
    rows: [
      { people: "6 – 9 osób", basic: "130", premium: "150" },
      { people: "10 – 14 osób", basic: "120", premium: "140" },
      { people: "15 – 19 osób", basic: "110", premium: "130" },
      { people: "20 – 25 osób", basic: "100", premium: "120" },
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
    <section id="Oferta" className="px-3">
      <div className="py-4  px-4 md:py-10 lg:py-20 md:px-12  lg:px-16 mb-12  md:mb-16 md:mt-8 lg:mb-28 lg:mt-10  mx-auto   md:max-w-[90%]  lg:max-w-7xl  gap-8 md:gap-20 bg-zinc-900/20 rounded-3xl  ">
       <Tabs selected={selected} setSelected={setSelected} FEATURES={FEATURES} />

        <AnimatePresence mode="wait">
                {FEATURES.map((feature, index) =>
                  selected === index ? (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <Table rows={feature.rows} />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>

      </div>
    </section>
  );
};
