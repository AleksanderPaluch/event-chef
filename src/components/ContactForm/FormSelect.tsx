import { type Dispatch, type SetStateAction } from "react";
import type { RepresentType } from "./Form";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { FormTranslations } from "../Translations/translations";

type FormSelectProps = {
  selected: RepresentType;
  setSelected: Dispatch<SetStateAction<RepresentType>>;
 lang: "en" | "pl";
};


const BASE_TRANSITION = {
  duration: 0.4,
  ease: easeInOut,
};


export const FormSelect = ({ selected, setSelected, lang }: FormSelectProps) => {
  const t = FormTranslations[lang];

  return (
    <div className="overflow-hidden font-medium border rounded-md w-fit border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
      {/* Individual */}
      <button
        type="button"
        onClick={() => setSelected("individual")}
        className={`
          relative px-4 h-[36px]  transition-colors duration-[750ms]
         
        `}
      >
        <span className="relative z-10"> {t.individual}</span>

        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-zinc-200/95 dark:bg-zinc-700"
          />
        )}
      </button>

      {/* Company */}
      <button
        type="button"
        onClick={() => setSelected("company")}
        className={`
          relative px-4 h-[36px]  transition-colors duration-[750ms]

        `}
      >
        <span className="relative z-10">{t.company}</span>

        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-zinc-200/95 dark:bg-zinc-700"
          />
        )}
      </button>
    </div>
  );
};