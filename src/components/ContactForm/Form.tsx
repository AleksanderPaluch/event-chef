import { type Dispatch, type SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../Button/Button";
import { translations } from "../Translations/translations";
import { FormSelect } from "./FormSelect";



export type Lang = "en" | "pl";
export type RepresentType = "company" | "individual";

type FormProps = {
  selected: RepresentType;
  setSelected: Dispatch<SetStateAction<RepresentType>>;
  // lang: Lang;
};


const BASE_TRANSITION = {
  duration: 0.4,
  ease: "easeInOut",
};


export const Form = ({ selected, setSelected }: FormProps) => {
  const lang =  "pl";
  const t = translations[lang];

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        p-8 w-full
        transition-colors duration-[750ms]
        bg-white 
        dark:bg-zinc-950
      "
    >
      {/* Name */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">{t.nameLabel}</p>
        <input
          type="text"
          placeholder={t.namePlaceholder}
          className="
            w-full p-2 rounded-md focus:outline-none
            transition-colors duration-[750ms]
            bg-zinc-100 text-zinc-900 placeholder-zinc-500
            dark:bg-zinc-800 dark:text-white dark:placeholder-white/60
            border border-black/15 focus:border-black/40
            dark:border-white/5 dark:focus:border-white/30
          "
        />
      </div>

      {/* Represent */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">{t.representLabel}</p>
        <FormSelect selected={selected} setSelected={setSelected} lang={lang} />
      </div>

      {/* Company Name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{ marginTop: -104, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: -104, opacity: 0 }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="mb-2 text-2xl">{t.companyNameLabel}</p>
            <input
              type="text"
              placeholder={t.companyNamePlaceholder}
              className="
                w-full p-2 rounded-md focus:outline-none
                transition-colors duration-[750ms]
                bg-zinc-100 text-zinc-900 placeholder-zinc-500
                dark:bg-zinc-800 dark:text-white dark:placeholder-white/60
                border border-black/15 focus:border-black/40
                dark:border-white/5 dark:focus:border-white/30
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message */}
      <div className="mb-6">
        <p className="mb-2 text-2xl">{t.messageLabel}</p>
        <textarea
          placeholder={t.messagePlaceholder}
          className="
            w-full p-2 rounded-md min-h-[150px] resize-none focus:outline-none
            transition-colors duration-[750ms]
            bg-zinc-100 text-zinc-900 placeholder-zinc-500
            dark:bg-zinc-800 dark:text-white dark:placeholder-white/60
            border border-black/15 focus:border-black/40
            dark:border-white/5 dark:focus:border-white/30
          "
        />
      </div>

      {/* Submit */}
      <Button text={t.submit} />
    </form>
  );
};
