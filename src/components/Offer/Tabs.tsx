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
        <span className="text-md md:text-xl lg:text-2xl font-semibold text-center">
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