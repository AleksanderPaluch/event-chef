import { type Dispatch, type SetStateAction } from "react";
import type { RepresentType } from "./Form";
import { translations } from "../Translations/translations";
import { motion } from "framer-motion";

type FormSelectProps = {
  selected: RepresentType;
  setSelected: Dispatch<SetStateAction<RepresentType>>;
 lang: "en" | "pl";
};


const BASE_TRANSITION = {
  duration: 0.4,
  ease: "easeInOut",
};


export const FormSelect = ({ selected, setSelected, lang }: FormSelectProps) => {
  const t = translations[lang];

  return (
    <div className="overflow-hidden font-medium border rounded w-fit border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
      {/* Individual */}
      <button
        type="button"
        onClick={() => setSelected("individual")}
        className={`
          relative px-3 py-1.5 text-sm transition-colors duration-[750ms]
          ${
            selected === "individual"
              ? "text-white"
              : "text-zinc-700 dark:text-zinc-300"
          }
        `}
      >
        <span className="relative z-10"> {t.individual}</span>

        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-zinc-900 dark:bg-zinc-700"
          />
        )}
      </button>

      {/* Company */}
      <button
        type="button"
        onClick={() => setSelected("company")}
        className={`
          relative px-3 py-1.5 text-sm transition-colors duration-[750ms]
          ${
            selected === "company"
              ? "text-white"
              : "text-zinc-700 dark:text-zinc-300"
          }
        `}
      >
        <span className="relative z-10">{t.company}</span>

        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-zinc-800 dark:bg-zinc-600"
          />
        )}
      </button>
    </div>
  );
};