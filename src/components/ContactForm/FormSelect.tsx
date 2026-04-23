

import { motion, easeInOut } from "framer-motion";
import { FormTranslations } from "../Translations/translations";

type RepresentType = "company" | "individual";

type FormSelectProps = {
  selected: RepresentType;

setSelected: (v: RepresentType) => void;
  lang: "en" | "pl";
};

const BASE_TRANSITION = { duration: 0.4, ease: easeInOut };

export const FormSelect = ({ selected, setSelected, lang }: FormSelectProps) => {
  const t = FormTranslations[lang];

  return (
    <div className="flex border-b w-fit border-zinc-200 dark:border-zinc-800">
      {(["individual", "company"] as RepresentType[]).map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => setSelected(type)}
          className={`relative px-4 py-1.5  transition-colors duration-200 ${
            selected === type
              ? "text-zinc-900 dark:text-zinc-100"
              : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
          }`}
        >
          <span className="relative z-10">
            {type === "individual" ? t.individual : t.company}
          </span>
          {selected === type && (
            <motion.div
              layoutId="form-tab"
              transition={BASE_TRANSITION}
              className="absolute bottom-0 left-0 right-0 h-px bg-zinc-900 dark:bg-zinc-100"
            />
          )}
        </button>
      ))}
    </div>
  );
};