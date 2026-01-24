import { AnimatePresence, motion } from "framer-motion";
import { type Dispatch, type SetStateAction, useState } from "react";

/* =======================
   TABLE (ROOT COMPONENT)
======================= */

export const Table = (  ) => {
  const [selected, setSelected] = useState(0);

  return (
    <section>
      <div className="mx-auto">
        <Tabs selected={selected} setSelected={setSelected} />

        <AnimatePresence mode="wait">
          {FEATURES.map((feature, index) =>
            selected === index ? (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <ExampleFeature rows={feature.rows} />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

/* =======================
   TABS
======================= */

interface TabsProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const Tabs = ({ selected, setSelected }: TabsProps) => {
  return (
    <div className="flex mb-4 md:mb-12">
      {FEATURES.map((tab, index) => (
        <Tab
          key={tab.title}
          title={tab.title}
          selected={selected === index}
          tabNum={index}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

interface TabProps {
  selected: boolean;
  title: string;
  setSelected: (value: number) => void;
  tabNum: number;
}

const Tab = ({ selected, title, setSelected, tabNum }: TabProps) => {
  return (
    <div className="relative w-full">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full items-center justify-center bg-zinc-900 px-1 py-2 md:p-6 transition-colors hover:bg-zinc-800"
      >
        <span className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
          {title}
        </span>
      </button>

      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 h-1 md:h-2 bg-zinc-300"
        />
      )}
    </div>
  );
};

/* =======================
   TABLE VIEW (PRESENTATIONAL)
======================= */

interface Row {
  people: string;
  basic: string;
  premium: string;
}

const ExampleFeature = ({ rows }: { rows: Row[] }) => (
  <div className="flex flex-col gap-2 md:flex-row">
    <table className="w-full mx-auto border border-zinc-900 text-left font-light">
      <thead className="bg-zinc-900 tracking-wide">
        <tr className="text-lg md:text-xl lg:text-2xl">
          {["Liczba osób", "Basic", "Premium"].map((header) => (
            <th
              key={header}
              className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4 font-normal"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-zinc-900 bg-zinc-100/10">
        {rows.map((row, index) => (
          <tr key={index} className="text-sm md:text-md lg:text-lg">
            <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
              {row.people}
            </td>
            <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
              {row.basic}
            </td>
            <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
              {row.premium}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="bg-zinc-800 w-full md:max-w-72 lg:max-w-md min-h-40" >
      <div ></div>
      <div></div>
    </div>
  </div>
);

/* =======================
   FEATURES DATA (SOURCE OF TRUTH)
======================= */

const FEATURES = [
  {
    title: "Live Cooking",
    rows: [
      { people: "6–9 osób", basic: "130 / osoba", premium: "150 / osoba" },
      { people: "10–14 osób", basic: "120 / osoba", premium: "140 / osoba" },
      { people: "15–19 osób", basic: "110 / osoba", premium: "130 / osoba" },
      { people: "20–25 osób", basic: "100 / osoba", premium: "120 / osoba" },
      { people: "25+ osób", basic: "Indywidualnie", premium: "Indywidualnie" },
    ],
  },
  {
    title: "Masterclass",
    rows: [
      { people: "6–9 osób", basic: "150 / osoba", premium: "170 / osoba" },
      { people: "10–14 osób", basic: "140 / osoba", premium: "160 / osoba" },
      { people: "15–19 osób", basic: "130 / osoba", premium: "150 / osoba" },
      { people: "20–25 osób", basic: "120 / osoba", premium: "140 / osoba" },
      { people: "25+ osób", basic: "Indywidualnie", premium: "Indywidualnie" },
    ],
  },
  {
    title: "Omakase",
    rows: [
      { people: "1–4 osoby", basic: "300 / osoba", premium: "350 / osoba" },
      { people: "5–8 osób", basic: "260 / osoba", premium: "300 / osoba" },
      { people: "9+ osób", basic: "Indywidualnie", premium: "Indywidualnie" },
    ],
  },
];
