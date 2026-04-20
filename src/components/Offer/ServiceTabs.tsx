import { motion } from "framer-motion";
import type { OfferData } from "./Offer";

interface ServiceTabsProps {
  offers: OfferData[];
  selected: number;
  setSelected: (i: number) => void;
}

export const ServiceTabs = ({ offers, selected, setSelected }: ServiceTabsProps) => {
  return (
    <div className="tabs-wrapper">
      {offers.map((offer, i) => (
        <div key={offer.title} className="relative w-full">
          <button
            onClick={() => setSelected(i)}
            className={`tab-button ${selected === i ? "tab-selected" : "tab-unselected"}`}
          >
            <span className="tab-text">{offer.title}</span>
          </button>
          {selected === i && (
            <motion.span layoutId="service-tab-underline" className="tab-underline" />
          )}
        </div>
      ))}
    </div>
  );
};