

import { motion, easeInOut } from "framer-motion";
import { FormTranslations } from "../Translations/FormTranslations";

type RepresentType = "company" | "individual";

type RepresentationSelectorProps = {
  selected: RepresentType;
  setSelected: (v: RepresentType) => void;
  lang: "en" | "pl";
};

const BASE_TRANSITION = { duration: 0.4, ease: easeInOut };

export const RepresentationSelector = ({ selected, setSelected, lang }: RepresentationSelectorProps) => {
  const t = FormTranslations[lang];

  return (
    <div className="flex border-b w-fit border-subtle">
      {(["individual", "company"] as RepresentType[]).map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => setSelected(type)}
          className={`relative px-4 py-1.5 transition-colors duration-200 font-semibold ${
            selected === type
              ? "text-muted"
              : "text-muted hover:text-black dark:hover:text-zinc-300"
          }`}
        >
          <span className="relative z-10">
            {type === "individual" ? t.individual : t.company}
          </span>
          {selected === type && (
            <motion.div
              layoutId="form-tab"
              transition={BASE_TRANSITION}
              className="absolute bottom-0 left-0 right-0 h-px bg-zinc-700 dark:bg-zinc-300"
            />
          )}
        </button>
      ))}
    </div>
  );
};