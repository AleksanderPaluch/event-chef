import { motion } from "framer-motion";
import type { PeopleTab } from "./Offer";

interface PeopleTabsProps {
  tabs: PeopleTab[];
  selected: PeopleTab;
  setSelected: (t: PeopleTab) => void;
}

export const PeopleTabs = ({ tabs, selected, setSelected }: PeopleTabsProps) => {
  return (
    <div className="tabs-wrapper">
      {tabs.map((tab) => (
        <div key={tab} className="relative w-full">
          <button
            onClick={() => setSelected(tab)}
            className={`tab-button ${selected === tab ? "tab-selected" : "tab-unselected"}`}
          >
            <span className="tab-text">{tab} os.</span>
          </button>
          {selected === tab && (
            <motion.span layoutId="people-tab-underline" className="tab-underline" />
          )}
        </div>
      ))}
    </div>
  );
};