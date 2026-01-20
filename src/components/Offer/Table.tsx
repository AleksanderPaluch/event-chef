import { AnimatePresence, motion } from "framer-motion";

import { type Dispatch, type SetStateAction, useState } from "react";

export const Table = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="">
      <div className="mx-auto ">
        <Tabs selected={selected} setSelected={setSelected} />

        <AnimatePresence mode="wait">
          {FEATURES.map((tab, index) => {
            return selected === index ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={index}
              >
                <tab.Feature />
              </motion.div>
            ) : undefined;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

interface TabsProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const Tabs = ({ selected, setSelected }: TabsProps) => {
  return (
    <div className="flex mb-4 md:mb-12 ">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

interface TabProps {
  selected: boolean;
  title: string;
  setSelected: Function;
  tabNum: number;
}

const Tab = ({ selected, title, setSelected, tabNum }: TabProps) => {
  return (
    <div className="relative w-full ">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full flex-row items-center justify-center gap-4   bg-zinc-900 px-1 py-2 md:p-6 transition-colors hover:bg-zinc-800 md:flex-col"
      >
        <span className=" text-lg md:text-xl lg:text-2xl transition-opacity text-center font-semibold">
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 z-10 h-1  md:h-2 bg-zinc-300 "
        />
      )}
    </div>
  );
};

const ExampleFeature = () => (
  <div className="rounded bg-white/10 ">
  <table className="w-full mx-auto border border-zinc-900 text-left ">
          <thead className="bg-zinc-900 text-sm  tracking-wide ">
            <tr className="text-lg ">
              <th className="px-2 py-1 md:px-6 md:py-4">Liczba osób</th>
              <th className="px-2 py-1 md:px-6 md:py-4 ">Basic</th>
              <th className="px-2 py-1 md:px-6 md:py-4">Premium</th>

            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-900">
            <tr className=" text-md ">
              <td className="px-2 py-1 md:px-6 md:py-4">6 – 9 osób</td>
              <td className="px-2 py-1 md:px-6 md:py-4">130 / osoba</td>
              <td className="px-2 py-1 md:px-6 md:py-4">150 / osoba</td>
         
            </tr>

            <tr className=" text-md ">
              <td className="px-2 py-1 md:px-6 md:py-4">10 – 14 osób</td>
              <td className="px-2 py-1 md:px-6 md:py-4">120 / osoba</td>
              <td className="px-2 py-1 md:px-6 md:py-4 ">140 / osoba</td>
    
            </tr>

            <tr className=" text-md ">
              <td className="px-2 py-1 md:px-6 md:py-4">15– 19 osób</td>
              <td className="px-2 py-1 md:px-6 md:py-4">110 / osoba</td>
              <td className="px-2 py-1 md:px-6 md:py-4">130 / osoba</td>
        
            </tr>
            <tr className=" text-md ">
              <td className="px-2 py-1 md:px-6 md:py-4">20-25 osób</td>
              <td className="px-2 py-1 md:px-6 md:py-4">100 / osoba</td>
              <td className="px-2 py-1 md:px-6 md:py-4">120 / osoba</td>
        
            </tr>
              <tr className=" text-md">
              <td className="px-2 py-1 md:px-6 md:py-4">25+ osób</td>
              <td className="px-2 py-1 md:px-6 md:py-4">Indywidualnie</td>
              <td className="px-2 py-1 md:px-6 md:py-4">Indywidualnie</td>
        
            </tr>
          </tbody>
        </table>
  </div>
);

const FEATURES = [
  {
    title: "Live Cooking",

    Feature: () => <ExampleFeature />,
  },
  {
    title: "Masterclass",

    Feature: () => <ExampleFeature />,
  },
  {
    title: "Omakase",

    Feature: () => <ExampleFeature />,
  },
];
