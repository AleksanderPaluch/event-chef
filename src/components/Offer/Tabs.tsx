import { motion } from "framer-motion";
import { type Dispatch, type SetStateAction } from "react";
import type { Feature } from "./OfferTypes";

interface TabsProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
   FEATURES: Feature[]; 
}


interface TabProps {
  selected: boolean;
  title: string;
  setSelected: (value: number) => void;
  tabNum: number;
}




export const Tabs = ({ selected, setSelected, FEATURES }: TabsProps) => {
  return (
    <div className="tabs-wrapper">
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

const Tab = ({ selected, title, setSelected, tabNum }: TabProps) => {
  return (
    <div className="relative w-full">
      <button
        onClick={() => setSelected(tabNum)}
        className={`tab-button ${selected ? "tab-selected" : "tab-unselected"}`}
      >
        <span className="tab-text">{title}</span>
      </button>

      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="tab-underline"
        />
      )}
    </div>
  );
};
