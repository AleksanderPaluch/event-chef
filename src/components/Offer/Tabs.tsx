import { motion } from "framer-motion";
import { type Dispatch, type SetStateAction } from "react";
import type { Feature } from "./OfferTypes";

interface TabsProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
   FEATURES: Feature[]; 
}



export const Tabs = ({ selected, setSelected, FEATURES }: TabsProps) => {
  return (
    <div className="flex mb-4 md:mb-12 lg:max-w-[80%] mx-auto gap-1 md:gap-2">
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
    <div className="relative w-full ">
      <button
        onClick={() => setSelected(tabNum)}
       className={`
          relative z-0 flex items-center justify-center w-full   py-2 md:p-6
          transition-colors rounded-lg
          border border-white/5 hover:border-white/30
          ${selected ? "bg-black/80" : "bg-zinc-950 hover:bg-black/40 "}
        `}
      >
        <span className="text-lg text-center md:text-3xl ">
          {title}
        </span>
      </button>

      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-md md:h-2 bg-zinc-300"
        />
      )}
    </div>
  );
};